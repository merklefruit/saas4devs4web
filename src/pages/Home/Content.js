import styled from "styled-components";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { Main } from "@src/content/main";

const Content = () => {
  const renderers = {
    image: CustomImage,
    blockquote: CustomQuote,
    heading: CustomHeading,
  };

  return (
    <CustomContent>
      <ReactMarkdown
        source={Main}
        renderers={renderers}
        plugins={[gfm]}
        linkTarget="_blank"
        skipHtml={true}
      />
    </CustomContent>
  );
};

export default Content;

// Custom components for markdown rendering:

/******** IMAGES **********/
const CustomImage = ({ src, alt }) => {
  return <Im src={require(`@content/${src}`).default} alt={alt} />;
};
const Im = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;

  @media (max-width: 600px) {
    height: 200px;
  }
`;

/******** QUOTES **********/
const CustomQuote = ({ children }) => {
  return <Qu>{children}</Qu>;
};
const Qu = styled.div`
  font-style: italic;
  opacity: 0.9;
  border-left: 3px solid ${({ theme }) => theme.text};

  p {
    padding: 8px 0 8px 20px;
  }
`;

/******** HEADINGS (for custom scroll links) **********/
const CustomHeading = ({ level, children }) => {
  return (
    <>
      {level === 1 ? (
        <h1 id={children[0].props.value}>{children}</h1>
      ) : level === 2 ? (
        <h2 id={children[0].props.value}>{children}</h2>
      ) : level === 3 ? (
        <h3 id={children[0].props.value}>{children}</h3>
      ) : level === 4 ? (
        <h4 id={children[0].props.value}>{children}</h4>
      ) : level === 5 ? (
        <h5 id={children[0].props.value}>{children}</h5>
      ) : (
        <h6 id={children[0].props.value}>{children}</h6>
      )}
    </>
  );
};

const CustomContent = styled.div`
  font-size: 20px;
  margin-bottom: 100px;

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 850px) {
    font-size: 18px;
  }
`;
