// Utility to get optimized image path based on device size

export function getOptimizedImagePath(
  originalPath: string,
  size: number = 128,
  format: "webp" | "original" = "webp"
) {
  const parts = originalPath.replace(/^\/?public\//, "").split("/");
  const filename = parts.pop()!;
  const ext = filename.split(".").pop()!;
  const name = filename.replace(`.${ext}`, "");
  const subPath = parts.join("/");
  if (format === "webp") {
    return `/images/optimized/${size}/${subPath}/${name}.webp`;
  }
  return `/images/optimized/${size}/${subPath}/${filename}`;
}

// React hook to select image size based on device width
import { useEffect, useState } from "react";

export function useOptimizedImage(
  originalPath: string,
  format: "webp" | "original" = "webp"
) {
  const [size, setSize] = useState(128);

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth < 640) setSize(48);
      else if (window.innerWidth < 1024) setSize(96);
      else setSize(128);
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return getOptimizedImagePath(originalPath, size, format);
}
