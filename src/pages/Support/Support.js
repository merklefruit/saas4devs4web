import React from "react";
import styled from "styled-components";
import Layout from "@components/layout/Layout";

import { Container, Button } from "@styles/global";
import Savings from "@assets/Savings";

const Support = () => {
  return (
    <Layout>
      <Container>
        <Hero>
          <div>
            <h1>
              This guide was made available for free and the external content is
              credited to the original authors.
            </h1>
            <h2>
              I'm Nicolas and I'm a robotics engineering student from Milan,
              Italy. If you wish to know more about me or read more stuff, check
              out my{" "}
              <a
                href="https://www.nicolasracchi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                website
              </a>
              .
            </h2>
            <hr />
            <h3>
              If you feel like this guide provided value for yourself or your
              company in some way and you're considering supporting me, you
              could sponsor me on GitHub.
            </h3>
            <a
              href="https://github.com/sponsors/nicolas-racchi"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Become a Sponsor on GitHub
              </Button>
            </a>
          </div>
        </Hero>
        <Illustration>
          <Savings />

          <Sponsors>
            <h2>Current & past Sponsors:</h2>
            <p>
              <a
                href="https://github.com/Inovatik"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Inovatik
              </a>
            </p>
          </Sponsors>
        </Illustration>
      </Container>
      <Container></Container>
    </Layout>
  );
};

export default Support;

const Hero = styled.div`
  margin-bottom: 60px;
  text-align: center;
  max-width: 850px;
  margin: 0 auto;

  h2 {
    font-family: "DM Sans";
    font-size: 1.4rem;
  }
  h3 {
    font-family: "DM Sans";
    font-size: 1.3rem;
  }
`;

const Illustration = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  margin-top: 50px;
  svg {
    margin: 0 auto;
    display: block;
    max-width: 400px;
  }
`;

const Sponsors = styled.div`
  @media (max-width: 700px) {
    margin-top: 40px;
    text-align: center;
  }

  p {
    font-size: 1.25rem;
  }
`;
