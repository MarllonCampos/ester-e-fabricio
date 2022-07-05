import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

// import { Container } from './styles';

const ScrollToTop: React.FC = () => {
  const [buttonShow, setButtonShow] = useState<Boolean>(false);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.document.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight / 4) {
        setButtonShow(true);
      } else setButtonShow(false);
    });
  }, []);

  return (
    buttonShow && (
      <div className="scrollTop" onClick={goToTop}>
        <FaAngleUp size={22} />
      </div>
    )
  );
};

export default ScrollToTop;
