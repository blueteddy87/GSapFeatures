"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

// rejestracja pluginu
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef(null);

  useGSAP(
    () => {
      // pobieramy dzieci wrappera jako tablicę
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150 * (boxes.indexOf(box) + 5), // przesunięcie w poziomie zależne od indeksu
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 10%",
            scrub: true,
            markers: true, // wyłącz w produkcji
          },
          ease: "power1.inOut",
        });
      });
    },
    {
      scope: scrollRef, // ograniczamy selektory do wnętrza scrollRef
      // dependencies: [],    // domyślnie odpali się raz
    }
  );

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap ScrollTrigger to plugin do animacji wyzwalanych przewijaniem.
      </p>
      <p className="mt-5 text-gray-500">
        Definiujesz punkty startu/końca i możesz skrobić animację podczas
        scrolla.
      </p>
      <p className="mt-5 text-gray-500">
        Docs:{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          ScrollTrigger
        </a>
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>
        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      {/* tutaj dajemy poprawnie ref i className */}
      <div ref={scrollRef} className="mt-20 w-full h-screen">
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
