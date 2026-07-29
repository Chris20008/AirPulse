(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  if (!header) return;

  var headerActions = header.querySelector(".header-actions");
  var storeButton = headerActions && headerActions.querySelector(".store-button");
  if (!headerActions || !storeButton) return;

  var sourceNavigation = header.querySelector(".site-nav");
  var hasLanguagePreference = Boolean(header.querySelector("[data-language-toggle]"));
  var hasThemePreference = Boolean(header.querySelector("[data-theme-toggle]"));
  var page = document.body.getAttribute("data-page") || "";
  var root = document.documentElement;
  var previousFocus = null;
  var closeTimer = null;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var copy = {
    de: {
      open: "Menü öffnen",
      close: "Menü schließen",
      label: "Menü",
      navigation: "Seiten",
      settings: "Einstellungen",
      home: "Startseite",
      setup: "Einrichtung",
      faq: "Fragen",
      tags: "Session Tags",
      legal: "Rechtliches",
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutz",
      imprint: "Impressum",
      language: "Sprache",
      appearance: "Darstellung",
      system: "System",
      english: "English",
      german: "Deutsch",
      light: "Hell",
      dark: "Dunkel"
    },
    en: {
      open: "Open menu",
      close: "Close menu",
      label: "Menu",
      navigation: "Pages",
      settings: "Settings",
      home: "Home",
      setup: "Setup",
      faq: "Questions",
      tags: "Session Tags",
      legal: "Legal",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      imprint: "Imprint",
      language: "Language",
      appearance: "Appearance",
      system: "System",
      english: "English",
      german: "Deutsch",
      light: "Light",
      dark: "Dark"
    }
  };

  function currentLanguage() {
    return root.lang && root.lang.toLowerCase().indexOf("de") === 0 ? "de" : "en";
  }

  function preferenceApi() {
    return window.airPulsePreferences || null;
  }

  function currentPreference(type) {
    var api = preferenceApi();
    if (!api) return "system";
    if (type === "language" && typeof api.getLanguage === "function") return api.getLanguage();
    if (type === "theme" && typeof api.getTheme === "function") return api.getTheme();
    return "system";
  }

  function setPreference(type, value) {
    var api = preferenceApi();
    if (!api) return;
    if (type === "language" && typeof api.setLanguage === "function") api.setLanguage(value);
    if (type === "theme" && typeof api.setTheme === "function") api.setTheme(value);
  }

  function createIcon(path) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    var iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    iconPath.setAttribute("d", path);
    svg.appendChild(iconPath);
    return svg;
  }

  var toggle = document.createElement("button");
  toggle.className = "mobile-menu-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = '<span aria-hidden="true"><i></i><i></i><i></i></span>';
  headerActions.insertBefore(toggle, storeButton.nextSibling);

  var menu = document.createElement("div");
  menu.className = "mobile-menu";
  menu.id = "mobile-menu";
  menu.setAttribute("role", "dialog");
  menu.setAttribute("aria-modal", "true");
  menu.setAttribute("aria-hidden", "true");
  menu.setAttribute("tabindex", "-1");
  toggle.setAttribute("aria-controls", menu.id);

  var menuInner = document.createElement("div");
  menuInner.className = "mobile-menu-inner";
  menu.appendChild(menuInner);

  var menuHeader = document.createElement("div");
  menuHeader.className = "mobile-menu-header";
  menuHeader.innerHTML =
    '<a class="mobile-menu-brand" href="index.html" aria-label="AirPulse"><img src="assets/Version7.png" alt="" width="1024" height="1024" /><strong>AirPulse</strong></a>' +
    '<span class="mobile-menu-title"></span>';
  menuInner.appendChild(menuHeader);

  var navigationLabel = document.createElement("p");
  navigationLabel.className = "mobile-menu-section-label mobile-menu-navigation-label";
  menuInner.appendChild(navigationLabel);

  var navigation = document.createElement("nav");
  navigation.className = "mobile-menu-navigation";
  menuInner.appendChild(navigation);
  var navigationPageLabels = {};
  var currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  function isCurrentPage(href) {
    return (href.split("#")[0].split("?")[0].split("/").pop() || "index.html").toLowerCase() === currentFile;
  }

  function addNavigationLink(href, text, isCurrent) {
    var link = document.createElement("a");
    link.href = href;
    if (isCurrent) link.setAttribute("aria-current", "page");

    var label = document.createElement("span");
    label.textContent = text;
    link.appendChild(label);
    navigation.appendChild(link);
    return label;
  }

  var homeLabel = addNavigationLink("index.html", "", page === "home" || isCurrentPage("index.html"));
  if (sourceNavigation) {
    Array.prototype.forEach.call(sourceNavigation.querySelectorAll("a"), function (sourceLink) {
      var href = sourceLink.getAttribute("href") || "#";
      var label = addNavigationLink(
        href,
        sourceLink.textContent.trim(),
        sourceLink.getAttribute("aria-current") === "page"
      );
      if (href.indexOf("how-to.html") !== -1) navigationPageLabels.setup = label;
      else if (href.indexOf("faq.html") !== -1) navigationPageLabels.faq = label;
      else if (href.indexOf("tags.html") !== -1) navigationPageLabels.tags = label;
    });
  }

  var legalLabel = document.createElement("p");
  legalLabel.className = "mobile-menu-section-label mobile-menu-legal-label";
  menuInner.appendChild(legalLabel);

  var legalNavigation = document.createElement("nav");
  legalNavigation.className = "mobile-menu-navigation mobile-menu-legal-navigation";
  menuInner.appendChild(legalNavigation);

  function addLegalLink(href, key) {
    var link = document.createElement("a");
    link.href = href;
    if (isCurrentPage(href)) link.setAttribute("aria-current", "page");

    var label = document.createElement("span");
    link.appendChild(label);
    legalNavigation.appendChild(link);
    navigationPageLabels[key] = label;
  }

  addLegalLink("terms-of-use.html", "terms");
  addLegalLink("privacy-policy.html", "privacy");
  addLegalLink("imprint.html", "imprint");

  var settingsLabel = document.createElement("p");
  settingsLabel.className = "mobile-menu-section-label mobile-menu-settings-label";
  menuInner.appendChild(settingsLabel);

  var settings = document.createElement("div");
  settings.className = "mobile-menu-settings";
  menuInner.appendChild(settings);

  function createSettingControl(type, values) {
    var control = document.createElement("label");
    control.className = "mobile-menu-setting";
    control.innerHTML = '<span><strong></strong><small aria-hidden="true"></small></span>';
    control.appendChild(createIcon("M9 18l6-6-6-6"));

    var select = document.createElement("select");
    select.className = "mobile-menu-native-select";
    select.setAttribute("data-preference-select", type);
    values.forEach(function (value) {
      var option = document.createElement("option");
      option.value = value;
      select.appendChild(option);
    });
    select.addEventListener("change", function () {
      setPreference(type, select.value);
      updateCopy();
    });
    control.appendChild(select);
    settings.appendChild(control);

    return {
      control: control,
      select: select,
      title: control.querySelector("strong"),
      value: control.querySelector("small")
    };
  }

  var languageControl = hasLanguagePreference
    ? createSettingControl("language", ["system", "en", "de"])
    : null;
  var themeControl = hasThemePreference
    ? createSettingControl("theme", ["system", "dark", "light"])
    : null;

  if (!settings.children.length) {
    settingsLabel.hidden = true;
    settings.hidden = true;
  }

  var closeButton = document.createElement("button");
  closeButton.className = "mobile-menu-close";
  closeButton.type = "button";
  closeButton.appendChild(createIcon("M6 6l12 12M18 6 6 18"));
  menuInner.appendChild(closeButton);

  document.body.appendChild(menu);
  document.body.classList.add("has-mobile-menu");

  function preferenceValue(value, strings) {
    if (value === "en") return strings.english;
    if (value === "de") return strings.german;
    if (value === "light") return strings.light;
    if (value === "dark") return strings.dark;
    return strings.system;
  }

  function updateControl(control, type, title, optionLabels, strings) {
    if (!control) return;
    var selected = currentPreference(type);
    control.title.textContent = title;
    control.value.textContent = preferenceValue(selected, strings);
    control.select.setAttribute("aria-label", title);
    Array.prototype.forEach.call(control.select.options, function (option) {
      option.textContent = optionLabels[option.value];
    });
    control.select.value = selected;
  }

  function updateCopy() {
    var strings = copy[currentLanguage()];

    toggle.setAttribute("aria-label", strings.open);
    menu.setAttribute("aria-label", strings.label);
    closeButton.setAttribute("aria-label", strings.close);
    menuHeader.querySelector(".mobile-menu-title").textContent = strings.label;
    navigationLabel.textContent = strings.navigation;
    navigation.setAttribute("aria-label", strings.navigation);
    legalLabel.textContent = strings.legal;
    legalNavigation.setAttribute("aria-label", strings.legal);
    settingsLabel.textContent = strings.settings;
    homeLabel.textContent = strings.home;
    if (navigationPageLabels.setup) navigationPageLabels.setup.textContent = strings.setup;
    if (navigationPageLabels.faq) navigationPageLabels.faq.textContent = strings.faq;
    if (navigationPageLabels.tags) navigationPageLabels.tags.textContent = strings.tags;
    navigationPageLabels.terms.textContent = strings.terms;
    navigationPageLabels.privacy.textContent = strings.privacy;
    navigationPageLabels.imprint.textContent = strings.imprint;

    updateControl(
      languageControl,
      "language",
      strings.language,
      { system: strings.system, en: strings.english, de: strings.german },
      strings
    );
    updateControl(
      themeControl,
      "theme",
      strings.appearance,
      { system: strings.system, dark: strings.dark, light: strings.light },
      strings
    );
  }

  function focusableNodes() {
    return Array.prototype.slice.call(menuInner.querySelectorAll("a[href], button:not([disabled]), select:not([disabled])"));
  }

  function unlockPage() {
    root.classList.remove("mobile-menu-open");
    closeTimer = null;
    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus({ preventScroll: true });
    }
  }

  function openMenu() {
    if (menu.classList.contains("is-open")) return;
    if (closeTimer) {
      window.clearTimeout(closeTimer);
      closeTimer = null;
    } else {
      previousFocus = document.activeElement;
      root.classList.add("mobile-menu-open");
    }
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    menu.classList.add("is-open");
    menu.focus({ preventScroll: true });
  }

  function closeMenu() {
    if (!menu.classList.contains("is-open")) return;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    closeTimer = window.setTimeout(unlockPage, reduceMotion ? 0 : 300);
  }

  toggle.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  navigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu();
  });

  legalNavigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (!menu.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (event.key !== "Tab") return;

    var nodes = focusableNodes();
    if (!nodes.length) return;
    var first = nodes[0];
    var last = nodes[nodes.length - 1];
    if (document.activeElement === menu) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  var menuViewport = window.matchMedia ? window.matchMedia("(max-width: 1040px)") : null;
  if (menuViewport) {
    var handleViewportChange = function (event) {
      if (!event.matches) closeMenu();
    };
    if (menuViewport.addEventListener) menuViewport.addEventListener("change", handleViewportChange);
    else if (menuViewport.addListener) menuViewport.addListener(handleViewportChange);
  }

  if (window.MutationObserver) {
    new MutationObserver(updateCopy).observe(root, {
      attributes: true,
      attributeFilter: ["lang", "data-theme"]
    });
  }

  window.addEventListener("airpulse-preferences-ready", updateCopy);
  window.addEventListener("airpulse-preferences-change", updateCopy);
  window.setTimeout(updateCopy, 0);
  updateCopy();
})();
