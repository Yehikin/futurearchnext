import { EnumPage } from "@/components/App/App";
import clsx from "clsx";

interface INavBar {
  handlePageChange: (page: EnumPage) => void;
  clickProjects: boolean;
}

export default function NavBar({ handlePageChange, clickProjects }: INavBar) {
  return (
    <nav className="h-[70px] mb-12 fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center rounded-full backdrop-blur max-w-[600px] w-full px-4 sm:px-6 lg:px-8  z-50">
      <ul
        className={clsx(
          "header__menu flex justify-around items-center mx-3 w-full",
          `${clickProjects ? "text-black" : "text-white"}`
        )}
      >
        <li
          onClick={() => handlePageChange(EnumPage.Home)}
          className="link_main select-none font-medium hover:scale-105 hover:font-semibold duration-300 transition linear"
        >
          ГЛАВНАЯ
        </li>
        <li
          onClick={() => handlePageChange(EnumPage.Projects)}
          className="link_project select-none font-medium hover:scale-105 hover:font-semibold duration-300 transition linear"
        >
          ПРОЕКТЫ
        </li>
        <li
          onClick={() => handlePageChange(EnumPage.Contacts)}
          className="link_contcts select-none font-medium hover:scale-105 hover:font-semibold duration-300 transition linear"
        >
          КОНТАКТЫ
        </li>
        <li
          onClick={() => handlePageChange(EnumPage.About)}
          className="link_about select-none font-medium hover:scale-105 hover:font-semibold duration-300 transition linear"
        >
          О НАС
        </li>
      </ul>
    </nav>
  );
}
