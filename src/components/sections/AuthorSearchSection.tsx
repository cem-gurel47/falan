import { useStore } from "@nanostores/react";
import { authorFilter } from "@/store/store";

type Props = {};

const AuthorSearchCard = (props: Props) => {
  const $authorFilter = useStore(authorFilter);

  return (
    <div className="w-full flex flex-col items-center text-center bg-[#f1f1f1]  py-12 rounded-br-2xl rounded-bl-2xl">
      <div className="bg-black h-[4px] w-1/5" />
      <h1 className="text-2xl my-4 font-medium tracking-[0.25em]">
        YAZAR VE YORUMCULAR
      </h1>
      <div className="bg-black h-[4px] w-1/5" />
      <input
        className="mt-12 rounded-lg shadow-2xl w-1/2 max-w-xl py-3 px-6"
        placeholder="Yazar ya da yorumcu ara..."
        onChange={(e) => authorFilter.set(e.target.value)}
        value={$authorFilter}
      />
    </div>
  );
};

export default AuthorSearchCard;
