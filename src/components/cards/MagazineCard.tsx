import type { Magazine } from "@/types/magazine";

type Props = {
  magazine: Magazine;
};

const MagazineCard = ({ magazine }: Props) => {
  const { fields, sys } = magazine;
  return (
    <a href={`/dergiler/${sys.id}`}>
      <div className="flex flex-col">
        <img
          src={fields.coverImage.fields.file?.url as string}
          alt="magazine"
          className="w-full h-auto rounded-br-2xl mb-2 shadow-md"
        />
        <p className=" font-medium tracking-wider hover:underline underline-offset-2">
          Ocak 2023 <span className=" text-sm text-gray-500">#1</span>
        </p>
        <div className="flex items-baseline gap-1">
          <div className="w-2 h-2 bg-black"></div>
          <p className="text-xs text-gray-500 tracking-wider relative">
            {fields.name}
          </p>
        </div>
      </div>
    </a>
  );
};

export default MagazineCard;
