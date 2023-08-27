import AuthorCard from "../cards/AuthorCard";
import { useStore } from "@nanostores/react";
import { authorFilter } from "@/store/store";
import type { Author } from "@/types/author";

type Props = {
  authors: Author[];
  response: any;
};

export default function AuthorsSection({ authors }: Props) {
  const $authorFilter = useStore(authorFilter);

  console.log(authors);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-12 py-12">
      {authors
        .filter((author) =>
          author.fields.name
            .toLocaleLowerCase("tr-TR")
            .includes($authorFilter.toLocaleLowerCase("tr-TR"))
        )
        .map((filteredAuthor) => (
          <AuthorCard key={filteredAuthor.sys.id} author={filteredAuthor} />
        ))}
    </ul>
  );
}
