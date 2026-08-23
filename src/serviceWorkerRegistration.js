/**
 * @file serviceWorkerRegistration.js
 * @description Provides service worker registration, lifecycle management, and cache-first offline support utilities.
 * @architecture Handles PWA caching strategies and environment-specific service worker registration for production and localhost environments.
 */

// This optional code is used to register a service worker.
// register() is not called by default.

/**
 * @constant {boolean} isLocalhost
 * @description Indicates whether the current hostname corresponds to local development environments.
 */
const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
  ),
);

/**
 * @desc    Registers the service worker for production environments and sets up lifecycle update handlers.
 * @param   {Object} [config] - Optional configuration object containing callback hooks.
 * @param   {function(ServiceWorkerRegistration): void} [config.onSuccess] - Callback fired when content is cached for offline use.
 * @param   {function(ServiceWorkerRegistration): void} [config.onUpdate] - Callback fired when new content is available after an update.
 * @returns {void}
 */
export function register(config) {
  if ("serviceWorker" in navigator) {
    const publicUrl = new URL(import.meta.env.BASE_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
        navigator.serviceWorker.ready.then(() => {
          console.log(
            "This web app is being served cache-first by a service " +
              "worker. To learn more, visit https://cra.link/PWA",
          );
        });
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

/**
 * @desc    Registers a valid service worker script with the browser and attaches update listeners.
 * @param   {string} swUrl - The URL of the service worker script.
 * @param   {Object} [config] - Optional configuration object with onSuccess and onUpdate hooks.
 * @returns {void}
 */
function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.log(
                "New content is available and will be used when all " +
                  "tabs for this page are closed. See https://cra.link/PWA.",
              );
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log("Content is cached for offline use.");
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

/**
 * @desc    Validates that the service worker script exists and can be fetched when running on localhost.
 * @param   {string} swUrl - The URL of the service worker script.
 * @param   {Object} [config] - Optional configuration object with onSuccess and onUpdate hooks.
 * @returns {void}
 */
function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, { headers: { "Service-Worker": "script" } })
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
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode.",
      );
    });
}

/**
 * @desc    Unregisters any active service worker registration associated with the application.
 * @returns {void}
 */
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
