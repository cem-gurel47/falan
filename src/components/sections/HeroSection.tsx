import type { Content } from "@/types/content";

type Props = {
  content: Content;
  latestMagazineId: string;
};

const HeroSection = ({ content, latestMagazineId }: Props) => {
  const { fields } = content;
  const { heroDescription, heroTitle, heroImage } = fields;
  return (
    <section
      className="w-full h-96 mb-8 flex items-center p-12 sm:p-12 md:p-20 lg:p-24 relative"
      style={{
        backgroundImage: `url(${heroImage.fields.file?.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full text-center sm:text-left z-10">
        <h1 className="text-white font-medium text-4xl md:text-5xl mb-6">
          {heroTitle}
        </h1>
        <p className="text-gray-200">{heroDescription}</p>
        <a href={`/dergiler/${latestMagazineId}`}>
          <button className="mt-6 bg-white text-black px-4 py-2 rounded-md hover:bg-zinc-200 transition-all ease-in-out duration-150">
            Dergiyi Oku
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
