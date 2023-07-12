import type { Article } from "@/types/article";

type Props = {
  article: Article;
};

const ArticleCard = ({ article }: Props) => {
  const { id, imageUrl, title, content, readTime, date, category, author } =
    article;
  return (
    <article className="flex flex-col items-start justify-between">
      <a href={`/yazilar/${id}`} className="w-full">
        <div className="relative w-full">
          <img
            src={imageUrl}
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
              <a href={`/yazi/${article.id}`}>
                <span className="absolute inset-0" />
                {title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 md:min-h-[72px] text-gray-600">
              {content}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img
              src={author.imageUrl}
              alt={author.name}
              className="h-10 w-10 rounded-full bg-gray-100"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href={`/yazar/${author.id}`}>
                  <span className="absolute inset-0" />
                  {article.author.name}
                </a>
              </p>
              <div className="flex gap-8">
                <time dateTime={date} className="text-gray-500">
                  {new Date(date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p className="text-gray-600">{readTime} dk.</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArticleCard;
