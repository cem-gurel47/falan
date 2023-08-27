import type { Blog } from "@/types/blog";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { Document } from "@contentful/rich-text-types";

type Props = {
  blog: Blog;
};

const ArticleCard = ({ blog }: Props) => {
  const { fields, sys } = blog;

  const { title, content, category, image, author, readTimeAsMinutes } =
    fields!;
  const { id, createdAt } = sys;
  return (
    <article className="flex flex-col items-start justify-between">
      <a
        href={`/yazilar/${id}`}
        className="w-full"
        aria-label={`Su blogu okuyun:${title}`}
      >
        <div className="relative w-full">
          <img
            src={image.fields!.file!.url as string}
            alt={title}
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl flex-1">
          <div className="mt-8  text-xs">
            <a
              href={`/kategori/${category}`}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {category}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold line-clamp-2 leading-6 md:min-h-[48px] text-gray-900 group-hover:text-gray-600 hover:underline under underline-offset-4 decoration-black">
              <a href={`/yazi/${id}`}>
                <span className="absolute inset-0" />
                {title}
              </a>
            </h3>
            <article
              // set:html={documentToHtmlString(item.fields.content)}
              className="mt-5 line-clamp-3 text-sm leading-6 md:min-h-[72px] text-gray-600"
            >
              {documentToHtmlString(content)}
            </article>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img
              src={author.fields!.image!.fields!.file!.url as string}
              alt={author.fields!.image!.fields!.description as string}
              className="h-10 w-10 rounded-full bg-gray-100 object-cover"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href={`/yazar/${author.sys.id}`}>
                  <span className="absolute inset-0" />
                  {author.fields.name}
                </a>
              </p>
              <div className="flex gap-8">
                <time dateTime={createdAt} className="text-gray-500">
                  {new Date(createdAt).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p className="text-gray-600">{readTimeAsMinutes} dk.</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArticleCard;
