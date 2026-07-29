(function () {
  "use strict";

  var appStoreId = "6760625679";
  var appStoreWebUrl = "https://apps.apple.com/us/app/airpulse/id" + appStoreId;
  var appStoreDirectUrl = "itms-apps://itunes.apple.com/app/id" + appStoreId;
  var languageStorageKey = "airpulse-language";
  var themeStorageKey = "airpulse-theme";
  var root = document.documentElement;
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  var language = readLanguage();
  var storedTheme = readStoredValue(themeStorageKey);
  var darkMedia = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var refreshFaqSearch = null;

  var translations = {
    de: {
      pageTitle: "AirPulse | Automatische Pulsaufzeichnung mit AirPods Pro 3",
      metaDescription:
        "AirPulse startet per Kurzbefehl, wenn du AirPods Pro 3 einsetzt. Das iPhone kann dabei gesperrt bleiben.",
      "skip.link": "Zum Inhalt springen",
      "brand.homeLabel": "AirPulse Startseite",
      "brand.subtitle": "Automatische Pulsaufzeichnung",
      "nav.mainLabel": "Hauptnavigation",
      "nav.setup": "Einrichtung",
      "nav.faq": "Fragen",
      "nav.tags": "Session Tags",
      "nav.store": "App Store",
      "hero.titleLead": "AirPods rein.",
      "hero.titleSignal": "Aufzeichnung läuft.",
      "hero.lede":
        "Richte einmal eine persönliche Automation in Apple Kurzbefehle ein. Danach startet AirPulse die Pulsaufzeichnung jederzeit automatisch, sobald du deine AirPods Pro 3 einsetzt, auch bei gesperrtem iPhone",
      "hero.primary": "Im App Store ansehen",
      "hero.secondary": "Den Ablauf entdecken",
      "hero.stageLabel": "AirPulse Live-Ansicht",
      "hero.statusLiveTitle": "Live Activity aktiv",
      "hero.statusLiveText": "Live Activity & Dynamic Island",
      "boundaries.kicker": "Was AirPulse bewusst nicht speichert",
      "boundaries.title": "Kein Workout in Apple Fitness. Kein Kalorientracking",
      "boundaries.fitnessTitle": "Nicht in Apple Fitness",
      "boundaries.fitnessBody":
        "Die AirPulse-Session bleibt in AirPulse und wird nicht als Workout in Apple Fitness gespeichert. Deine Ringe in Apple Fitness bleiben komplett unberührt",
      "boundaries.caloriesTitle": "Kein Kalorientracking",
      "boundaries.caloriesBody": "AirPulse liest, berechnet, zeigt und speichert keine Kalorienwerte. Das gilt auch für Apple Health",
      "story.title": "Vom Einsetzen zur gespeicherten Session",
      "story.lede":
        "Der Kurzbefehl startet die Aufzeichnung. Während der Session zeigt AirPulse den aktuellen Puls, danach speichert die App den Verlauf. Mit Pro kommen persönliche Berichte für Session-Tags hinzu.",
      "step1.label": "01 · Auslöser",
      "step1.title": "Einsetzen statt starten",
      "step1.body":
        "Nach der einmaligen Einrichtung in Apple Kurzbefehle löst die Verbindung deiner AirPods Pro 3 die Pulsaufzeichnung direkt aus. Dein iPhone kann dabei gesperrt bleiben.",
      "step1.setup": "Kurzbefehle einrichten",
      "automation.label": "Automatischer Ablauf",
      "automation.state1Title": "AirPods Pro 3",
      "automation.state1Text": "Verbunden",
      "automation.state2Title": "Start Pulse Tracking",
      "automation.state2Text": "Sofort ausgeführt",
      "automation.state3Title": "AirPulse Session",
      "automation.state3Text": "Aufzeichnung aktiv",
      "step2.label": "02 · Live",
      "step2.title": "Dein Puls bleibt sichtbar",
      "step2.body":
        "Aktuelle BPM und der Verlauf erscheinen in der Live Activity auf dem Sperrbildschirm. In der Dynamic Island siehst du, dass die Session läuft. Die App muss dafür nicht geöffnet sein.",
      "step3.label": "03 · Verlauf",
      "step3.title": "Aus Messwerten wird eine Session",
      "step3.body":
        "AirPulse speichert den Verlauf als Session mit Dauer, Pausen, Kurve, Min-, Durchschnitts- und Maximalwerten. Tags geben der Aufzeichnung den passenden Kontext.",
      "step3.tags": "Mehr über Tags",
      "step4.label": "04 · Tag-Berichte",
      "step4.title": "Erkenne Muster und Trends über mehrere Sessions hinweg",
      "step4.body":
        "Mit Pro vergleichen Tag-Berichte aktuelle Sessions mit deinem persönlichen Normalbereich. Für jeden Session-Tag siehst du den Verlauf und die Zeitverteilung.",
      "features.title": "Weitere Funktionen für aktive Sessions",
      "features.lede":
        "Diese Funktionen ergänzen den automatischen Start und lassen sich je nach Session oder Tag aktivieren.",
      "feature1.title": "Live Activity direkt bedienen",
      "feature1.body":
        "In der Live Activity kannst du den Session-Tag wechseln und das Audio-Feedback stummschalten, ohne die App zu öffnen.",
      "feature2.title": "Audio-Feedback nach deinen Zonen",
      "feature2.body":
        "AirPulse Pro kann Zonenwechsel und persönliche Limits über deine Kopfhörer ansagen. Du kannst Profile Tags zuordnen und eigene Audiodateien hinzufügen.",
      "feature3.title": "Optionaler Standortverlauf je Session-Tag",
      "feature3.body":
        "Mit Pro kannst du den Standortverlauf für einzelne Session-Tags aktivieren. Gespeicherte Routen zeigen Karte, Strecke, Geschwindigkeit und Splits.",
      "feature4.title": "Lokale Sessions, optionales iCloud-Backup",
      "feature4.body":
        "Die Session-Datenbank wird lokal geführt. Wenn iCloud verfügbar ist, kann AirPulse sie darüber sichern und wiederherstellen; ausgewählte Einstellungen können über Apple-Dienste synchronisiert werden.",
      "truth.title": "Wo AirPulse deine Daten speichert",
      "truth.lede":
        "Die Session-Datenbank liegt lokal auf deinem Gerät. AirPulse betreibt keinen eigenen Upload-Server. Wenn iCloud für deinen Apple-Account verfügbar ist, kann die App dort eine Backup-Kopie speichern und ausgewählte Einstellungen synchronisieren.",
      "truth.item1Title": "Kein AirPulse-Server",
      "truth.item1Body":
        "AirPulse überträgt Gesundheits-, Herzfrequenz-, Standort- oder andere App-Daten nicht an einen vom Anbieter betriebenen Upload-Server. Einen solchen Server gibt es nicht.",
      "truth.item2Title": "Lokale Session-Datenbank",
      "truth.item2Body":
        "Sessions liegen in einer Datenbank auf deinem Gerät. Wenn iCloud für deinen Apple-Account verfügbar ist, kann dort zusätzlich eine Backup-Kopie liegen.",
      "truth.item3Title": "Standortverlauf nur nach Aktivierung",
      "truth.item3Body":
        "Standortpunkte werden nur gespeichert, wenn Pro aktiv ist und du den Standortverlauf für den aktuellen Session-Tag eingeschaltet hast.",
      "truth.item4Title": "Apple-Dienste mit eigenen Bedingungen",
      "truth.item4Body":
        "HealthKit, iCloud, Apple Maps, StoreKit, Kurzbefehle und Live Activities hängen von Apple-Berechtigungen, der Systemverfügbarkeit und den jeweiligen Apple-Bedingungen ab.",
      "faq.title": "Häufige Fragen",
      "faq.pageTitle": "Häufige Fragen | AirPulse",
      "faq.metaDescription":
        "Antworten zu Autostart, Berechtigungen, Live Activity, Session-Tags, Pulszonen, Standort, Speicherung und Kompatibilität in AirPulse",
      "faq.groupStart": "Start & Voraussetzungen",
      "faq.groupLive": "Live Activity & Bedienung",
      "faq.groupAudio": "Tags, Pulszonen & Audio",
      "faq.groupData": "Standort & Daten",
      "faq.groupCompatibility": "Kompatibilität & Grenzen",
      "faq.searchLabel": "Fragen durchsuchen",
      "faq.searchResultOne": "1 Treffer",
      "faq.searchResultMany": "{count} Treffer",
      "faq.searchEmpty": "Keine passende Frage gefunden",
      "faq.q1": "Startet AirPulse auch bei gesperrtem iPhone?",
      "faq.a1":
        "Ja. Nach der einmaligen Einrichtung führt die persönliche Automation beim Verbinden der AirPods Pro 3 den Befehl „Start Pulse Tracking“ aus. Das iPhone kann gesperrt bleiben",
      "faq.q2": "Was sehe ich während einer aktiven Session?",
      "faq.a2":
        "AirPulse zeigt die aktuelle Herzfrequenz in der App sowie über die Live Activity auf dem Sperrbildschirm und in der Dynamic Island",
      "faq.q3": "Wofür verwendet AirPulse Standortdaten?",
      "faq.a3":
        "AirPulse verwendet Standortdaten für optionale Ortsfilter und tagbasierte Session-Routen. Routenpunkte speichert die App nur mit aktivem Pro und nur für einen Session-Tag, bei dem der Standortverlauf eingeschaltet ist",
      "faq.q4": "Ersetzt AirPulse eine medizinische Beurteilung?",
      "faq.a4":
        "Nein. AirPulse stellt Herzfrequenzdaten für den persönlichen Gebrauch dar und ersetzt keine medizinische Beratung, Diagnose oder Notfallversorgung",
      "faq.q5": "Wie richte ich den automatischen Start ein?",
      "faq.a5":
        "Lege in Apple Kurzbefehle zuerst einen Kurzbefehl mit der AirPulse-Aktion „Start Pulse Tracking“ an. Erstelle dann eine persönliche Bluetooth-Automation, wähle deine AirPods Pro 3 als Auslöser und aktiviere „Sofort ausführen“. Weise der Automation anschließend den Kurzbefehl zu",
      "faq.q6": "Brauche ich Pro für den automatischen Start?",
      "faq.a6": "Nein. Ohne Pro sind bis zu drei Autostarts pro Tag möglich. Mit Pro gibt es kein Tageslimit",
      "faq.q7": "Wo speichert AirPulse meine Sessions?",
      "faq.a7":
        "Die Session-Datenbank liegt lokal auf deinem Gerät. Ist iCloud für deinen Apple-Account verfügbar, kann AirPulse die Datenbank dort sichern und wiederherstellen. Du brauchst kein AirPulse-Konto; der Anbieter betreibt keinen Upload-Server für App-Daten",
      "faq.q8": "Welche Ansagen bietet das Audio-Feedback?",
      "faq.a8":
        "Mit Pro kann AirPulse Zonenwechsel und persönliche Limits über deine Kopfhörer ansagen. Du kannst Audioprofile Session-Tags zuordnen und eigene Audiodateien verwenden",
      "faq.q9": "Welche Berechtigungen benötigt AirPulse?",
      "faq.a9":
        "Für die Pulsaufzeichnung benötigt AirPulse Health-Zugriff auf Herzfrequenzdaten sowie Lese- und Schreibzugriff auf Workout-Daten. AirPulse speichert keine AirPulse-Session als Workout in Apple Fitness. Standortzugriff betrifft optionale Ortsfilter und Session-Routen. Ohne Standortzugriff bleibt „Akku sparen“ aktiv; in diesem Modus ist die Live Activity nicht verfügbar",
      "faq.q10": "Kann ich AirPulse auch außerhalb eines klassischen Workouts verwenden?",
      "faq.a10":
        "Ja. AirPulse-Sessions sind nicht auf Sport beschränkt. Mit Session-Tags kannst du Aufzeichnungen zum Beispiel Arbeit, Lernen, Pendeln, Zuhause oder Ruhe zuordnen",
      "faq.q11": "Kann AirPulse stündlich oder zu festen Zeiten einen einzelnen Messwert erfassen?",
      "faq.a11":
        "Nein. AirPulse bietet keine geplanten Einzelmessungen. Die App zeichnet verfügbare Herzfrequenzwerte während einer laufenden Session auf",
      "faq.q12": "Warum erscheint keine Live Activity?",
      "faq.a12":
        "Die Live Activity erscheint nur während einer aktiven Session. Prüfe außerdem in AirPulse die Einstellung „Akku sparen“: Ist sie aktiv, bleibt die Live Activity ausgeschaltet. Ohne Standortzugriff lässt sich „Akku sparen“ nicht deaktivieren",
      "faq.q13": "Muss ich die Anzeige als Widget hinzufügen?",
      "faq.a13":
        "Nein. AirPulse bietet weder ein Home-Screen- noch ein Sperrbildschirm-Widget. Während einer aktiven Session erscheint die Live Activity automatisch auf dem Sperrbildschirm und in der Dynamic Island",
      "faq.q14": "Kann ich direkt mit einem bestimmten Tag starten oder ihn per Siri wechseln?",
      "faq.a14":
        "Ja. Die Kurzbefehle-Aktion „Set Session Tag“ weist einer laufenden Session den gewählten Tag zu. Läuft keine Session, startet sie eine neue Session mit diesem Tag. Die benötigte Tag-ID findest du beim jeweiligen Tag in der Tag-Verwaltung",
      "faq.q15": "Wie hängen Pulszonen, Audioprofile und Session-Tags zusammen?",
      "faq.a15":
        "Das Audioprofil bestimmt Signale, Intervalle und persönliche Limits; das Pulszonenprofil bestimmt die BPM-Grenzen der Zonen. Beide Profile lassen sich Session-Tags zuordnen. Fehlt eine Zuordnung, verwendet AirPulse das jeweilige Standardprofil. Manuelle Pulszonenprofile kannst du selbst anlegen; ihre Verwendung im Audio-Feedback und Pulszonendiagramm setzt Pro voraus",
      "faq.q16": "Warum höre ich kein Audio-Feedback?",
      "faq.a16":
        "Prüfe, ob Pro aktiv ist, im verwendeten Audioprofil die gewünschte Zone oder Grenze eingeschaltet ist und der laufenden Session der richtige Tag zugeordnet ist. Tags ohne eigenes Audioprofil sowie Sessions ohne Tag verwenden das Standardprofil. In der Live Activity kann das Audio-Feedback außerdem stummgeschaltet sein",
      "faq.q17": "Warum wurde für meine Session keine Route gespeichert?",
      "faq.a17":
        "Für eine Route müssen Pro aktiv, der Standortzugriff erlaubt, „Akku sparen“ ausgeschaltet und der Standortverlauf für den aktiven Session-Tag eingeschaltet sein. Die Karte erscheint nach dem Ende der Session",
      "faq.q18": "Unterstützt AirPulse die Apple Watch?",
      "faq.a18":
        "AirPulse hat keine eigene Apple-Watch-App und keine Watch-Steuerung. Die App liest Herzfrequenzwerte aus HealthKit, ohne nach der Quelle zu filtern; von der Watch bereitgestellte Werte können daher erscheinen. Der automatische Ablauf und die Verbindungserkennung sind jedoch für konfigurierte AirPods Pro 3 ausgelegt. Eine eigenständige, kontinuierliche Watch-Aufzeichnung bietet AirPulse nicht",
      "faq.q19": "Kann AirPulse Herzfrequenz an Garmin oder andere Geräte senden?",
      "faq.a19":
        "Nein. AirPulse bietet derzeit keine Bluetooth-Herzfrequenzübertragung an Garmin oder andere Empfänger",
      "faq.q20": "Kann ich AirPulse gleichzeitig mit einer anderen Trainings-App verwenden?",
      "faq.a20":
        "AirPulse startet selbst eine HealthKit-Workout-Session. Der Parallelbetrieb kann deshalb die Herzfrequenzzuordnung oder Aufzeichnung einer anderen Trainings-App beeinflussen. Eine zuverlässige Kompatibilität mit jeder App kann AirPulse nicht garantieren",
      "footer.tagline": "Automatisches Herzfrequenz-Tracking mit AirPods Pro 3",
      "footer.terms": "Nutzungsbedingungen",
      "footer.privacy": "Datenschutz",
      "footer.imprint": "Impressum",
      "footer.contact": "Kontakt",
      "footer.copyright": "AirPulse",
      "footer.navLabel": "Rechtliches und Kontakt",
      "footer.disclaimer":
        "AirPulse bietet keine medizinische Beratung, ist kein Notfalldienst und ersetzt keine professionelle medizinische Versorgung.",
      "theme.dark": "Dunkles Design aktivieren",
      "theme.light": "Helles Design aktivieren",
      "language.switch": "Switch to English",
      "image.liveAlt": "AirPulse Live-Ansicht mit aktueller Herzfrequenz, Verlauf und Statistiken",
      "image.activityAlt": "AirPulse Live Activity mit Herzfrequenz und Verlauf auf dem iPhone-Sperrbildschirm",
      "image.sessionAlt": "AirPulse Session-Details mit Tag, Verlauf und Herzfrequenzstatistiken",
      "image.insightsAlt": "AirPulse Tag-Bericht mit persönlichem Normalbereich, Verlauf und Zeitverteilung",
      "howto.pageTitle": "Autostart in Kurzbefehle einrichten | AirPulse",
      "howto.metaDescription":
        "So richtest du Start Pulse Tracking und die persönliche Bluetooth-Automation für deine AirPods Pro 3 in Apple Kurzbefehle ein.",
      "howto.kicker": "Einrichtung",
      "howto.title": "Autostart in Kurzbefehle einrichten",
      "howto.intro":
        "Lege zuerst einen eigenen Kurzbefehl mit der AirPulse-Aktion „Start Pulse Tracking“ an. Danach erstellst du eine persönliche Bluetooth-Automation, die diesen Kurzbefehl beim Verbinden deiner AirPods Pro 3 ausführt.",
      "howto.openShortcuts": "Kurzbefehle öffnen",
      "howto.languageNote":
        "Die Screenshots zeigen die englische iOS-Oberfläche. Die jeweils benötigte Schaltfläche ist rot markiert.",
      "howto.part1.label": "Teil 1",
      "howto.part1.title": "Kurzbefehl für AirPulse anlegen",
      "howto.part1.body":
        "Erstelle in der App Kurzbefehle einen neuen Kurzbefehl und füge die AirPulse-Aktion „Start Pulse Tracking“ hinzu.",
      "howto.part2.label": "Teil 2",
      "howto.part2.title": "Persönliche Bluetooth-Automation erstellen",
      "howto.part2.body":
        "Wähle deine AirPods Pro 3 als Bluetooth-Auslöser, stelle die Automation auf „Run Immediately“ und weise ihr den gerade erstellten Kurzbefehl zu.",
      "howto.stage1.title": "Automation anlegen",
      "howto.stage2.title": "AirPods auswählen und sofort ausführen",
      "howto.stage3.title": "AirPulse-Kurzbefehl zuweisen",
      "howto.step1.label": "Schritt 1",
      "howto.step1.caption": "Tippe auf +, um einen neuen Kurzbefehl zu erstellen",
      "howto.step1.alt": "In Kurzbefehle ist die Plus-Schaltfläche zum Erstellen eines neuen Kurzbefehls markiert",
      "howto.step2.label": "Schritt 2",
      "howto.step2.caption": "Suche nach „AirPulse“",
      "howto.step2.alt": "In der Aktionssuche von Kurzbefehle ist die Suche nach AirPulse markiert",
      "howto.step3.label": "Schritt 3",
      "howto.step3.caption": "Wähle „Start Pulse Tracking“ aus",
      "howto.step3.alt": "Die AirPulse-Aktion Start Pulse Tracking ist in Kurzbefehle markiert",
      "howto.step4.label": "Schritt 4",
      "howto.step4.caption": "Tippe auf den Zurück-Pfeil, um den Kurzbefehl zu schließen",
      "howto.step4.alt": "Im Kurzbefehl mit der Aktion Start Pulse Tracking ist der Zurück-Pfeil markiert",
      "howto.step5.label": "Schritt 5",
      "howto.step5.caption": "Wechsle zum Tab „Automation“",
      "howto.step5.alt": "In Kurzbefehle ist der Tab Automation markiert",
      "howto.step6.label": "Schritt 6",
      "howto.step6.caption": "Tippe auf „New Automation“",
      "howto.step6.alt": "In Kurzbefehle ist die Schaltfläche New Automation markiert",
      "howto.step7.label": "Schritt 7",
      "howto.step7.caption": "Wähle „Bluetooth“ aus der Liste",
      "howto.step7.alt": "In der Liste der Automationsauslöser ist Bluetooth markiert",
      "howto.step8.label": "Schritt 8",
      "howto.step8.caption": "Tippe auf „Device“",
      "howto.step8.alt": "In der Bluetooth-Automation ist die Geräteauswahl Device markiert",
      "howto.step9.label": "Schritt 9",
      "howto.step9.caption": "Wähle deine AirPods Pro 3 aus der Liste",
      "howto.step9.alt": "In der Geräteauswahl sind AirPods Pro 3 markiert",
      "howto.step10.label": "Schritt 10",
      "howto.step10.caption": "Wähle „Run Immediately“, damit die Automation sofort starten darf",
      "howto.step10.alt": "In der Bluetooth-Automation ist Run Immediately markiert",
      "howto.step11.label": "Schritt 11",
      "howto.step11.caption": "Tippe auf „Next“",
      "howto.step11.alt": "In der Bluetooth-Automation ist Next markiert",
      "howto.step12.label": "Schritt 12",
      "howto.step12.caption": "Wähle den zuvor erstellten Kurzbefehl aus",
      "howto.step12.alt": "In der Automation ist der zuvor erstellte Kurzbefehl Start Pulse Tracking markiert",
      "howto.note.title": "Wenn iOS noch nachfragt",
      "howto.note.body":
        "Prüfe in Kurzbefehle die Berechtigungen und ob die Automation auf „Sofort ausführen“ gestellt ist.",
      "tags.pageTitle": "Session-Tags verstehen | AirPulse",
      "tags.metaDescription":
        "Was Session-Tags in AirPulse bedeuten, welche Einstellungen sie verbinden und wie du Tags vor, während oder nach einer Session zuordnest",
      "tags.title": "Tags geben Sessions Kontext",
      "tags.intro":
        "Ein Session-Tag ordnet eine Aufzeichnung einem Kontext wie Laufen, Arbeit oder Ruhe zu. Pro Session ist ein Tag aktiv. Du kannst ihn während der Aufzeichnung oder später ändern und wieder entfernen",
      "tags.heroMockLabel": "Darstellung der Tag-Auswahl in AirPulse",
      "tags.editorMockLabel": "Beispielkonfiguration im AirPulse Tag-Editor",
      "tags.pickerTitle": "Tag wählen",
      "tags.categorySport": "Sport",
      "tags.categoryWork": "Arbeit",
      "tags.categoryRecovery": "Erholung",
      "tags.running": "Laufen",
      "tags.walking": "Spazieren",
      "tags.work": "Arbeit",
      "tags.rest": "Ruhe",
      "tags.mapTitle": "Ein Tag verbindet diese Bereiche",
      "tags.mapBody":
        "Die Tagesübersicht gruppiert die Sessions eines Tages nach Session-Tag und zeigt Anzahl und Gesamtdauer. Ein Session-Tag kann außerdem das Audio- und Pulszonenprofil auswählen und mit Pro den optionalen Standortverlauf aktivieren",
      "tags.mapDayTitle": "Tagesübersicht",
      "tags.mapDayBody": "Sessions eines Tages werden nach Session-Tag gruppiert",
      "tags.mapAudioTitle": "Audio-Feedback",
      "tags.mapAudioBody": "Das zugeordnete Audioprofil gilt für die Session",
      "tags.mapZonesTitle": "Pulszonen",
      "tags.mapZonesBody": "Das zugeordnete Pulszonenprofil legt die Zonen fest",
      "tags.mapLocationTitle": "Standortverlauf",
      "tags.mapLocationBody": "Mit Pro kann die Standortaufzeichnung pro Session-Tag aktiviert werden",
      "tags.mapReportsTitle": "Tag-Berichte",
      "tags.mapReportsBody": "Mit Pro werden Sessions desselben Tags verglichen",
      "tags.settingsTitle": "Was du für jeden Session-Tag einstellen kannst",
      "tags.settingsIntro":
        "AirPulse enthält System-Tags und lässt dich eigene Tags anlegen. Welche Felder änderbar sind, hängt vom Tag-Typ ab",
      "tags.editorTitle": "Tag bearbeiten",
      "tags.exampleConfig": "Beispielkonfiguration",
      "tags.systemTag": "System-Tag",
      "tags.tagId": "ID …",
      "tags.name": "Name",
      "tags.color": "Farbe",
      "tags.tracking": "Tracking",
      "tags.favorite": "Favorit",
      "tags.on": "An",
      "tags.location": "Standortverlauf",
      "tags.proOff": "Pro · Aus",
      "tags.audio": "Audio-Feedback",
      "tags.standardProfile": "Standardprofil",
      "tags.zones": "Pulszonen",
      "tags.settingDesignTitle": "Name, Icon und Farbe",
      "tags.settingDesignBody":
        "Eigene Tags lassen sich vollständig gestalten. Bei System-Tags bleiben Name, Icon, Kategorie und Aktivitätsniveau fest; ihre Farbe kannst du ändern",
      "tags.settingCategoryTitle": "Kategorie und Aktivitätsniveau",
      "tags.settingCategoryBody":
        "Eigene Tags gehören zu Sport, Arbeit, Erholung, Lifestyle oder Sonstiges. Das Aktivitätsniveau reicht von Unbekannt bis Sehr hoch",
      "tags.settingFavoriteTitle": "Favoriten",
      "tags.settingFavoriteBody":
        "Bis zu sieben Favoriten erscheinen in der Tag-Kurzauswahl der Sperrbildschirm-Live-Activity",
      "tags.settingProfilesTitle": "Audio-Feedback und Pulszonen",
      "tags.settingProfilesBody":
        "Du kannst jeweils ein Profil zuordnen. Fehlt eine Zuordnung, verwendet AirPulse das entsprechende Standardprofil",
      "tags.settingLocationTitle": "Standortverlauf",
      "tags.settingLocationBody":
        "Die Pro-Funktion wird für jeden Session-Tag einzeln aktiviert und erhöht während der Aufzeichnung den Akkuverbrauch",
      "tags.settingIdTitle": "Tag-ID",
      "tags.settingIdBody":
        "Die sichtbare ID wird für die Kurzbefehle-Aktion „Set Session Tag“ benötigt",
      "tags.assignTitle": "Wann du einen Tag zuordnest",
      "tags.assignStartTitle": "Beim Start",
      "tags.assignStartBody":
        "Der Kurzbefehl „Set Session Tag“ setzt einen Tag über seine ID. Läuft noch keine Session, startet er eine neue Session mit diesem Tag",
      "tags.assignLiveTitle": "Während der Session",
      "tags.assignLiveBody":
        "In der App kannst du den Tag einer laufenden Session setzen, ändern oder entfernen. In der Sperrbildschirm-Live-Activity kannst du außerdem einen Favoriten auswählen oder den aktuellen Tag entfernen",
      "tags.assignAfterTitle": "Nach der Session",
      "tags.assignAfterBody":
        "In den Session-Details kannst du den Tag einer abgeschlossenen Aufzeichnung setzen, ändern oder entfernen",
      "tags.reportTitle": "Sessions im selben Kontext vergleichen",
      "tags.reportBody":
        "Tag-Berichte fassen Aufzeichnungen desselben Tags zusammen. Sie vergleichen aktuelle Sessions mit deinem persönlichen Normalbereich und zeigen Verlauf und Zeitverteilung",
      "tags.reportNormal": "Persönlicher Normalbereich",
      "tags.reportTrend": "Verlauf",
      "tags.reportDistribution": "Zeitverteilung"
    },
    en: {
      pageTitle: "AirPulse | Automatic heart rate tracking with AirPods Pro 3",
      metaDescription:
        "AirPulse starts through Shortcuts when you put in AirPods Pro 3. Your iPhone can stay locked.",
      "skip.link": "Skip to content",
      "brand.homeLabel": "AirPulse home",
      "brand.subtitle": "Automatic heart rate tracking",
      "nav.mainLabel": "Main navigation",
      "nav.setup": "Setup",
      "nav.faq": "Questions",
      "nav.tags": "Session Tags",
      "nav.store": "App Store",
      "hero.titleLead": "AirPods in.",
      "hero.titleSignal": "Tracking starts.",
      "hero.lede":
        "Set up a personal automation once in Apple Shortcuts. AirPulse then starts heart rate tracking automatically whenever you put in your AirPods Pro 3, even while your iPhone is locked",
      "hero.primary": "View on the App Store",
      "hero.secondary": "See how it works",
      "hero.stageLabel": "AirPulse Live view",
      "hero.statusLiveTitle": "Live Activity active",
      "hero.statusLiveText": "Live Activity & Dynamic Island",
      "boundaries.kicker": "What AirPulse deliberately does not store",
      "boundaries.title": "No workout saved to Apple Fitness. No calorie tracking",
      "boundaries.fitnessTitle": "Not saved to Apple Fitness",
      "boundaries.fitnessBody":
        "Your AirPulse session stays in AirPulse and is not saved as a workout in Apple Fitness. Your Apple Fitness rings remain completely unaffected",
      "boundaries.caloriesTitle": "No calorie tracking",
      "boundaries.caloriesBody": "AirPulse does not read, calculate, display, or store calorie values, including in Apple Health",
      "story.title": "From AirPods connection to saved session",
      "story.lede":
        "Shortcuts starts the recording. AirPulse shows your current heart rate during the session and saves the history afterwards. Pro adds personal reports for session tags.",
      "step1.label": "01 · Trigger",
      "step1.title": "Put them in. No manual start.",
      "step1.body":
        "After the one-time setup in Apple Shortcuts, connecting your AirPods Pro 3 triggers heart rate recording right away. Your iPhone can stay locked.",
      "step1.setup": "Set up Shortcuts",
      "automation.label": "Automatic flow",
      "automation.state1Title": "AirPods Pro 3",
      "automation.state1Text": "Connected",
      "automation.state2Title": "Start Pulse Tracking",
      "automation.state2Text": "Run immediately",
      "automation.state3Title": "AirPulse session",
      "automation.state3Text": "Recording active",
      "step2.label": "02 · Live",
      "step2.title": "Your heart rate stays visible",
      "step2.body":
        "Current BPM and the chart appear in the Live Activity on the Lock Screen. The Dynamic Island shows that the session is running. You do not need to open the app.",
      "step3.label": "03 · History",
      "step3.title": "Measurements become a session",
      "step3.body":
        "AirPulse saves the history as a session with duration, pauses, chart, minimum, average, and maximum. Tags give each recording its context.",
      "step3.tags": "Learn about tags",
      "step4.label": "04 · Tag reports",
      "step4.title": "See patterns and trends across multiple sessions",
      "step4.body":
        "With Pro, tag reports compare recent sessions with your personal normal range. For each session tag, you see the trend and time distribution.",
      "features.title": "More options for active sessions",
      "features.lede":
        "These features add controls and details that you can enable for individual sessions or tags.",
      "feature1.title": "Control the Live Activity directly",
      "feature1.body":
        "Change the session tag or mute audio feedback straight from the Live Activity without opening the app.",
      "feature2.title": "Audio feedback based on your zones",
      "feature2.body":
        "AirPulse Pro can announce zone changes and personal limits through your headphones. You can assign profiles to tags and add your own audio files.",
      "feature3.title": "Optional location history per tag",
      "feature3.body":
        "With Pro, you can enable location history for individual session tags. Saved routes show a map, distance, speed, and splits.",
      "feature4.title": "Local sessions, optional iCloud backup",
      "feature4.body":
        "The session database is maintained locally. When iCloud is available, AirPulse can use it for backup and restore; selected settings can sync through Apple services.",
      "truth.title": "Where AirPulse stores your data",
      "truth.lede":
        "The session database is stored locally on your device. AirPulse does not operate its own upload server. When iCloud is available for your Apple Account, the app can store a backup copy there and sync selected settings.",
      "truth.item1Title": "No AirPulse server",
      "truth.item1Body":
        "AirPulse does not send health, heart rate, location, or other app data to an upload server operated by the provider. No such server exists.",
      "truth.item2Title": "Local session database",
      "truth.item2Body":
        "Sessions are stored in a database on your device. When iCloud is available for your Apple Account, an additional backup copy may be stored there.",
      "truth.item3Title": "Location history only when enabled",
      "truth.item3Body":
        "Location points are saved only when Pro is active and you have enabled location history for the current session tag.",
      "truth.item4Title": "Apple services under Apple’s terms",
      "truth.item4Body":
        "HealthKit, iCloud, Apple Maps, StoreKit, Shortcuts, and Live Activities depend on Apple permissions, system availability, and the applicable Apple terms.",
      "faq.title": "Common questions",
      "faq.pageTitle": "Common questions | AirPulse",
      "faq.metaDescription":
        "Answers about Auto Start, permissions, Live Activity, session tags, heart rate zones, location, storage, and compatibility in AirPulse",
      "faq.groupStart": "Start & requirements",
      "faq.groupLive": "Live Activity & controls",
      "faq.groupAudio": "Tags, heart rate zones & audio",
      "faq.groupData": "Location & data",
      "faq.groupCompatibility": "Compatibility & limitations",
      "faq.searchLabel": "Search questions",
      "faq.searchResultOne": "1 result",
      "faq.searchResultMany": "{count} results",
      "faq.searchEmpty": "No matching question found",
      "faq.q1": "Does AirPulse start while the iPhone is locked?",
      "faq.a1":
        "Yes. After the one-time setup, the personal automation runs “Start Pulse Tracking” when the AirPods Pro 3 connect. The iPhone can stay locked",
      "faq.q2": "What do I see during an active session?",
      "faq.a2":
        "AirPulse shows current heart rate in the app and through the Live Activity on the Lock Screen and in the Dynamic Island",
      "faq.q3": "Why does AirPulse use location data?",
      "faq.a3":
        "AirPulse uses location data for optional place filters and tag-based session routes. It saves route points only when Pro is active and location history is enabled for the current session tag",
      "faq.q4": "Does AirPulse replace a medical assessment?",
      "faq.a4":
        "No. AirPulse displays heart rate data for personal use and does not replace medical advice, diagnosis, or emergency care",
      "faq.q5": "How do I set up automatic start?",
      "faq.a5":
        "First, create a shortcut in Apple Shortcuts with the AirPulse action “Start Pulse Tracking.” Then create a personal Bluetooth automation, choose your AirPods Pro 3 as the trigger, and enable “Run Immediately.” Finally, assign the shortcut to the automation",
      "faq.q6": "Do I need Pro for automatic start?",
      "faq.a6": "No. Without Pro, you can use up to three auto starts per day. Pro removes the daily limit",
      "faq.q7": "Where does AirPulse store my sessions?",
      "faq.a7":
        "The session database is stored locally on your device. When iCloud is available for your Apple Account, AirPulse can use it for backup and restore. You do not need an AirPulse account, and the provider does not operate an upload server for app data",
      "faq.q8": "What can audio feedback announce?",
      "faq.a8":
        "With Pro, AirPulse can announce zone changes and personal limits through your headphones. You can assign audio profiles to session tags and use your own audio files",
      "faq.q9": "Which permissions does AirPulse need?",
      "faq.a9":
        "AirPulse needs Health access to heart rate data plus read and write access to workout data. AirPulse sessions are not saved as workouts in Apple Fitness. Location access applies to optional place filters and session routes. Without location access, Save Battery remains enabled; the Live Activity is unavailable in this mode",
      "faq.q10": "Can I use AirPulse outside a traditional workout?",
      "faq.a10":
        "Yes. AirPulse sessions are not limited to sport. Session tags can organize recordings for contexts such as work, studying, commuting, home, or rest",
      "faq.q11": "Can AirPulse take one reading every hour or at scheduled times?",
      "faq.a11":
        "No. AirPulse does not provide scheduled single readings. The app records available heart rate values during an active session",
      "faq.q12": "Why is the Live Activity not appearing?",
      "faq.a12":
        "The Live Activity appears only during an active session. Also check Save Battery in AirPulse: when it is enabled, the Live Activity remains off. Save Battery cannot be disabled without location access",
      "faq.q13": "Do I need to add the display as a widget?",
      "faq.a13":
        "No. AirPulse does not provide a Home Screen or Lock Screen widget. During an active session, the Live Activity appears automatically on the Lock Screen and in the Dynamic Island",
      "faq.q14": "Can I start with a specific tag or change it with Siri?",
      "faq.a14":
        "Yes. The Shortcuts action “Set Session Tag” assigns the selected tag to an active session. If no session is running, it starts a new session with that tag. You can find the required tag ID by opening the tag in tag management",
      "faq.q15": "How do heart rate zones, audio profiles, and session tags work together?",
      "faq.a15":
        "The audio profile controls signals, intervals, and personal limits; the heart rate zone profile defines the BPM boundaries of the zones. Both profiles can be assigned to session tags. Without an assignment, AirPulse uses the respective default profile. You can create manual zone profiles; using them for audio feedback and the zone chart requires Pro",
      "faq.q16": "Why am I not hearing audio feedback?",
      "faq.a16":
        "Check that Pro is active, the intended zone or limit is enabled in the audio profile, and the active session has the correct tag. Tags without their own audio profile and sessions without a tag use the default profile. Audio feedback may also be muted in the Live Activity",
      "faq.q17": "Why was no route saved for my session?",
      "faq.a17":
        "Saving a route requires Pro, location access, Save Battery turned off, and location history enabled for the active session tag. The map appears after the session ends",
      "faq.q18": "Does AirPulse support Apple Watch?",
      "faq.a18":
        "AirPulse does not provide an Apple Watch app or Watch controls. It reads heart rate values from HealthKit without filtering by source, so values provided by the Watch may appear. Automatic start and connection detection are designed for configured AirPods Pro 3. AirPulse does not provide independent, continuous Watch recording",
      "faq.q19": "Can AirPulse send heart rate to Garmin or other devices?",
      "faq.a19":
        "No. AirPulse currently does not provide Bluetooth heart rate transmission to Garmin or other receivers",
      "faq.q20": "Can I use AirPulse alongside another workout app?",
      "faq.a20":
        "AirPulse starts its own HealthKit workout session. Running it in parallel can therefore affect heart rate assignment or recording in another workout app. AirPulse cannot guarantee reliable compatibility with every app",
      "footer.tagline": "Automatic heart rate tracking with AirPods Pro 3",
      "footer.terms": "Terms of Use",
      "footer.privacy": "Privacy Policy",
      "footer.imprint": "Imprint",
      "footer.contact": "Contact",
      "footer.copyright": "AirPulse",
      "footer.navLabel": "Legal and contact",
      "footer.disclaimer":
        "AirPulse is not medical advice, not an emergency service, and not a substitute for professional care.",
      "theme.dark": "Enable dark appearance",
      "theme.light": "Enable light appearance",
      "language.switch": "Auf Deutsch wechseln",
      "image.liveAlt": "AirPulse Live view with current heart rate, chart, and statistics",
      "image.activityAlt": "AirPulse Live Activity with heart rate and chart on the iPhone Lock Screen",
      "image.sessionAlt": "AirPulse session details with tag, chart, and heart rate statistics",
      "image.insightsAlt": "AirPulse tag report with personal normal range, history, and time distribution",
      "howto.pageTitle": "Set up Auto Start in Shortcuts | AirPulse",
      "howto.metaDescription":
        "Set up Start Pulse Tracking and the personal Bluetooth automation for your AirPods Pro 3 in Apple Shortcuts.",
      "howto.kicker": "Setup",
      "howto.title": "Set up Auto Start in Shortcuts",
      "howto.intro":
        "First, create your own shortcut with the AirPulse action “Start Pulse Tracking.” Then create a personal Bluetooth automation that runs this shortcut when your AirPods Pro 3 connect.",
      "howto.openShortcuts": "Open Shortcuts",
      "howto.languageNote":
        "The screenshots use the English iOS interface. A red outline marks the control you need in each step.",
      "howto.part1.label": "Part 1",
      "howto.part1.title": "Create the AirPulse shortcut",
      "howto.part1.body":
        "Create a new shortcut in the Shortcuts app and add the AirPulse action “Start Pulse Tracking.”",
      "howto.part2.label": "Part 2",
      "howto.part2.title": "Create a personal Bluetooth automation",
      "howto.part2.body":
        "Choose your AirPods Pro 3 as the Bluetooth trigger, set the automation to “Run Immediately,” and assign the shortcut you just created.",
      "howto.stage1.title": "Create the automation",
      "howto.stage2.title": "Choose your AirPods and run immediately",
      "howto.stage3.title": "Assign the AirPulse shortcut",
      "howto.step1.label": "Step 1",
      "howto.step1.caption": "Tap + to create a new shortcut",
      "howto.step1.alt": "The plus button for creating a shortcut is highlighted in Shortcuts",
      "howto.step2.label": "Step 2",
      "howto.step2.caption": "Search for “AirPulse”",
      "howto.step2.alt": "The search for AirPulse is highlighted in the Shortcuts action search",
      "howto.step3.label": "Step 3",
      "howto.step3.caption": "Choose “Start Pulse Tracking”",
      "howto.step3.alt": "The AirPulse action Start Pulse Tracking is highlighted in Shortcuts",
      "howto.step4.label": "Step 4",
      "howto.step4.caption": "Tap the back arrow to close the shortcut",
      "howto.step4.alt": "The back arrow is highlighted in the shortcut containing Start Pulse Tracking",
      "howto.step5.label": "Step 5",
      "howto.step5.caption": "Switch to the “Automation” tab",
      "howto.step5.alt": "The Automation tab is highlighted in Shortcuts",
      "howto.step6.label": "Step 6",
      "howto.step6.caption": "Tap “New Automation”",
      "howto.step6.alt": "The New Automation button is highlighted in Shortcuts",
      "howto.step7.label": "Step 7",
      "howto.step7.caption": "Choose “Bluetooth” from the list",
      "howto.step7.alt": "Bluetooth is highlighted in the list of automation triggers",
      "howto.step8.label": "Step 8",
      "howto.step8.caption": "Tap “Device”",
      "howto.step8.alt": "The Device selector is highlighted in the Bluetooth automation",
      "howto.step9.label": "Step 9",
      "howto.step9.caption": "Choose your AirPods Pro 3 from the list",
      "howto.step9.alt": "AirPods Pro 3 are highlighted in the device list",
      "howto.step10.label": "Step 10",
      "howto.step10.caption": "Choose “Run Immediately” so the automation can start right away",
      "howto.step10.alt": "Run Immediately is highlighted in the Bluetooth automation",
      "howto.step11.label": "Step 11",
      "howto.step11.caption": "Tap “Next”",
      "howto.step11.alt": "Next is highlighted in the Bluetooth automation",
      "howto.step12.label": "Step 12",
      "howto.step12.caption": "Choose the shortcut you created earlier",
      "howto.step12.alt": "The previously created Start Pulse Tracking shortcut is highlighted in the automation",
      "howto.note.title": "If iOS still asks for confirmation",
      "howto.note.body":
        "Check the permissions in Shortcuts and make sure the automation is set to “Run Immediately.”",
      "tags.pageTitle": "Understanding session tags | AirPulse",
      "tags.metaDescription":
        "Learn what session tags mean in AirPulse, which settings are linked to them, and how to assign a tag before, during, or after a session",
      "tags.title": "Tags give sessions context",
      "tags.intro":
        "A session tag assigns a context such as running, work, or rest to a recording. One tag is active per session. You can change or remove it during recording or later",
      "tags.heroMockLabel": "Representation of the tag picker in AirPulse",
      "tags.editorMockLabel": "Example configuration in the AirPulse tag editor",
      "tags.pickerTitle": "Choose tag",
      "tags.categorySport": "Exercise",
      "tags.categoryWork": "Work",
      "tags.categoryRecovery": "Recovery",
      "tags.running": "Running",
      "tags.walking": "Walking",
      "tags.work": "Work",
      "tags.rest": "Rest",
      "tags.mapTitle": "One tag connects these areas",
      "tags.mapBody":
        "The day summary groups one day’s sessions by tag and shows their count and total duration. A tag can also select the audio and heart rate zone profiles and, with Pro, enable optional location history for that session",
      "tags.mapDayTitle": "Day summary",
      "tags.mapDayBody": "Sessions from the same day are grouped by tag",
      "tags.mapAudioTitle": "Audio feedback",
      "tags.mapAudioBody": "The assigned audio profile applies to the session",
      "tags.mapZonesTitle": "Heart rate zones",
      "tags.mapZonesBody": "The assigned zone profile defines the zones",
      "tags.mapLocationTitle": "Location history",
      "tags.mapLocationBody": "With Pro, recording can be enabled per tag",
      "tags.mapReportsTitle": "Tag reports",
      "tags.mapReportsBody": "With Pro, sessions using the same tag are compared",
      "tags.settingsTitle": "What you can set for each tag",
      "tags.settingsIntro":
        "AirPulse includes built-in tags and lets you create custom tags. The editable fields depend on the tag type",
      "tags.editorTitle": "Edit tag",
      "tags.exampleConfig": "Example configuration",
      "tags.systemTag": "Built-in tag",
      "tags.tagId": "ID …",
      "tags.name": "Name",
      "tags.color": "Color",
      "tags.tracking": "Tracking",
      "tags.favorite": "Favorite",
      "tags.on": "On",
      "tags.location": "Location history",
      "tags.proOff": "Pro · Off",
      "tags.audio": "Audio feedback",
      "tags.standardProfile": "Default profile",
      "tags.zones": "Heart rate zones",
      "tags.settingDesignTitle": "Name, icon, and color",
      "tags.settingDesignBody":
        "Custom tags can be fully styled. For built-in tags, name, icon, category, and activity level remain fixed; you can change their color",
      "tags.settingCategoryTitle": "Category and activity level",
      "tags.settingCategoryBody":
        "Custom tags belong to Exercise, Work, Recovery, Lifestyle, or Other. Activity level ranges from Unknown to Very high",
      "tags.settingFavoriteTitle": "Favorites",
      "tags.settingFavoriteBody":
        "Up to seven favorites appear in the tag picker of the Lock Screen Live Activity",
      "tags.settingProfilesTitle": "Audio feedback and heart rate zones",
      "tags.settingProfilesBody":
        "You can assign one profile of each type. Without an assignment, AirPulse uses the corresponding default profile",
      "tags.settingLocationTitle": "Location history",
      "tags.settingLocationBody":
        "This Pro feature is enabled per tag and increases battery use while recording",
      "tags.settingIdTitle": "Tag ID",
      "tags.settingIdBody":
        "The visible ID is required for the “Set Session Tag” Shortcuts action",
      "tags.assignTitle": "When you assign a tag",
      "tags.assignStartTitle": "At the start",
      "tags.assignStartBody":
        "The “Set Session Tag” shortcut assigns a tag by its ID. If no session is running, it starts a new session with that tag",
      "tags.assignLiveTitle": "During the session",
      "tags.assignLiveBody":
        "In the app, you can assign, change, or remove the tag of an active session. In the Lock Screen Live Activity, you can also select a favorite or remove the current tag",
      "tags.assignAfterTitle": "After the session",
      "tags.assignAfterBody":
        "In session details, you can assign, change, or remove the tag of a completed recording",
      "tags.reportTitle": "Compare sessions in the same context",
      "tags.reportBody":
        "Tag reports group recordings with the same tag. They compare recent sessions with your personal normal range and show the trend and time distribution",
      "tags.reportNormal": "Personal normal range",
      "tags.reportTrend": "Trend",
      "tags.reportDistribution": "Time distribution"
    }
  };

  function readStoredValue(key) {
    try {
      return window.localStorage.getItem(key) || "";
    } catch (error) {
      return "";
    }
  }

  function storeValue(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // The preference remains valid for the current page when storage is unavailable.
    }
  }

  function readLanguage() {
    var stored = readStoredValue(languageStorageKey);
    if (stored === "de" || stored === "en") return stored;

    var browserLanguage = "";
    try {
      browserLanguage = window.navigator.language || "";
    } catch (error) {
      browserLanguage = "";
    }
    return browserLanguage.toLowerCase().indexOf("de") === 0 ? "de" : "en";
  }

  function activeTheme() {
    if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
    return darkMedia && darkMedia.matches ? "dark" : "light";
  }

  function updateThemeButton() {
    var button = document.querySelector("[data-theme-toggle]");
    if (!button) return;
    var theme = activeTheme();
    var label = translations[language][theme === "dark" ? "theme.light" : "theme.dark"];
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  function applyTheme() {
    var theme = activeTheme();
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#100f11" : "#f7f4ef");
    updateThemeButton();
  }

  function applyLanguage() {
    var copy = translations[language];
    var page = document.body ? document.body.getAttribute("data-page") : "home";
    var pageMetadata = {
      home: ["pageTitle", "metaDescription"],
      howto: ["howto.pageTitle", "howto.metaDescription"],
      faq: ["faq.pageTitle", "faq.metaDescription"],
      tags: ["tags.pageTitle", "tags.metaDescription"]
    };
    var metadataKeys = pageMetadata[page] || pageMetadata.home;
    var titleKey = metadataKeys[0];
    var descriptionKey = metadataKeys[1];
    var pageTitle = copy[titleKey];
    var pageDescription = copy[descriptionKey];
    root.lang = language;
    document.title = pageTitle;

    var description = document.querySelector('meta[name="description"]');
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDescription = document.querySelector('meta[property="og:description"]');
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    var twitterTitle = document.querySelector('meta[name="twitter:title"]');
    var twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (description) description.setAttribute("content", pageDescription);
    if (ogTitle) ogTitle.setAttribute("content", pageTitle);
    if (ogDescription) ogDescription.setAttribute("content", pageDescription);
    if (ogLocale) ogLocale.setAttribute("content", language === "de" ? "de_DE" : "en_US");
    if (twitterTitle) twitterTitle.setAttribute("content", pageTitle);
    if (twitterDescription) twitterDescription.setAttribute("content", pageDescription);

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = copy[node.getAttribute("data-i18n")];
      if (typeof value === "string") node.textContent = value;
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (node) {
      var value = copy[node.getAttribute("data-i18n-content")];
      if (typeof value === "string") node.setAttribute("content", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
      var value = copy[node.getAttribute("data-i18n-alt")];
      if (typeof value === "string") node.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (node) {
      var value = copy[node.getAttribute("data-i18n-placeholder")];
      if (typeof value === "string") node.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (node) {
      var value = copy[node.getAttribute("data-i18n-aria-label")];
      if (typeof value === "string") node.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-localized-image]").forEach(function (node) {
      var nextSource = node.getAttribute(language === "de" ? "data-src-de" : "data-src-en");
      if (nextSource && node.getAttribute("src") !== nextSource) node.setAttribute("src", nextSource);
    });

    var languageButton = document.querySelector("[data-language-toggle]");
    if (languageButton) {
      languageButton.textContent = language === "de" ? "EN" : "DE";
      languageButton.setAttribute("aria-label", copy["language.switch"]);
      languageButton.setAttribute("title", copy["language.switch"]);
    }

    updateThemeButton();
    if (refreshFaqSearch) refreshFaqSearch();
  }

  document.querySelectorAll("[data-app-store-link]").forEach(function (node) {
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

  var languageButton = document.querySelector("[data-language-toggle]");
  if (languageButton) {
    languageButton.addEventListener("click", function () {
      language = language === "de" ? "en" : "de";
      storeValue(languageStorageKey, language);
      applyLanguage();
    });
  }

  var themeButton = document.querySelector("[data-theme-toggle]");
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      storedTheme = activeTheme() === "dark" ? "light" : "dark";
      storeValue(themeStorageKey, storedTheme);
      applyTheme();
    });
  }

  if (darkMedia) {
    var handleThemeChange = function () {
      if (!storedTheme) applyTheme();
    };
    if (darkMedia.addEventListener) darkMedia.addEventListener("change", handleThemeChange);
    else if (darkMedia.addListener) darkMedia.addListener(handleThemeChange);
  }

  var header = document.querySelector(".site-header");
  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 16);
  }
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".faq-item").forEach(function (item) {
    var summary = item.querySelector("summary");
    var answer = item.querySelector(".faq-answer");
    var animating = false;
    var opening = false;
    if (!summary || !answer) return;
    item.classList.add("has-faq-animation");

    function finishFaqTransition() {
      if (!animating) return;
      if (!opening) item.open = false;
      item.classList.remove("is-animating");
      answer.style.removeProperty("height");
      answer.style.removeProperty("opacity");
      animating = false;
    }

    answer.addEventListener("transitionend", function (event) {
      if (event.propertyName === "height") finishFaqTransition();
    });

    item.addEventListener("click", function (event) {
      if (!summary.contains(event.target)) return;
      if (reduceMotion) return;
      event.preventDefault();
      if (animating) return;

      opening = !item.open;
      animating = true;
      if (opening) item.open = true;

      var startHeight = opening ? 0 : answer.getBoundingClientRect().height;
      var endHeight = opening ? answer.scrollHeight : 0;
      item.classList.add("is-animating");
      answer.style.height = startHeight + "px";
      answer.style.opacity = opening ? "0" : "1";
      answer.getBoundingClientRect();

      window.requestAnimationFrame(function () {
        answer.style.height = endHeight + "px";
        answer.style.opacity = opening ? "1" : "0";
      });
      window.setTimeout(finishFaqTransition, 300);
    }, true);
  });

  var faqSearchInput = document.querySelector("[data-faq-search]");
  var faqSearchStatus = document.querySelector("[data-faq-search-status]");
  var faqSearchEmpty = document.querySelector("[data-faq-search-empty]");

  if (faqSearchInput) {
    var faqItems = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));
    var faqGroups = Array.prototype.slice.call(document.querySelectorAll(".faq-group"));

    function normalizeSearchText(value) {
      return String(value || "")
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ß/g, "ss")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
    }

    function searchTextForItem(item) {
      var summary = item.querySelector("summary[data-i18n]");
      var answer = item.querySelector(".faq-answer [data-i18n]");
      var group = item.closest(".faq-group");
      var groupHeading = group ? group.querySelector("h2[data-i18n]") : null;
      var keys = [
        summary ? summary.getAttribute("data-i18n") : "",
        answer ? answer.getAttribute("data-i18n") : "",
        groupHeading ? groupHeading.getAttribute("data-i18n") : ""
      ];
      var values = [];

      ["de", "en"].forEach(function (locale) {
        keys.forEach(function (key) {
          if (key && typeof translations[locale][key] === "string") values.push(translations[locale][key]);
        });
      });

      return normalizeSearchText(values.join(" "));
    }

    function closeSearchOpenedItem(item) {
      if (item.getAttribute("data-search-opened") !== "true") return;
      item.open = false;
      item.removeAttribute("data-search-opened");
    }

    refreshFaqSearch = function () {
      var query = normalizeSearchText(faqSearchInput.value);
      var terms = query ? query.split(/\s+/) : [];
      var matches = 0;

      faqItems.forEach(function (item) {
        var matchesQuery = terms.length === 0 || terms.every(function (term) {
          return searchTextForItem(item).indexOf(term) !== -1;
        });

        item.hidden = !matchesQuery;

        if (!terms.length) {
          closeSearchOpenedItem(item);
          return;
        }

        if (matchesQuery) {
          matches += 1;
          if (!item.open) {
            item.open = true;
            item.setAttribute("data-search-opened", "true");
          }
        } else {
          closeSearchOpenedItem(item);
        }
      });

      faqGroups.forEach(function (group) {
        group.hidden = terms.length > 0 && !group.querySelector(".faq-item:not([hidden])");
      });

      if (faqSearchStatus) {
        if (!terms.length) {
          faqSearchStatus.textContent = "";
        } else {
          var key = matches === 1 ? "faq.searchResultOne" : "faq.searchResultMany";
          faqSearchStatus.textContent = translations[language][key].replace("{count}", String(matches));
        }
      }

      if (faqSearchEmpty) faqSearchEmpty.hidden = !terms.length || matches > 0;
    };

    faqSearchInput.addEventListener("input", refreshFaqSearch);
  }

  var revealNodes = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.12 }
    );
    revealNodes.forEach(function (node) {
      revealObserver.observe(node);
    });
  } else {
    revealNodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
  }

  var journey = document.getElementById("journey");
  var journeyFill = document.querySelector(".signal-rail-fill");
  var progressFrame = 0;

  function paintJourneyProgress() {
    progressFrame = 0;
    if (!journey || !journeyFill) return;
    var rect = journey.getBoundingClientRect();
    var viewportAnchor = window.innerHeight * 0.54;
    var distance = Math.max(1, rect.height - window.innerHeight * 0.28);
    var progress = Math.max(0, Math.min(1, (viewportAnchor - rect.top) / distance));
    journeyFill.style.transform = "translateX(-50%) scaleY(" + progress.toFixed(4) + ")";
  }

  function scheduleJourneyProgress() {
    if (progressFrame) return;
    progressFrame = window.requestAnimationFrame(paintJourneyProgress);
  }

  window.addEventListener("scroll", scheduleJourneyProgress, { passive: true });
  window.addEventListener("resize", scheduleJourneyProgress, { passive: true });
  paintJourneyProgress();

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  applyTheme();
  applyLanguage();
})();
