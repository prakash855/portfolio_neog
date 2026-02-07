import React, { useState, useEffect } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import "./PWAInstallButton.css";

const PWAInstallButton = () => {
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Check if PWA is already installed
    if (window.navigator.standalone === true) {
      setIsInstalled(true);
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      console.log("PWA was installed");
      setIsInstallable(false);
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    if (outcome === "accepted") {
      setIsInstallable(false);
      setDeferredPrompt(null);
    }
  };

  if (!isInstallable || isInstalled) {
    return null;
  }

  return (
    <button
      className="pwa-install-btn"
      onClick={handleInstall}
      title="Install app on your device"
    >
      <DownloadOutlined />
      <span>Install App</span>
    </button>
  );
};

export default PWAInstallButton;
