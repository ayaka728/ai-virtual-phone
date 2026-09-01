"use client";

import { useEffect } from "react";

/**
 * 针对移动端浏览器（特别是安卓、华为自带浏览器等）视口高度计算不准的终极 JS 补偿。
 * 动态测量真实的 window.innerHeight，写入 CSS 变量 --vh，在 CSS 中通过 calc(var(--vh, 1vh) * 100) 使用。
 */
export function ViewportHeightCompensator() {
  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return null;
}
