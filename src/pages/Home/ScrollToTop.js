import { animateScroll as scroll } from "react-scroll";
import { CaretUp } from "phosphor-react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  return (
    <Scroller whileHover={{ rotate: -25 }}>
      <div className="btn" onClick={() => scroll.scrollToTop()}>
        <CaretUp size={38} />
      </div>
    </Scroller>
  );
};

export default ScrollToTop;

const Scroller = styled(motion.div)`
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 10;

  .btn {
    display: block;
    height: 55px;
    width: 55px;
    display: grid;
    place-items: center;
    border-radius: 100%;
    color: rgba(0, 0, 0, 0.7);
    background: ${({ theme }) => theme.secondary};
    box-shadow: 3px 3px 1px 1px rgba(0, 0, 0, 0.08);

    &:hover {
      cursor: pointer;
    }
  }
`;
