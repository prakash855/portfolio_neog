import React, { useState, useEffect } from "react";
import { WifiOutlined, WifiOffOutlined } from "@ant-design/icons";
import "./OfflineIndicator.css";

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log("Back online");
    };

    const handleOffline = () => {
      setIsOnline(false);
      console.log("Now offline");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) {
    return null;
  }

  return (
    <div className="offline-indicator">
      <WifiOffOutlined className="offline-icon" />
      <span>You are currently offline. Some features may be limited.</span>
    </div>
  );
};

export default OfflineIndicator;
