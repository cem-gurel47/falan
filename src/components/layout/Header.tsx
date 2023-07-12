interface Props {
  pathname: string;
}

const MENU_ITEMS = [
  {
    name: "Dergi",
    link: "/dergi",
  },
  {
    name: "Yazarlar",
    link: "/yazarlar",
  },
  {
    name: "İletişim",
    link: "/iletisim",
  },
];

const Header = ({ pathname }: Props) => {
  return (
    <header className="w-full bg-white">
      <div className="h-10 bg-black" />
      <div className="flex justify-center items-center py-6 border-b-2 border-b-gray-200 mx-4 sm:mx-4 md:mx-12 lg:mx-24">
        <a href={"/"} className="text-black font-extrabold text-8xl">
          Falan
        </a>
      </div>
      <nav className="flex justify-center items-center py-4">
        <ul className="flex justify-center items-center">
          {MENU_ITEMS.map((item) => (
            <li key={item.name} className="mx-4">
              <a
                href={item.link}
                className={`font-medium transition-all ease-out duration-150 hover:text-red-600 ${
                  pathname === item.link && "text-red-600"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
