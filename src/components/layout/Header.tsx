import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASURMENT_ID,
};

interface Props {
  pathname: string;
}

const MENU_ITEMS = [
  {
    name: "Dergiler",
    link: "/dergiler",
  },
  {
    name: "Yazılar",
    link: "/yazilar",
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
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }, []);

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
