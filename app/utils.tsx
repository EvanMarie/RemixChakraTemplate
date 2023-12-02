import { useEffect, useState } from "react";

export function truncateText(text: string, length = 50) {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

// ---------------------------------------------------------------------- //
export default function FormatDate(
  inputDate: Date | string | null | undefined,
  format: "text" | "number" = "number" // Default format is 'number'
): string {
  if (!inputDate) {
    return "Invalid Date";
  }

  const date = new Date(inputDate);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  // Decide the format based on the format argument
  if (format === "number") {
    // Format the date as mm/dd/yy hh:mm AM/PM
    const month = date.getMonth() + 1; // getMonth() is zero-based
    const day = date.getDate();
    const year = date.getFullYear().toString().substr(-2); // Get last two digits of year
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHour = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${month}/${day}/${year} ${formattedHour}:${formattedMinutes} ${ampm}`;
  } else {
    // Return the date in text format as it currently does
    const datePart = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(date);

    const timePart = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);

    return `${datePart} ${timePart}`;
  }
}

// ---------------------------------------------------------------------- //

export const useDetectMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    // This regex checks for a wide range of mobile devices
    const mobileRegex =
      /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i;
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  return isMobile;
};

export const useSafeArea = () => {
  const [safeArea, setSafeArea] = useState<string>("0px");

  useEffect(() => {
    // this function checks if CSS environment variables are supported
    const isEnvSupported =
      window.CSS &&
      window.CSS.supports &&
      window.CSS.supports("top: env(safe-area-inset-top)");

    if (isEnvSupported) {
      // we set the safe area bottom inset
      const safeAreaInsetBottom = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--safe-area-inset-bottom");
      setSafeArea(safeAreaInsetBottom);
    }
  }, []);

  return safeArea;
};

// ---------------------------------------------------------------------- //
