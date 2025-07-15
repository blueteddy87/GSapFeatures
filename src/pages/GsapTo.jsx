// Jeśli używasz Next.js w trybie app router, dodaj „use client” na górze pliku
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Rejestrujemy hook jako plugin GSAP, by React w trybie strict-mode
// nie wywoływał animacji dwukrotnie
gsap.registerPlugin(useGSAP);

const GsapTo = () => {
  // Tworzymy ref, by ograniczyć selektory GSAP do wnętrza <main>
  const container = useRef(null);

  // Animacja wywoływana raz przy montowaniu komponentu
  useGSAP(
    () => {
      gsap.to("#blue-box", {
        x: 250,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        duration: 2,
        ease: "elastic.out(1, 0.3),",
      });
    },
    {
      scope: container,
      // dependencies: [],       // domyślnie [] — animation uruchomi się tylko raz
      // revertOnUpdate: false   // domyślnie false — nie czyści animacji przy aktualizacji
    }
  );

  return (
    <main ref={container}>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        Metoda <code>gsap.to()</code> służy do animowania elementów od ich
        aktualnego stanu do nowego stanu.
      </p>
      <p className="mt-5 text-gray-500">
        Metoda <code>gsap.to()</code> jest podobna do <code>gsap.from()</code>,
        ale różnica polega na tym, że <code>gsap.to()</code> animuje z bieżącego
        stanu do nowego, podczas gdy <code>gsap.from()</code> odtwarza animację
        od stanu nowego do stanu początkowego.
      </p>

      <p className="mt-5 text-gray-500">
        Więcej informacji o{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
