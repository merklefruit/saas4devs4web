import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-scroll";

const TocMobile = () => {
  const [coreKnowledge, setCoreKnowledge] = useState(false);
  const [buildingProcess, setBuildingProcess] = useState(false);
  const [faq, setFaq] = useState(false);
  const [landingPage, setLandingPage] = useState(false);
  const [tools, setTools] = useState(false);

  return (
    <TocMob>
      <h1>Table of Contents</h1>
      <hr />
    </TocMob>
  );
};

export default TocMobile;

const TocMob = styled.div`
  color: ${({ theme }) => theme.text};

  hr {
    border: 1px solid ${({ theme }) => theme.tertiary};
  }
`;
