import MagazineCard from "../cards/MagazineCard";

const MagazineGrid = () => {
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
        {new Array(20).fill(0).map((_, index) => (
          <MagazineCard
            key={index}
            magazine={{
              id: index.toString(),
              title: "FALAN DERGİ",
              coverUrl: `https://picsum.photos/302/362/?random&dummyParam=${index}`,
              date: new Date(),
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default MagazineGrid;
