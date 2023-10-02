import type { Blog } from "@/types/blog";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { convert } from "html-to-text";

type Props = {
  blog: Blog;
};

const CATEGORY_COLOR = {
  Felsefe: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  Spor: "bg-green-100 text-green-800 hover:bg-green-200",
  Edebiyat: "bg-purple-100 text-purple-800 hover:bg-purple-200",
  Psikoloji: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  Oyun: "bg-red-100 text-red-800 hover:bg-red-200",
  Sinema: "bg-pink-100 text-pink-800 hover:bg-pink-200",
  Bilim: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
  Öykü: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  Ekonomi: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
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
          <div className="mt-6 mb-4 text-xs">
            <a
              href={`/kategoriler/${category}`}
              className={`relative z-10 rounded-full  px-3 py-1.5 font-medium ${CATEGORY_COLOR[category]}}`}
            >
              {category}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold line-clamp-2 leading-6 md:min-h-[48px] text-gray-900 group-hover:text-gray-600 hover:underline under underline-offset-4 decoration-black">
              <a href={`/yazilar/${id}`}>
                <span className="absolute inset-0" />
                {title}
              </a>
            </h3>
            <article className="line-clamp-3 text-sm leading-6 md:min-h-[72px] text-gray-600">
              {convert(documentToHtmlString(content), {
                wordwrap: 130,
              })}
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
                <a href={`/yazarlar/${author.sys.id}`}>
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
