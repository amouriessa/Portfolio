import { useState, useRef, useCallback } from "react";

export const useScrollIndicator = () => {
  const [showTopIndicator, setShowTopIndicator] = useState(false);
  const [showBottomIndicator, setShowBottomIndicator] = useState(false);

  const observerRef = useRef(null);

  const handleScroll = useCallback((e) => {
    const el = e.target;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight;
    const clientHeight = el.clientHeight;
    const scrollBottom = scrollHeight - scrollTop - clientHeight;

    setShowTopIndicator(scrollTop > 20);
    setShowBottomIndicator(scrollBottom > 20);
  }, []);

  const setRef = useCallback(
    (node) => {
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
    [handleScroll],
  );

  return {
    scrollRef: setRef,
    showTopIndicator,
    showBottomIndicator,
  };
};
