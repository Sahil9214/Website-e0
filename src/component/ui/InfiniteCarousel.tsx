"use client";

import Image from "next/image";
import {
  INFINITE_CAROUSEL_CARD_GAP,
  INFINITE_CAROUSEL_CARD_W,
  INFINITE_CAROUSEL_IMAGES,
  INFINITE_CAROUSEL_MAX_H,
  INFINITE_CAROUSEL_SCROLL_SEC,
} from "@/constant";

export default function InfiniteCarousel() {
  const images = [...INFINITE_CAROUSEL_IMAGES];
  const setWidth =
    INFINITE_CAROUSEL_CARD_W * images.length +
    INFINITE_CAROUSEL_CARD_GAP * images.length;

  const items = [...images, ...images, ...images];

  return (
    <>
      <style>{`
        @keyframes carousel-drift {
          from { transform: translateX(0px); }
          to   { transform: translateX(-${setWidth}px); }
        }
      `}</style>

      <div
        className="relative w-full overflow-hidden bg-white"
        style={{ height: `${INFINITE_CAROUSEL_MAX_H}px` }}
      >

        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 "
          style={{
            height: 68,
            background: "#ffffff",
            borderBottomLeftRadius: "90% 100%",
            borderBottomRightRadius: "90% 100%",
          }}
        />

        <div
          className="pointer-events-none absolute inset-x-0 z-20 "
          style={{
            bottom: -5,
            height: 98,
            background: "#ffffff",
            borderTopLeftRadius: "90% 100%",
            borderTopRightRadius: "90% 100%",
          }}
        />

        <div
          className="flex flex-row items-end"
          style={{
            gap: `${INFINITE_CAROUSEL_CARD_GAP}px`,
            width: "max-content",
            height: `${INFINITE_CAROUSEL_MAX_H}px`,
            paddingRight: `${INFINITE_CAROUSEL_CARD_GAP}px`,
            willChange: "transform",
            animation: `carousel-drift ${INFINITE_CAROUSEL_SCROLL_SEC}s linear infinite`,
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="shrink-0 overflow-hidden bg-[#e8e4df]"
              style={{
                width: `${INFINITE_CAROUSEL_CARD_W}px`,
                height: `${INFINITE_CAROUSEL_MAX_H}px`,
              }}
            >
              <Image
                src={src}
                alt={`Event photo ${(i % images.length) + 1}`}
                width={INFINITE_CAROUSEL_CARD_W}
                height={INFINITE_CAROUSEL_MAX_H}
                sizes={`${INFINITE_CAROUSEL_CARD_W}px`}
                className="h-full w-full object-cover"
                draggable={false}
                priority={i < images.length * 2}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
