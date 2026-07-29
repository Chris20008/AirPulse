# AirPulse Privacy Policy

Effective date: 25 July 2026

## 1. Introduction

This Privacy Policy explains how AirPulse processes information when you use the AirPulse iOS app, its Live Activity on the Lock Screen and in the Dynamic Island, optional Pro features, purchase or restore flows, feedback flows, iCloud backup features, shortcuts, and the AirPulse website.

AirPulse primarily processes app data on the device. The provider does not operate a custom user-account system or a developer-operated backend for uploading app data in the current implementation.

## 2. Controller

The controller responsible for processing personal data in connection with AirPulse is:

- Legal name: Christian Range
- Address: Paulusstraße 19, 53227 Bonn, Germany
- Phone: +49 15780403050
- Contact email: [airpulseapp@icloud.com](mailto:airpulseapp@icloud.com)

No data protection officer has been appointed because no appointment is currently required for this project.

## 3. Information We Process

Depending on how you use AirPulse and which permissions you grant, the app may process the following categories of information.

### Health and workout data

AirPulse uses Apple HealthKit and workout-related Apple frameworks to access and process:

- heart rate values;
- timestamps of heart rate samples;
- recent heart rate history;
- derived heart rate statistics, zones, trends, and insight summaries;
- optional age values entered for age-based heart rate zone calculations.

AirPulse does not save AirPulse sessions as workouts in Apple Fitness or contribute to Apple Fitness rings. AirPulse does not read, calculate, display, or store calorie or active-energy values, including in Apple Health.

Health and workout data is processed for the app features you choose to use and is not used for advertising.

### Location data

If you grant location permission, AirPulse may process:

- your current location;
- location data used to evaluate whitelist or blacklist tracking filters;
- optional session location history points recorded while a tag with location history enabled is assigned;
- map selections you make inside the app;
- address search results;
- reverse-geocoded place labels;
- location preview snapshots for saved places.

When you save a location filter, AirPulse stores the place name, latitude, longitude, and configured radius.

With Save Battery turned off, AirPulse may process location updates in the background during an active session. These updates support active-session behavior across foreground and background transitions as permitted by iOS.

AirPulse stores location history points only when Pro is active and location history is enabled for the current session tag. In that case, AirPulse stores timestamped latitude and longitude points, and may store altitude or horizontal accuracy if iOS provides meaningful values. These points are stored locally with the session data. If iCloud is available for your Apple Account, they may also be included in the iCloud backup copy.

### Device and connectivity information

AirPulse may process limited device and connectivity information needed for app functionality, including:

- the names and identifiers of connected Bluetooth audio devices made available by iOS;
- whether a supported audio route is active;
- technical tracking state such as whether tracking is active, paused, blocked, or stopped;
- Live Activity and shortcut state needed to display or control an active session.

### Settings, tags, and preferences

AirPulse stores local app settings and preferences, which may include:

- theme and language selection;
- low power mode preference;
- notification preferences;
- onboarding completion status;
- configured device names;
- location filter mode and saved entries;
- custom tags, tag categories, colors, favorites, and activity levels;
- heart rate zone profiles and audio feedback profiles;
- native preference values used for the Live Activity, shortcuts, and iCloud-synced settings.

### Purchase, entitlement, and support purchase information

If you use optional Pro features, App Store purchase flows, restore flows, or optional support purchases, AirPulse may process:

- App Store product identifiers and transaction states exposed to the app by Apple StoreKit;
- locally cached entitlement status such as plan type, expiry date, lifetime purchase flags, early-user status, or purchase source;
- information needed to show available products, complete a purchase, restore a purchase, or cache the result locally.

### Feedback, ratings, and support contact

AirPulse may let you rate the app, open an App Store review flow, contact support by email, or open an optional external feedback form. If you use these options, the information you provide is processed by the selected external service or email provider. AirPulse does not automatically attach health, location, or session data to feedback.

