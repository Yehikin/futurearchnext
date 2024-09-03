export default function NavBar() {
  return (
    <nav className="h-[70px] mb-12 fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center border-r-[32] backdrop-blur">
      <ul className="header__menu flex justify-around">
        <li className="link_main">Главная</li>
        <li className="link_project">Проекты</li>
        <li className="link_contcts">Контакты</li>
        <li className="link_about">О нас</li>
      </ul>
    </nav>
  );
}
