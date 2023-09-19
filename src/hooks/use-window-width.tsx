import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};

export default useWindowWidth;