## 4. Website Data, Cookies, and Local Storage

The AirPulse website is a static GitHub Pages website. The website does not intentionally use analytics, advertising pixels, tracking SDKs, or cookies. For purposes of German end-device privacy rules, including § 25 TDDDG, no non-essential tracking access is intentionally used.

The website may store the following browser preferences in localStorage when you use the corresponding controls:

- selected language;
- selected light or dark theme.

This storage is used only to remember your visible website preference. You can remove it through your browser settings.

Because the website is hosted on GitHub Pages, GitHub may process technical access information such as IP address, browser information, requested URL, referrer, and timestamps for security, delivery, and operational purposes. This processing is governed by GitHub's own terms and privacy documentation.

## 5. How We Use Information

We use information processed by AirPulse to:

- display current and recent heart rate information in the app;
- operate pulse tracking through Apple's workout and HealthKit frameworks;
- support background behavior permitted by iOS;
- show information in the Live Activity on the Lock Screen and in the Dynamic Island;
- let you configure supported audio devices;
- let you configure location-based tracking rules;
- process background location updates during an active session when Save Battery is turned off;
- record optional location histories only while Pro is active and a tag with location history enabled is assigned;
- search for, label, and preview saved places;
- calculate session statistics, daily summaries, insights, heart rate zones, and graph views;
- provide optional audio feedback based on heart rate zones and personal limits;
- unlock, restore, cache, or display optional Pro entitlements and support purchases;
- create, upload, restore, export, or import session backups through iCloud when iCloud is available;
- store your app settings, tags, profiles, and preferences;
- send optional local notifications;
- support feedback, rating, and support contact flows you choose to open.

## 6. Legal Bases

Where the GDPR, UK GDPR, or similar privacy laws apply, processing may be based on one or more of the following legal bases:

- performance of a contract, or steps taken at your request, for core app functionality and optional purchases you choose to use;
- consent, where permission-based access is required, including for location access, notifications, HealthKit access, and optional external feedback forms;
- explicit consent, where required by law for health-related data processed through HealthKit or similar health-data contexts;
- legitimate interests in maintaining app stability, reliability, fraud prevention, and website delivery, to the extent permitted by law;
- compliance with legal obligations, where applicable.

You may withdraw consent-based permissions at any time through iOS settings, Health settings, notification settings, or the relevant app setting. Withdrawal does not affect processing that already took place before withdrawal.

## 7. Where Information Is Stored

AirPulse stores information locally on the device, including through:

- SharedPreferences, UserDefaults, or an App Group container shared between app components where needed;
- iCloud key-value storage for selected settings that are intended to sync across your Apple devices;
- Keychain storage for selected entitlement or app-state flags where needed;
- the local session database for sessions, tags, optional session location histories, audio feedback profiles, zone profiles, and related app data;
- iCloud backup storage used for session database backup and restore when iCloud is available for your Apple Account;
- local cache storage for map preview images;
- Apple Health / HealthKit storage for heart rate information handled through Apple's frameworks;
- Live Activity state displayed by iOS on the Lock Screen and in the Dynamic Island;
- local purchase entitlement cache used for optional Pro features.

When iCloud is available for your Apple Account, the backup copy is stored through Apple's iCloud infrastructure. Storage, protection, retention, availability, account access, and international processing of that iCloud data are governed by Apple's applicable iCloud terms, Apple's Privacy Policy, and Apple's iCloud data security practices. The provider of AirPulse does not operate the iCloud infrastructure and does not control how Apple stores or protects data in iCloud.

## 8. Sharing and Third-Party Services

AirPulse does not include a custom server endpoint for uploading user data to the provider.

However, the app and website rely on third-party or platform services for certain features, including:

