import { Link, NavLink } from 'react-router-dom';
import Sale from "../components/sale/Sale"
import { GoChevronRight } from "react-icons/go";
import Cabinet from '../components/main/complex/Cabinet';
import CategoryProduct from '../components/productComp/CategoryProduct';
import Brend from '../components/main/brend/Brand';
import Consult from "../components/Garantii/Consult"
import Course from '../components/main/course/Course';
import { RiArrowRightSLine } from "react-icons/ri";

const SalePage = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container pb-[50px]">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/aktsiya"} className="">
            Акции
          </NavLink>
        </div>
        <div className="my-10">
          <div className="flex justify-between gap-4">
            <div className="w-[25%] h-[50%]">
              <div className="border rounded-xl  px-4">
                <h3 className="flex justify-between items-center py-2  border-b-[1px] border-[#E5E2EE]">
                  Категории
                </h3>
                <p className="flex justify-between items-center py-2">
                  Группы товаров <GoChevronRight />
                </p>
                <p className="flex justify-between items-center py-2">
                  Мониторы <GoChevronRight />
                </p>
                <p className="flex justify-between items-center py-2">
                  Лампы <GoChevronRight />
                </p>
                <p className="flex justify-between items-center py-2">
                  Кровати <GoChevronRight />
                </p>
                <p className="flex justify-between items-center py-2">
                  Рентгены <GoChevronRight />
                </p>
              </div>
            </div>
            <Sale />
          </div>
        </div>
      </div>
      <Cabinet />
      <CategoryProduct />
      <Brend />
      <Consult />
      <Course />
    </div>
  );
}

export default SalePage