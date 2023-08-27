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
      <div className=" grid grid-cols-5 py-12 gap-20">
        {magazines.items.map((magazine: Magazine) => (
          <MagazineCard key={magazine.sys.id} magazine={magazine} />
        ))}
      </div>
    </section>
  );
};

export default MagazineGrid;
