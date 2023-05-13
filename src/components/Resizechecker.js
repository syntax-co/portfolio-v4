import { useEffect } from "react";

const ResizeChecker = ({ toggle, limit }) => {
  const sizeLimit = limit ? limit : 1000;

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    if (windowWidth > sizeLimit) {
      toggle(false);
    } else {
      toggle(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <></>;
};

export default ResizeChecker;
