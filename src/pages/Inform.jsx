import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import Order from '../components/cabinet/Order';
import Img from "../../public/assets/cabinet/cabinet.png"
import Consult from "../components/Garantii/Consult"
import FastQuestion from '../components/supply/FastQuestion';

const Inform = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="text-[16px] gap-2 py-5 font-normal flex items-center">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[#7A7687] text-[20px]" />
          <Link to={"/kabinet-podklyuch"} className="text-[#7A7687]">
            Кабинет под ключ
          </Link>
          <RiArrowRightSLine className="text-[#7A7687] text-[20px] " />
          <Link to={"/kabinet-podklyuch"} className="text-[#7A7687]">
            Реанимация
          </Link>
          <span className="text-[#7A7687]"></span>
          <NavLink to={"/kabinet-podklyuch/:id"} className="">
            Палата реанимации и интенсивной терапии
          </NavLink>
        </div>
        <div className="py-10">
          <h1 className="font-medium py-5 w-[70%] text-[48px]">
            Комплексное оснащение палаты реанимации и интенсивной терапии
          </h1>
          <img src={Img} alt="" />
          <div className=" flex justify-end pb-[15px]">
            <p className="text-[16px] font-medium w-[50%] mt-[30px] ">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров
              и ЛОР комбайнов. Переход на полностью цифровую платформу
              при диагностике и лечении заболеваний также стал серьёзным
              испытанием для большинства больниц и частных клиник.{" "}
            </p>
          </div>
          <div className="flex justify-end">
            <span className="text-[14px] font-medium w-[50%] text-[#07745E]">
              Скачать каталог "Стандарты оснащения отделений"
            </span>
          </div>
        </div>
      </div>
      <Order />
      <FastQuestion />
      <Consult />
    </div>
  );
}

export default Inform;