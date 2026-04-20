(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();

(function () {
  var storageKey = "airpulse-theme";
  var root = document.documentElement;
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  var themeButtons = Array.prototype.slice.call(
    document.querySelectorAll("[data-theme-toggle]")
  );
  var brandIcons = Array.prototype.slice.call(
    document.querySelectorAll("[data-brand-icon]")
  );
  var darkMedia = null;

  try {
    darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
  } catch (error) {
    darkMedia = null;
  }

  function readStoredTheme() {
    try {
      var value = window.localStorage.getItem(storageKey) || "";
      return value === "light" || value === "dark" ? value : "";
    } catch (error) {
      return "";
    }
  }

  var storedTheme = readStoredTheme();

  function getActiveTheme() {
    if (storedTheme) return storedTheme;
    return darkMedia && darkMedia.matches ? "dark" : "light";
  }

  function applyTheme() {
    var activeTheme = getActiveTheme();
    var nextLabel = activeTheme === "dark" ? "Light mode" : "Dark mode";

    root.setAttribute("data-theme", activeTheme);
    root.style.colorScheme = activeTheme;

    if (themeMeta) {
      themeMeta.setAttribute(
        "content",
        activeTheme === "dark" ? "#07111d" : "#f7f7fb"
      );
    }

    brandIcons.forEach(function (node) {
      node.setAttribute(
        "src",
        activeTheme === "dark"
          ? "assets/Version7_old.png"
          : "assets/Version7.png"
      );
    });

    themeButtons.forEach(function (button) {
      button.setAttribute(
        "aria-label",
        "Switch to " + nextLabel.toLowerCase()
      );
      button.setAttribute("title", "Switch to " + nextLabel.toLowerCase());
      button.setAttribute(
        "aria-pressed",
        activeTheme === "dark" ? "true" : "false"
      );

      var label = button.querySelector("[data-theme-toggle-label]");
      if (label) label.textContent = nextLabel;
    });
  }

  themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      storedTheme = getActiveTheme() === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(storageKey, storedTheme);
      } catch (error) {
      }
      applyTheme();
    });
  });

  if (darkMedia && darkMedia.addEventListener) {
    darkMedia.addEventListener("change", function () {
      if (storedTheme) return;
      applyTheme();
    });
  } else if (darkMedia && darkMedia.addListener) {
    darkMedia.addListener(function () {
      if (storedTheme) return;
      applyTheme();
    });
  }

  applyTheme();
})();

(function () {
  var appStoreId = "6760625679";
  var appStoreWebUrl = "https://apps.apple.com/us/app/airpulse/id" + appStoreId;
  var appStoreDirectUrl = "itms-apps://itunes.apple.com/app/id" + appStoreId;
  var appStoreLinks = Array.prototype.slice.call(document.querySelectorAll("[data-app-store-link]"));

  appStoreLinks.forEach(function (node) {
    node.setAttribute("href", appStoreWebUrl);

    node.addEventListener("click", function (event) {
      var userAgent = "";
      try {
        userAgent = window.navigator.userAgent || "";
      } catch (error) {
        userAgent = "";
      }

      var isIOS = /iPad|iPhone|iPod/.test(userAgent) || (/Mac/.test(userAgent) && "ontouchend" in document);
      if (!isIOS) return;

      event.preventDefault();
      window.location.href = appStoreDirectUrl;
      window.setTimeout(function () {
        window.location.href = appStoreWebUrl;
      }, 1200);
    });
  });
})();

(function () {
  var header = document.querySelector(".topbar");
  var headerShell = document.querySelector(".topbarShell");
  if (!header || !window.matchMedia) return;

  var mobileMedia = window.matchMedia("(max-width: 760px)");
  var compactThreshold = 20;
  var expandedHeight = 0;
  var compactHeight = 0;

  function measureHeaderHeights() {
    if (!headerShell) return;
    if (!mobileMedia.matches) {
      headerShell.style.removeProperty("--topbar-shell-height");
      return;
    }

    var wasCompact = header.classList.contains("is-compact");
    header.classList.add("is-measuring");
    headerShell.classList.add("is-measuring");

    header.classList.remove("is-compact");
    expandedHeight = header.offsetHeight;

    header.classList.add("is-compact");
    compactHeight = header.offsetHeight;

    header.classList.toggle("is-compact", wasCompact);
    header.classList.remove("is-measuring");
    headerShell.classList.remove("is-measuring");
  }

  function syncHeaderShellHeight(forceCompact) {
    if (!headerShell) return;
    if (!mobileMedia.matches) {
      headerShell.style.removeProperty("--topbar-shell-height");
      return;
    }

    var compact = typeof forceCompact === "boolean" ? forceCompact : header.classList.contains("is-compact");
    var targetHeight = compact ? compactHeight : expandedHeight;
    if (!targetHeight) return;
    headerShell.style.setProperty("--topbar-shell-height", targetHeight + "px");
  }

  function updateHeaderState() {
    if (!mobileMedia.matches) {
      header.classList.remove("is-compact");
      syncHeaderShellHeight(false);
      return;
    }

    var y = window.scrollY || window.pageYOffset || 0;
    var shouldCompact = y > compactThreshold;
    header.classList.toggle("is-compact", shouldCompact);
    syncHeaderShellHeight(shouldCompact);
  }

  measureHeaderHeights();
  syncHeaderShellHeight();
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
  window.addEventListener("resize", function () {
    measureHeaderHeights();
    syncHeaderShellHeight();
    updateHeaderState();
  });

  if (mobileMedia.addEventListener) {
    mobileMedia.addEventListener("change", function () {
      measureHeaderHeights();
      syncHeaderShellHeight();
      updateHeaderState();
    });
  } else if (mobileMedia.addListener) {
    mobileMedia.addListener(function () {
      measureHeaderHeights();
      syncHeaderShellHeight();
      updateHeaderState();
    });
  }
})();