- Apple Health / HealthKit;
- Apple iCloud services used for settings sync, entitlement support, and session database backup and restore when iCloud is available;
- Apple Maps related services, including map display, address search, and reverse geocoding;
- iOS notification services;
- iOS Live Activity, Siri, App Intents, and shortcut infrastructure;
- Apple App Store / StoreKit purchase, restore, rating, and review services;
- Google Forms if you choose to open an external feedback form;
- your email provider if you contact support by email;
- GitHub Pages for hosting the AirPulse website.

Your use of these services is subject to the applicable third-party terms and privacy documentation.

If you manually export, share, or send app data, the selected destination receives the information you choose to provide.

## 9. Retention

AirPulse keeps locally stored information for as long as it remains necessary for the relevant app feature, unless you delete it, overwrite it, clear it, or remove the app.

In particular:

- app settings remain stored until changed or removed;
- saved devices, tags, profiles, and location filters remain stored until you delete them;
- session data and session location histories remain stored until the related session data is deleted, imported over, or the app is removed;
- cached entitlement data may remain stored until it changes, expires, is restored, or is cleared in the app;
- cached map preview images may remain in cache until removed by the app;
- iCloud backups remain available until overwritten, deleted, unavailable, or removed through Apple/iCloud mechanisms;
- local website preferences remain in browser localStorage until cleared by you or your browser.

HealthKit heart rate records are also subject to Apple's Health data environment and the way Apple manages such data.

## 10. Your Choices and Rights

Depending on your jurisdiction, you may have rights such as the right to access, correct, erase, restrict, object to, or receive a copy of your personal data. You may also have the right to withdraw consent and the right to lodge a complaint with a supervisory authority.

For users in North Rhine-Westphalia, Germany, the competent supervisory authority may be the Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW). You may also contact any other competent data protection supervisory authority.

You can control certain processing directly by:

- granting or revoking Health, location, and notification permissions in iOS settings;
- changing or deleting saved location filters;
- enabling or disabling location history on individual session tags;
- deleting sessions, tags, profiles, or backups where the app offers deletion controls;
- removing configured devices;
- changing app settings;
- clearing website localStorage in your browser;
- stopping use of the app and deleting it from your device.

## 11. Required or Optional Data

Providing personal data to AirPulse is generally voluntary. However, some app functions cannot work without the relevant permission or data. For example, heart rate display requires HealthKit access, location filters and optional session routes require location access, location access may also affect active-session background behavior and Live Activity availability when Save Battery is turned off, purchase features require StoreKit, and iCloud backup features require iCloud availability through your Apple Account.

## 12. Automated Decision-Making

AirPulse does not use automated decision-making within the meaning of Article 22 GDPR and does not use profiling for advertising. The app may calculate technical and health-related summaries such as zones, trends, averages, graphs, and insights for display to you.

## 13. Security

AirPulse uses on-device storage and Apple's platform frameworks for the functions described in this Privacy Policy. While reasonable technical and organizational measures should be taken to protect personal data, no security measure can guarantee absolute protection.

This Privacy Policy does not make any representation about specific certifications, encryption standards, or formal security controls unless such measures are separately implemented and documented.

## 14. International Data Transfers

AirPulse does not currently include a developer-operated backend for transferring app data to the provider's own remote systems.

If Apple, GitHub, Google, email providers, or other services process data in connection with HealthKit, maps, iCloud, StoreKit, Live Activities, shortcuts, website hosting, feedback, or notifications, such processing and any international transfers are subject to their applicable terms and policies.

## 15. Children

AirPulse is not directed to children under 13. The App Store may show a regional age rating. If you believe a child has provided personal data directly to the provider, please contact us.

## 16. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in the app, the website, applicable law, or operational requirements. The updated version should be published with a revised effective date.

## 17. Contact

For privacy-related questions, please contact:

- Legal name: Christian Range
- Address: Paulusstraße 19, 53227 Bonn, Germany
- Phone: +49 15780403050
- Contact email: [airpulseapp@icloud.com](mailto:airpulseapp@icloud.com)
