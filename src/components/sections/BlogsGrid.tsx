import type { Article } from "../../types/article";
import ArticleCard from "../cards/ArticleCard";

type Props = {};

const author = {
  id: "1",
  name: "John Doe",
  imageUrl: "https://avatars.dicebear.com/api/avataaars/2.svg",
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
  articleCount: 5,
};

export default function AuthorsSection(props: Props) {
  const data: Article[] = [
    {
      id: "1",
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, blanditiis! Velit quaerat voluptatem minima culpa necessitatibus quidem dolorum beatae ipsum nesciunt nulla, doloremque quibusdam nemo amet atque ullam expedita alias.",
      imageUrl: "https://picsum.photos/400/400/?random&dummyParam=5",
      readTime: 5,
      date: "2021-01-01",
      category: "category",
      author: author,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, blanditiis! Velit quaerat voluptatem minima culpa necessitatibus quidem dolorum beatae ipsum nesciunt nulla, doloremque quibusdam nemo amet atque ullam expedita alias.",
    },
    {
      id: "2",
      title: "Lorem ipsum dolor,",
      imageUrl: "https://picsum.photos/400/400/?random&dummyParam=6",
      readTime: 5,
      date: "2021-01-01",
      category: "category",
      author: author,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, blanditiis! Velit quaerat voluptatem minima culpa necessitatibus quidem dolorum beatae ipsum nesciunt nulla, doloremque quibusdam nemo amet atque ullam expedita alias.",
    },
    {
      id: "3",
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, blanditiis! Velit quaerat voluptatem minima culpa necessitatibus quidem dolorum beatae ipsum nesciunt nulla, doloremque quibusdam nemo amet atque ullam expedita alias.",
      imageUrl: "https://picsum.photos/400/400/?random&dummyParam=7",
      readTime: 5,
      date: "2021-01-01",
      category: "category",
      author: author,
      content: "Lorem ipsum dolor",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-12 py-12">
      {data.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
