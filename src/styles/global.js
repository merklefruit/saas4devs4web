import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  z-index: 1;
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 25px;
  position: relative;
  width: auto;
  height: 100%;
  color: ${({ theme }) => theme.text};

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      width: 100%;
      max-width: 100%;
    `}
`;

export const Button = styled(motion.button)`
  background-color: ${(props) => props.theme.secondary};
  color: black;
  border: none;
  margin-top: 0;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 400;
  border-radius: 20px;

  -webkit-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
  -moz-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
  box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);

  &:focus {
    outline: none;
  }
`;
