import styled from "styled-components";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { Main } from "@src/content/main";

const Content = () => {
  const renderers = {
    image: CustomImage,
    imageReference: CustomImage,
    blockquote: CustomQuote,
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

/******** IMAGE **********/
const CustomImage = ({ src, alt }) => {
  return <Im src={src} alt={alt} />;
};
const Im = styled.img``;

/******** QUOTE **********/
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

const CustomContent = styled.div`
  font-size: 20px;
  margin-bottom: 100px;
`;
