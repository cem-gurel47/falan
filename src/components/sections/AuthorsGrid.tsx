import AuthorCard from "../cards/AuthorCard";
import { useStore } from "@nanostores/react";
import { authorFilter } from "@/store/store";

type Props = {};

export default function AuthorsSection(props: Props) {
  const $authorFilter = useStore(authorFilter);
  const data = [
    {
      id: "1",
      name: "John Doe",
      imageUrl: "https://avatars.dicebear.com/api/avataaars/2.svg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
      articleCount: 5,
    },
    {
      id: "2",
      name: "John Doe",
      imageUrl: "https://avatars.dicebear.com/api/avataaars/3.svg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
      articleCount: 5,
    },
    {
      id: "3",
      name: "John Doe",
      imageUrl: "https://avatars.dicebear.com/api/avataaars/4.svg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
      articleCount: 59,
    },
    {
      id: "4",
      name: "John Doe",
      imageUrl: "https://avatars.dicebear.com/api/avataaars/5.svg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
      articleCount: 59,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-12 py-12">
      {data
        .filter((author) =>
          author.name
            .toLocaleLowerCase("tr-TR")
            .includes($authorFilter.toLocaleLowerCase("tr-TR"))
        )
        .map((filteredAuthor) => (
          <AuthorCard key={filteredAuthor.id} author={filteredAuthor} />
        ))}
    </div>
  );
}
