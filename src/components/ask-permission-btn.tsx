"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const AskPermissionBtn = () => {
  const [permission, setPermission] = useState("default");

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setPermission(Notification.permission);
    }

    const checkPermission = () => {
      if (typeof window !== "undefined" && "Notification" in window) {
        setPermission(Notification.permission);
      }
    };

    // Vérifier la permission de notification à l'initialisation
    checkPermission();

    // Surveiller les changements de permission (nécessite un rafraîchissement de la page)
    document.addEventListener("visibilitychange", checkPermission);
    return () => {
      document.removeEventListener("visibilitychange", checkPermission);
    };
  }, []);

  const handlePermission = async () => {
    if (typeof window !== "undefined" && "Notification" in window) {
      try {
        const permissionResult = await Notification.requestPermission();
        setPermission(permissionResult);
      } catch (error) {
        console.error("Error requesting notification permission:", error);
      }
    }
  };

  if (permission === "default") {
    return (
      <div className="fixed bottom-20 right-20 w-40 h-12 bg-blue-500">
        <Button onClick={handlePermission}>Allow Notifications</Button>
      </div>
    );
  }

  return null;
};

export default AskPermissionBtn;
