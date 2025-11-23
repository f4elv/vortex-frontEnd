import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef, useState } from "react";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export function useInView(threshold: number = 0.2) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
