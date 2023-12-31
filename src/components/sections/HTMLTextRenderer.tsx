import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useEffect } from "react";
import contentfulManagement from "contentful-management";

const { createClient } = contentfulManagement;

const client = createClient({
  accessToken: import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const spaceId = import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID;
const environmentId = "master";

type Props = {
  content: any;
  blogId: string;
};

const HTMLTextRenderer = ({ content, blogId, readCount }: Props) => {
  useEffect(() => {
    // update the readCount to readCount+1

    const updateReadCount = async () => {
      const space = await client.getSpace(spaceId);
      const environment = await space.getEnvironment(environmentId);
      const entry = await environment.getEntry(blogId);
      entry.fields.readCount = {
        "en-US": entry.fields.readCount["en-US"] + 1,
      };

      await entry.update();
    };

    updateReadCount();
  }, []);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(content),
      }}
    ></div>
  );
};

export default HTMLTextRenderer;
