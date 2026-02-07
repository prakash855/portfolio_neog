// Service Worker Registration and PWA utilities

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
  ),
);

export function register() {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL(
      process.env.PUBLIC_URL || "",
      window.location.href,
    );
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl);
        navigator.serviceWorker.ready.then(() => {
          console.log(
            "This web app is being served cache-first by a service worker.",
          );
        });
      } else {
        registerValidSW(swUrl);
      }
    });
  } else if ("serviceWorker" in navigator && !isLocalhost) {
    navigator.serviceWorker.register(
      `${process.env.PUBLIC_URL}/service-worker.js`,
    );
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      console.log("Service Worker registered successfully:", registration);

      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.log("New service worker available, app can be updated.");
              // Optionally show an update prompt here
              if (window.updateServiceWorker) {
                window.updateServiceWorker();
              }
            } else {
              console.log("Service Worker installed for the first time.");
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

function checkValidServiceWorker(swUrl) {
  fetch(swUrl, {
    headers: { "Service-Worker": "script" },
  })
    .then((response) => {
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode.",
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

// Detect if app is installable (PWA install prompt)
export class PWAInstallPrompt {
  constructor() {
    this.deferredPrompt = null;
    this.isInstallable = false;
    this.setupListener();
  }

  setupListener() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.isInstallable = true;
      console.log("PWA install prompt available");
      // Dispatch custom event so React components can listen
      window.dispatchEvent(new CustomEvent("pwa-installable"));
    });

    window.addEventListener("appinstalled", () => {
      console.log("PWA was installed");
      this.deferredPrompt = null;
      this.isInstallable = false;
      window.dispatchEvent(new CustomEvent("pwa-installed"));
    });
  }

  async prompt() {
    if (!this.deferredPrompt) {
      return false;
    }
    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    this.deferredPrompt = null;
    return outcome === "accepted";
  }

  isAvailable() {
    return this.isInstallable;
  }
}

export default register;
