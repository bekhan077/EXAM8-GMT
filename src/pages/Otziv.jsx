import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { Rate } from "antd";
import Img from "../../public/assets/otziv/icon.svg";
import Consult from "../components/Garantii/Consult"
import cardData from "../data/otziv";

const ITEMS_PER_PAGE = 6;

const Otziv = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const currentData = cardData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(cardData.length / ITEMS_PER_PAGE);

  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="pt-[20px] text-[16px] font-normal flex items-center gap-2 pb-[40px] ">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/otziv"} className="">
            Отзывы
          </NavLink>
        </div>
        <h1 className="text-[48px] font-medium">Отзывы</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-[40px]">
          {currentData.map((card) => (
            <div
              key={card.id}
              className="card bg-white p-[25px] border rounded-xl"
            >
              <div className="flex justify-between ">
                <div className="flex items-center gap-4 justify-between ">
                  <img src={Img} alt="" />
                  <div className="flex flex-col">
                    <h4 className="text-[18px] font-semibold">
                      {card.company}
                    </h4>
                    <span className="text-[12px] text-[#7A7687] mb-[8px]">
                      {card.director}, Директор
                    </span>
                    <Rate disabled defaultValue={card.rating} />
                  </div>
                </div>
                <span className="text-[12px]">{card.date}</span>
              </div>
              <p className="mt-[20px] text-[16px] font-medium text-[#7A7687]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 border rounded ${
                index + 1 === currentPage ? "bg-gray-300" : "bg-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Consult/>
    </div>
  );
};

export default Otziv;
