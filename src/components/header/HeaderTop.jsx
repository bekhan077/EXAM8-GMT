import { NavLink } from "react-router-dom"

const HeaderTop = () => {
  return (
    <div className="bg-[#F8F7F3] border-b-[1px] border-[#E5E2EE]">
      <div className="container  lg:flex justify-between gap-5 items-center sm:flex hidden">
        <ul className="flex items-center gap-5">
          <NavLink to={"/o-kompanii"} className="text-[13px] text-[#7A7687] hover:text-[#088269]">
            О компании
          </NavLink>
          <NavLink to={"/dostavka"} className="text-[13px] text-[#7A7687] hover:text-[#088269]">
            Доставка
          </NavLink>
          <NavLink to={"/oplata"} className="text-[13px] text-[#7A7687] hover:text-[#088269]">
            Оплата
          </NavLink>
          <NavLink to={"/garantii"} className="text-[13px] text-[#7A7687] hover:text-[#088269]">
            Гарантии
          </NavLink>
          <NavLink to={"/blog"} className="text-[13px] text-[#7A7687] hover:text-[#088269]">
            Блог
          </NavLink>
        </ul>
        <ul className="flex items-center gap-10 py-2">
          <li className="text-[13px] text-[#7A7687]">info@mail.ru</li>
          <li className="text-[13px] text-[#7A7687]">
            г. Москва, ул. Московская, д. 35
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop