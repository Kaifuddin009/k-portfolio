import { useEffect, useRef } from "react";

export default function useOutsideClickOrScroll(callback) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    const handleScroll = () => callback();

    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);

  return ref;
}
