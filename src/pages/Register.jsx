import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";
import Select from '../components/main/select/Select';
import Data from "../data/kabinet"
import Order from '../components/cabinet/Order';
import Course from '../components/main/course/Course';
import FastQuestion from '../components/supply/FastQuestion';
import Question from '../components/main/question/Question';

const Register = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container pb-[20px]">
        <div className="flex items-center text-[16px] font-normal gap-2 py-5 ">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[#7A7687] text-[20px]" />
          <NavLink to={"/kabinet-podklyuch"} className="">
            Кабинеты под ключ
          </NavLink>
        </div>
        <div className="">
          <h1 className="font-medium pt-[80px] text-[48px]">
            Кабинеты под ключ
          </h1>
          <div className="grid grid-cols-2 gap-4 py-10 w-[full] ">
            {Data.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden border rounded-lg h-[380px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-[320px] "
                  onClick={() => navigate(`/kabinet-podklyuch/${item.id}`)}
                />
                <h3
                  className="text-[18px] font-medium py-[20px] px-5 bg-white"
                  onClick={() => navigate(`/kabinet-podklyuch/${item.id}`)}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Select />
      <Order />
      <FastQuestion />
      <Question />
      <Course />
    </div>
  );
}

export default Register;