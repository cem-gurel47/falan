import type { Article } from "../../types/article";

type Props = {
  article: Article;
};

// const international = Intl.DateTimeFormat("tr-TR", {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// });

const CarouselItem = ({ article }: Props) => {
  const { imageUrl, id, title, date, readTime, category } = article;
  return (
    <div className="col-span-1 relative group">
      <img src={imageUrl} alt={title} className="h-full w-full" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 transition-all ease-in-out duration-500 bg-gradient-to-t from-black to-transparent flex flex-col justify-end px-4 py-2 group-hover:h-full group-hover:pb-16">
        <a href={`/kategori/${category}`}>
          <h2 className="text-gray-400 font-medium text-sm mb-2">{category}</h2>
        </a>
        <a
          href={`/yazilar/${id}`}
          className=" hover:underline under underline-offset-4 decoration-white"
        >
          <h1 className="text-white text-2xl font-bold">{title}</h1>
        </a>
        <div className="flex justify-center items-center py-8 gap-4 text-gray-400 text-xs font-medium">
          <p>{date}</p>
          <p>{readTime} dk.</p>
        </div>
        <a
          href={`/yazilar/${id}`}
          className="transition-all ease-in-out duration-500 text-white font-bold text-xs opacity-0 group-hover:opacity-100"
        >
          Yazının Devamı
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
