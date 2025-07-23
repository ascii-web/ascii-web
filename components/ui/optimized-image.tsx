"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  onLoad?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  onLoad,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) {
      handleLoad();
    }
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    setLoaded(true);
    onLoad?.();
  };

  // Get optimized image paths
  const getOptimizedSrc = (
    size: number,
    format: "original" | "webp" = "original"
  ) => {
    // During development, just use the original image
    if (process.env.NODE_ENV === "development") {
      return src;
    }
    const ext = src.split(".").pop();
    const basePath = src.substring(0, src.lastIndexOf("."));
    const newExt = format === "webp" ? "webp" : ext;

    // Handle case where optimized image might not exist
    if (!ext || !basePath) return src;

    return `/optimized/${size}${basePath.substring(
      basePath.lastIndexOf("/")
    )}.${newExt}`;
  };

  // Generate srcset for both original and WebP formats
  const sizes = [16, 32, 48, 64, 96, 128, 256, 384, 640, 768, 1024, 1280, 1536];
  const srcSet = sizes
    .filter((size) => size <= (width || Infinity))
    .map((size) => `${getOptimizedSrc(size)} ${size}w`)
    .join(", ");

  const webpSrcSet = sizes
    .filter((size) => size <= (width || Infinity))
    .map((size) => `${getOptimizedSrc(size, "webp")} ${size}w`)
    .join(", ");

  const imageStyle = cn(
    "transition-all duration-700 ease-in-out",
    isLoading ? "scale-105 blur-lg" : "scale-100 blur-0",
    fill ? "object-cover" : ""
  );

  const containerStyle = cn(
    "overflow-hidden",
    fill ? "absolute inset-0" : "relative",
    className
  );

  return (
    <div
      className={containerStyle}
      style={fill ? undefined : { width, height }}
    >
      <picture>
        <source
          type='image/webp'
          srcSet={webpSrcSet}
          sizes={`(max-width: ${width}px) 100vw, ${width}px`}
        />
        <img
          ref={imgRef}
          src={src}
          srcSet={srcSet}
          sizes={`(max-width: ${width}px) 100vw, ${width}px`}
          alt={alt}
          width={width}
          height={height}
          className={imageStyle}
          onLoad={handleLoad}
          style={fill ? { width: "100%", height: "100%" } : undefined}
          loading={priority ? "eager" : "lazy"}
        />
      </picture>
      {!loaded && (
        <div
          className='absolute inset-0 bg-gray-800 animate-pulse'
          style={{
            aspectRatio: width && height ? width / height : undefined,
          }}
        />
      )}
    </div>
  );
}
