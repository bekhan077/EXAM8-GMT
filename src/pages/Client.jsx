import { Link, NavLink } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";

const Client = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="text-[16px] font-normal flex items-center gap-2 py-5">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[#7A7687] text-[20px]" />
          <NavLink to={"/pokupatel"} className="">
            Покупателям
          </NavLink>
        </div>
        <h1 className="text-[60px] py-20 text-center font-semibold ">
          This page not found
        </h1>
      </div>
    </div>
  );
}

export default Client;