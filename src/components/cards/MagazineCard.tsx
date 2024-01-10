import type { Magazine } from "@/types/magazine";

type Props = {
  magazine: Magazine;
  index: number;
};

const MagazineCard = ({ magazine, index }: Props) => {
  const { fields, sys } = magazine;
  return (
    <a href={`/dergiler/${sys.id}`} className="group">
      <div className="transition-all duration-150 ease-in-out flex flex-col group-hover:opacity-90">
        <img
          src={fields.coverImage.fields.file?.url as string}
          alt="magazine"
          className="w-full h-96 object-contain rounded-br-2xl mb-2 shadow-md"
        />
        <p className=" font-medium tracking-wider group-hover:underline underline-offset-2">
          {fields.name}
        </p>
        <div className="flex items-baseline gap-1">
          <div className="w-2 h-2 bg-black"></div>
          <span className=" text-sm text-gray-500">#{index}</span>
        </div>
      </div>
    </a>
  );
};

export default MagazineCard;
