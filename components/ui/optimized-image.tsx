"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getOptimizedImagePath } from "@/lib/image-utils";

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

  // Use getOptimizedImagePath utility for robust path generation
  const getOptimizedSrc = (
    size: number,
    format: "original" | "webp" = "original"
  ) => {
    if (process.env.NODE_ENV === "development") {
      return src;
    }
    return getOptimizedImagePath(
      src,
      size,
      format === "webp" ? "webp" : "original"
    );
  };

  // Generate srcset for both original and WebP formats
  // Only use sizes that are actually generated
  const sizes = [48, 96, 128];
  const srcSet = sizes
    .filter((size) => !width || size <= width)
    .map((size) => `${getOptimizedSrc(size)} ${size}w`)
    .join(", ");

  const webpSrcSet = sizes
    .filter((size) => !width || size <= width)
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
