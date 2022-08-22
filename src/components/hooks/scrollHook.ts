import * as React from "react";

const useScrollHook = () => {
  const [scrollDisabled, setScrollDisabled] = React.useState(false);
  const scrollYlockRef = React.useRef(0);

  const disableScroll = (status: boolean | string) => {
    if (typeof document === "undefined") return;
    setScrollDisabled(!!status);
  };

  const handleScroll = (event: Event) => {
    window.scrollTo(0, scrollYlockRef.current);
  };

  const handleWheel = (event: MouseEvent) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    if (!scrollDisabled) {
      scrollYlockRef.current = window.scrollY;
      document.addEventListener("scroll", handleScroll, { passive: false });
      document.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        document.removeEventListener("scroll", handleScroll);
        document.removeEventListener("wheel", handleWheel);
      };
    } else {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("wheel", handleWheel);
    }
  }, [scrollDisabled]);

  return [disableScroll];
};

export default useScrollHook;
