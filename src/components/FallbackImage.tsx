"use client";

import Image from "next/image";
import { useState } from "react";

interface FallbackImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}

/**
 * fill 모드 Image + 오류 시 null 반환 → 부모의 폴백 콘텐츠가 자연스럽게 표시됨.
 * 부모 요소는 반드시 position: relative 와 명시적 높이를 가져야 합니다.
 */
export default function FallbackImage({ src, alt, sizes, className }: FallbackImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) return null;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      className={`object-cover ${className ?? ""}`}
      onError={() => setErrored(true)}
    />
  );
}
