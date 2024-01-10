import type { Content } from "@/types/content";
import { useStore } from "@nanostores/react";
import { content, latestMagazineId } from "@/store/store";

type Props = {};

const MagazineHero = (props: Props) => {
  const $content = useStore(content);
  const $latestMagazineId = useStore(latestMagazineId);
  return (
    <section className="bg-[#FCF6ED] rounded-tl-xl rounded-bl-xl rounded-br-xl p-10 flex justify-between mt-12">
      <div>
        <h1 className="text-4xl  font-extralight text-[#6b4710] mb-3 tracking-wide">
          {$content?.fields.magazinePagePrimaryTitle}
        </h1>
        <h2 className="text-4xl font-light tracking-wide">
          {$content?.fields.magazinePageSecondaryText}
        </h2>
        <p className="my-6 text-[#6b4710]  font-light">
          {$content?.fields.magazinePageDescription}
        </p>
        <a href={`/dergiler/${$latestMagazineId}`}>
          <button className="bg-black rounded-br-lg px-4 py-2 text-white hover:opacity-70">
            Dergiyi incele
          </button>
        </a>
      </div>

      {/* <img
        src={"https://picsum.photos/302/362/?random&dummyParam=7"}
        className="hidden md:block h-fit obje shadow-2xl"
        alt="magazine"
      /> */}
    </section>
  );
};

export default MagazineHero;
