"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const TRIGGER = 0.6; // linha avança quando chega a 60% da altura da tela

export function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const h = window.innerHeight * TRIGGER - rect.top;
      setHeight(Math.max(0, Math.min(rect.height, h)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="relative mt-5 xl:mt-0 ms-8 lg:ms-20 flex flex-col gap-10 pl-10">
      {/* trilho */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
      {/* linha de progresso */}
      <div
        className="absolute left-0 top-0 w-px bg-turquesa shadow-[0_0_12px_var(--color-turquesa)]"
        style={{ height }}
      />
      {children}
    </div>
  );
}

export function TimelineItem({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      setActive(el.getBoundingClientRect().top + 24 <= window.innerHeight * TRIGGER);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* bolinha */}
      <span
        className={`absolute -left-11.5 top-6 z-10 size-3 rounded-full border-2 transition-all duration-300 ${
          active
            ? "scale-125 border-turquesa bg-turquesa shadow-[0_0_14px_var(--color-turquesa)]"
            : "border-white/20 bg-card-bg"
        }`}
      />
      {/* conteúdo */}
      <div
        className={`transition-all duration-500 ${
          active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-40"
        } me-5 lg:me-20`}
      >
        {children}
      </div>
    </div>
  );
}