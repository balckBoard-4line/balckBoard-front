import { useEffect, useState } from "react";

function useInnerWidth() {
  const [innerWidth, setInnerWidth] = useState(
    window.innerWidth > 420 ? 420 : window.innerWidth
  );

  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth < 420 && window.innerHeight > 300) {
        setInnerWidth(window.innerWidth);
      } else if (window.innerWidth > 420) {
        setInnerWidth(420);
      }
    };
    window.addEventListener("resize", resizeListener);
  });

  return innerWidth;
}

export default useInnerWidth;
