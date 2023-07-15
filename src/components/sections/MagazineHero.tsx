import { ChevronRightIcon } from "lucide-react";

type Props = {};

const MagazineHero = (props: Props) => {
  return (
    <section className="bg-[#FCF6ED] rounded-tl-xl rounded-bl-xl rounded-br-xl p-10 flex flex-col relative mt-12">
      <div>
        <h1 className="text-4xl  font-extralight text-[#6b4710] mb-3 tracking-wide">
          1. Sayi
        </h1>
        <h2 className="text-4xl font-light tracking-wide">Agustos 2023</h2>
        <p className="my-12 text-[#6b4710]  font-light">
          Falan Dergi ilk sayisi
        </p>
        <button className="bg-black rounded-br-lg px-4 py-2 text-white hover:opacity-70">
          DERGIYI INCELE
        </button>
      </div>

      <img
        src={"https://picsum.photos/302/362/?random&dummyParam=7"}
        className="absolute bottom-0 right-12 w-1/4 rotate-6 scale-75 shadow-2xl"
        alt="magazine"
      />
      <img
        src={"https://picsum.photos/302/362/?random&dummyParam=8"}
        className="absolute bottom-0 right-32 w-1/4 -rotate-6 z-10 scale-90 shadow-2xl"
        alt="magazine"
      />
    </section>
  );
};

export default MagazineHero;
