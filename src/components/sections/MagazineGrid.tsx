import MagazineCard from "../cards/MagazineCard";
import type { ContentfulResponse, Magazine } from "@/types/magazine";

type Props = {
  magazines: ContentfulResponse;
};

const MagazineGrid = ({ magazines }: Props) => {
  return (
    <section className="mt-12">
      <div className="inline-flex flex-col">
        <div className="h-[6px] bg-black w-1/2"></div>
        <h3 className="my-2 w-full tracking-[0.25em] text-2xl text-center">
          TÜM SAYILAR
        </h3>
        <div className="h-[6px] bg-black w-1/2"></div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 py-12 gap-20 ">
        {magazines.items.map((magazine: Magazine, index) => (
          <MagazineCard
            key={magazine.sys.id}
            magazine={magazine}
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default MagazineGrid;
