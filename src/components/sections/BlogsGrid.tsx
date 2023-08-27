import type { Blog } from "../../types/blog";
import ArticleCard from "../cards/ArticleCard";

type Props = {
  blogs: Blog[];
};

export default function AuthorsSection({ blogs }: Props) {
  const data: Blog[] = blogs;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-12 py-12">
      {data.map((blog) => (
        <ArticleCard key={blog.sys.id} blog={blog} />
      ))}
    </div>
  );
}
