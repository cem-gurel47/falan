type Props = {};

const MagazineHero = (props: Props) => {
  return (
    <section className="bg-[#FCF6ED] rounded-tl-xl rounded-bl-xl rounded-br-xl p-10 flex justify-between mt-12">
      <div>
        <h1 className="text-4xl  font-extralight text-[#6b4710] mb-3 tracking-wide">
          1. Sayi
        </h1>
        <h2 className="text-4xl font-light tracking-wide">Ekim 2023</h2>
        <p className="my-6 text-[#6b4710]  font-light">
          Falan Dergi ilk sayısıyla karşınızda!
        </p>
        <a href="/dergiler/4mPwNvLw8792jDNmtDNel2">
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
