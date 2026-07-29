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

  function getThemePreference() {
    return storedTheme || "system";
  }

  function setThemePreference(value) {
    storedTheme = value === "light" || value === "dark" ? value : "";
    try {
      if (storedTheme) window.localStorage.setItem(storageKey, storedTheme);
      else window.localStorage.removeItem(storageKey);
    } catch (error) {
    }
    applyTheme();
    window.dispatchEvent(new CustomEvent("airpulse-preferences-change"));
  }

  function applyTheme() {
    var activeTheme = getActiveTheme();
    var nextLabel = activeTheme === "dark" ? "Light mode" : "Dark mode";

    root.setAttribute("data-theme", activeTheme);
    root.style.colorScheme = activeTheme;

    if (themeMeta) {
      themeMeta.setAttribute(
        "content",
        activeTheme === "dark" ? "#100f11" : "#f7f4ef"
      );
    }

    brandIcons.forEach(function (node) {
      node.setAttribute("src", "assets/Version7.png");
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
      setThemePreference(getActiveTheme() === "dark" ? "light" : "dark");
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

  window.airPulsePreferences = {
    getTheme: getThemePreference,
    setTheme: setThemePreference
  };
  window.dispatchEvent(new CustomEvent("airpulse-preferences-ready"));
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
  var header = document.querySelector(".site-header");
  if (!header) return;

  function updateHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
})();
