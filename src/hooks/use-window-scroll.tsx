import { useEffect, useState } from "react";

const useWindowScroll = () => {
  const [windowScroll, setWindowScroll] = useState({ scrollY: 0 });

  const handleScroll = () => {
    setWindowScroll({
      scrollY: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return windowScroll;
};

export default useWindowScroll;
