import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

type Props = {
  content: any;
};

const HTMLTextRenderer = ({ content }: Props) => {
  console.log(content);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(content),
      }}
    ></div>
  );
};

export default HTMLTextRenderer;
