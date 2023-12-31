import type { Magazine } from "@/types/magazine";

type Props = {
  magazine: Magazine;
  index: number;
};

const MagazineCard = ({ magazine, index }: Props) => {
  const { fields, sys } = magazine;
  return (
    <a href={`/dergiler/${sys.id}`}>
      <div className="flex flex-col">
        <img
          src={fields.coverImage.fields.file?.url as string}
          alt="magazine"
          className="w-full h-96 object-cover rounded-br-2xl mb-2 shadow-md"
        />
        <p className=" font-medium tracking-wider hover:underline underline-offset-2">
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
