import type { Blog } from "../../types/blog";
import ArticleCard from "../cards/ArticleCard";

type Props = {
  blogs: Blog[];
};

export default function AuthorsSection({ blogs }: Props) {
  if (blogs.length === 0) {
    return (
      <div className="text-center flex flex-col items-center justify-center py-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-bird"
        >
          <path d="M16 7h.01" />
          <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
          <path d="m20 7 2 .5-2 .5" />
          <path d="M10 18v3" />
          <path d="M14 17.75V21" />
          <path d="M7 18a6 6 0 0 0 3.84-10.61" />
        </svg>
        <h1 className="my-4">Gösterilecek yazi bulunamadi.</h1>
        <a
          className="bg-black border-2 mt-2 border-black p-3 rounded-md text-white text-center transition-all ease-in-out duration-150 hover:bg-white hover:text-black"
          href="/yazarlar"
        >
          Yazarlara dön
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-12 py-12 px-6 md:px-6 lg:px-12 xl:px-24">
      {blogs.map((blog) => (
        <ArticleCard key={blog.sys.id} blog={blog} />
      ))}
    </div>
  );
}
