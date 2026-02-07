# PWA Setup Guide

This portfolio has been converted into a Progressive Web App (PWA). Here's what has been set up:

## What is included:

### 1. **Service Worker** (`public/service-worker.js`)

- Handles caching strategies for offline support
- **Cache-First Strategy**: For static assets (HTML, CSS, JS, images, fonts)
- **Network-First Strategy**: For API calls (better for dynamic content)
- Automatically caches assets on first load and updates them intelligently

### 2. **Web App Manifest** (`public/manifest.json`)

- Full PWA configuration for installation
- App icons (192x192 and 512x512) for splashscreen and home screen
- App name, short name, description
- Display mode set to `standalone` (full-screen app experience)
- Theme colors configured
- Maskable icons for adaptive display

### 3. **HTML Meta Tags** (`public/index.html`)

- iOS specific meta tags for app-like experience
- Apple touch icon for iOS home screen
- Theme color specification
- Viewport configuration for mobile devices
- Web app capable declarations

### 4. **Service Worker Registration** (`src/utils/pwaUtils.js`)

- Handles service worker lifecycle
- PWA install prompt detection
- Update notifications
- Works in production builds

### 5. **PWA Install Button** (`src/components/PWAInstallButton/`)

- React component to prompt users to install the app
- Shows only when app is installable
- Uses Ant Design icons
- Responsive design

### 6. **Offline Indicator** (`src/components/OfflineIndicator/`)

- Displays when user is offline
- Visual feedback about connection status
- Sticky indicator at the top of the page

## How to Use:

### Installation & Setup

1. No additional packages needed - everything uses native APIs
2. Service worker is automatically registered in `src/index.js`

### Adding Components to Your App

**In your Header or Navigation component:**

```jsx
import PWAInstallButton from "./components/PWAInstallButton/PWAInstallButton";

<PWAInstallButton />;
```

**In your App.js (or top component):**

```jsx
import OfflineIndicator from "./components/OfflineIndicator/OfflineIndicator";

<OfflineIndicator />
<App />
```

### Features Enabled:

✅ **Installable**: Users can install the app on home screen
✅ **Offline Support**: App works without internet connection
✅ **App-like Experience**: Standalone display mode
✅ **Fast Loading**: Smart caching strategies
✅ **Installable Icons**: Proper icons for splash screens
✅ **Network Awareness**: Shows offline indicator when needed
✅ **Auto-Update**: Service worker detects and handles updates

## Testing the PWA:

### Local Testing:

```bash
npm run build
npx serve -s build
```

### In Chrome DevTools:

1. Open DevTools (F12)
2. Go to **Application** tab
3. Check **Service Workers** section
4. Check **Manifest** to verify manifest.json is loaded

### Install Prompt:

- The install prompt appears automatically on supported browsers
- Click the install button or use browser install prompt
- App will appear on home screen

### Offline Testing:

1. Open DevTools → Application
2. Click **Service Workers**
3. Check "Offline" checkbox
4. Refresh page - app should still work with cached data

## PWA Checklist:

- ✅ HTTPS ready (required for production PWA)
- ✅ Web App Manifest created and linked
- ✅ Service Worker registered
- ✅ App icons provided
- ✅ Responsive design
- ✅ Offline support enabled
- ✅ Install prompts configured
- ✅ Meta tags configured for iOS

## File Structure:

```
public/
├── service-worker.js        # Service worker with caching logic
├── manifest.json            # PWA manifest configuration
└── index.html              # Updated with PWA meta tags

src/
├── utils/
│   └── pwaUtils.js          # Service worker registration
├── components/
│   ├── PWAInstallButton/    # Install prompt button
│   └── OfflineIndicator/    # Offline status indicator
└── index.js                 # Updated to register SW
```

## Next Steps:

1. **Update App Icons**: Replace `logo192.png` and `logo512.png` with your actual app icons
2. **Test on Mobile**: Use your phone or mobile emulator to test
3. **Deploy**: Push to production (PWA requires HTTPS)
4. **Monitor**: Use Chrome DevTools to monitor service worker activity

## Customization:

### Cache Duration:

Edit `public/service-worker.js` and change `CACHE_NAME` to invalidate cache:

```javascript
const CACHE_NAME = "portfolio-v2"; // Increment version for cache bust
```

### Caching Strategy:

- Add URLs to `STATIC_ASSETS` array for cache-first behavior
- Modify `networkFirst()` and `cacheFirst()` functions as needed

### App Branding:

Edit `public/manifest.json`:

- `short_name`: Display name (12 characters max)
- `name`: Full app name
- `theme_color`: App theme color
- `background_color`: Splash screen background

## Notes:

- Service worker is only registered in **production builds**
- In development, you can manually test by running `npm run build && npx serve -s build`
- Internet connection is required initially to download assets
- Once cached, the app loads instantly offline
- Users can uninstall like any native app

## Support:

For more information about PWAs, visit:

- [Web.dev PWA Documentation](https://web.dev/progressive-web-apps/)
- [MDN Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web Manifest Spec](https://w3c.github.io/manifest/)
