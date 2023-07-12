import type { Author } from "../../types/author";

type Props = {
  author: Author;
};

const AuthorCard = ({ author }: Props) => {
  const { id, name, imageUrl, articleCount } = author;

  return (
    <div className="rounded-md bg-zinc-100 p-4 shadow-md flex flex-col items-center">
      <p>{name}</p>
      <p className="text-gray-400 text-xs">{articleCount} yazı</p>
      <img
        src={imageUrl}
        alt={name}
        width={0}
        height={0}
        className="rounded-lg my-4 w-full h-full"
      />
      <a
        className="bg-black w-full border-2 border-black p-4 rounded-md text-white text-center transition-all ease-in-out duration-150 hover:bg-white hover:text-black"
        href={`/yazarlar/${id}`}
      >
        Yazıları gör
      </a>
    </div>
  );
};

export default AuthorCard;
