"use client";

import { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import Link from "next/link";

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie-consent");
    setIsVisible(!consent);
  }, []);

  const acceptCookies = () => {
    setCookie("cookie-consent", "accepted", {
      maxAge: 60 * 60 * 24 * 30, // 1 month
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 p-4 bg-black border-t border-gray-800'>
      <div className='max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
        <div className='text-sm text-gray-300 font-mono'>
          <span className='text-green-500'>{"["}</span> This site uses cookies
          to enhance your experience. By continuing to browse, you agree to our
          use of cookies. Learn more in our{" "}
          <Link
            href='/privacy'
            className='text-terminal-green hover:underline'
          >
            Privacy Policy
          </Link>
          <span className='text-green-500'>{"]"}</span>
        </div>
        <button
          onClick={acceptCookies}
          className='px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-mono rounded transition-colors
                    border border-green-500 text-sm whitespace-nowrap'
        >
          {">"} Accept Cookies
        </button>
      </div>
    </div>
  );
}
