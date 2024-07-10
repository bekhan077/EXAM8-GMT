import { useRef, useState } from "react";
import Slider from "react-slick";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Data from "../../data/katalog";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiAlignItemBottomLine } from "react-icons/ri";

const RecommendProduct = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [compare, setCompare] = useState([]);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const handleFavoriteToggle = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  const handleCompareToggle = (id) => {
    setCompare((prevCompare) =>
      prevCompare.includes(id)
        ? prevCompare.filter((compId) => compId !== id)
        : [...prevCompare, id]
    );
  };

  return (
    <div className="bg-[#f8f7f3]  pb-[550px] pt-[50px] ">
      <div className=" container flex flex-col md:flex-row w-full gap-[30px]">
        <div className=" md:w-1/3 w-full ">
          <div className="flex justify-between">
            <div className="">
              <h2 className="mb-[20px] text-[30px] font-medium">
                Рекомендуемые <br />товары
              </h2>
            </div>

            <div className="flex sm:gap-2 sm:h-[40px]">
              <button className="px-5 py-3 hidden sm:px-2 sm:py-[4px] font-medium sm:text-[14px] sm:block md:hidden  rounded-full border text-[14px] text-[#fff] bg-[#088269]">
                Бесплатная консультация
              </button>
              <button className="sm:px-2 sm:py-[4px] font-medium sm:text-[14px]  px-5 py-3 hidden sm:block md:hidden  rounded-full border text-[14px] text-[#fff] bg-[#088269]">
                Все товары
              </button>
            </div>
          </div>
        </div>

        <div className="h-[330px] md:w-2/3 w-full flex flex-col gap-[40px]">
          <div className="">
            <Slider ref={sliderRef} {...settings}>
              {Data.map((item, index) => (
                <div
                  key={index}
                  className="w-[320px] border-[1px] bg-[#f8f7f3]  rounded-lg transform "
                >
                  {item.label && (
                    <span
                      className={`absolute top-2 left-2 px-2 py-1 rounded-full text-[#F8F7F3] font-medium text-xs ${item.labelClass}`}
                    >
                      {item.label}
                    </span>
                  )}
                  
                  <div className="w-full h-[250px]  flex items-center justify-center rounded-lg">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-contain rounded-t-xl bg-white p-10 cursor-pointer "
                      onClick={() =>
                        navigate(`/katalog/laboratornoe/${item.id}`)
                      }
                    />
                  </div>

                  <div className="">
                    <RiAlignItemBottomLine
                      className={`absolute top-2 right-10  text-2xl cursor-pointer ${
                        compare.includes(item.id)
                          ? "text-[#088269]"
                          : "text-[#202020]"
                      }`}
                      onClick={() => handleCompareToggle(item.id)}
                    />
                    <IoIosHeartEmpty
                      className={`absolute top-2 right-2 text-2xl cursor-pointer ${
                        favorites.includes(item.id)
                          ? "text-[#088269]"
                          : "text-[#202020]"
                      }`}
                      onClick={() => handleFavoriteToggle(item.id)}
                    />
                  </div>

                  <div
                    className="p-4"
                    onClick={() => navigate(`/katalog/laboratornoe/${item.id}`)}
                  >
                    <h3 className="pr-[80px] text-[18px] font-semibold mb-2 text-[#202020]">
                      {item.title}
                    </h3>
                    <div className="py-4">
                      <span className="block text-[#7A7687] text-[14px] font-normal ">
                        {item.desc}
                      </span>

                      <p className="text-[16px] font-normal text-[#7A7687]">
                        {item.position}
                      </p>
                    </div>
                    <p className="text-[16px] font-medium text-[#202020]">
                      {item.price}
                    </p>
                  </div>
                  <div className="p-4">
                    <button className="w-[100%] transition duration-300 flex justify-center items-center px-4 py-[8px] rounded-full font-semibold text-[16px] text-[#088269]  border border-[#D5D1E1] hover:bg-green-600 hover:text-white">
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className=" flex sm:hidden md:flex justify-center md:justify-between">
            <div className="hidden md:flex gap-3 ml-3 ">
              <div
                onClick={() => sliderRef.current.slickNext()}
                className="p-[10px] rounded-full border flex items-center justify-center"
              >
                <GoArrowLeft className="w-[25px] h-[25px] hover:text-green-600" />
              </div>
              <div
                onClick={() => sliderRef.current.slickPrev()}
                className="p-[10px] rounded-full border flex items-center justify-center"
              >
                <GoArrowRight className="w-[25px] h-[25px] hover:text-green-600" />
              </div>
            </div>

            <div className=" flex  gap-4 h-[40px]  md:gap-4 justify-items-end ">
              <button className="px-4 py-[4px] text-[14px] transition duration-300 flex justify-center items-center md:px-6 lg:py-[11px] rounded-full font-semibold lg:text-[16px] text-[#088269]  border border-[#D5D1E1] ">
                Бесплатная консультация
              </button>
              <button className=" px-4 py-[4px] text-[14px] transition duration-300 flex justify-center items-center md:px-6 lg:py-[11px] rounded-full font-semibold lg:text-[16px] text-white bg-[#088269] border-none ">
                Все товары
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendProduct;
