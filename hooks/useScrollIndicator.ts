import { useState, useRef, useCallback } from "react";

export const useScrollIndicator = () => {
  const [showTopIndicator, setShowTopIndicator] = useState<boolean>(false);
  const [showBottomIndicator, setShowBottomIndicator] = useState<boolean>(false);

  const observerRef = useRef<ResizeObserver | null>(null);

  const handleScroll = useCallback((e: Event) => {
    const el = e.target as HTMLElement;
    if (!el) return;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight;
    const clientHeight = el.clientHeight;
    const scrollBottom = scrollHeight - scrollTop - clientHeight;

    setShowTopIndicator(scrollTop > 20);
    setShowBottomIndicator(scrollBottom > 20);
  }, []);

  const setRef = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return;

      const checkScrollable = () => {
        const isScrollable = node.scrollHeight > node.clientHeight;
        setShowBottomIndicator(isScrollable);
      };

      checkScrollable();

      node.addEventListener("scroll", handleScroll);

      const observer = new ResizeObserver(checkScrollable);
      observer.observe(node);
      observerRef.current = observer;

      return () => {
        node.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    },
    [handleScroll]
  );

  return {
    scrollRef: setRef,
    showTopIndicator,
    showBottomIndicator,
  };
};
