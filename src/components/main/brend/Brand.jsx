import  { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Data  from "../../../data/gold";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

const Brend = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    
  

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#f8f7f3]  py-[150px]">
      <div className="container flex flex-col md:flex-row w-full gap-[30px]">
        <div className=" md:w-1/3 w-full">
          <div className="flex justify-between">
            <h1 className="text-[30px] font-medium">Бренды</h1>
            <button className="px-5 py-3 hidden sm:block md:hidden font-semibold rounded-full border text-[14px] text-[#fff] bg-[#088269]">
              Сертификаты
            </button>
          </div>
          <p className="text-[#202020] text-[16px] pt-[10px]">
            Эксклюзивные поставщики
          </p>
        </div>
        <div className="h-[350px] md:w-2/3 w-full flex flex-col gap-[40px]">
          <div>
            <Slider ref={sliderRef} {...settings}>
              {Data.map((slide, index) => (
                <div
                  key={index}
                  className="w-[320px] border bg-[#f8f7f3]  rounded-lg"
                   onClick={() =>
                        navigate(`/proizvoditel/${slide.id}`)
                      }
                >
                  <div className="w-full h-[220px] bg-[#fff] flex items-center justify-center rounded-t-lg">
                    <img src={slide.image} alt={slide.title} className="" />
                  </div>
                  <div className="border-t-[1px]">
                    <h2 className="text-[#202020] text-[12px] sm:text-[15px] p-4  w-full sm:w-[80%]">
                      {slide.title}
                    </h2>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex sm:hidden md:flex justify-center md:justify-between  ">
            <div className="hidden md:flex gap-3 ml-3">
              <button
                className="p-[10px] rounded-full border flex items-center justify-center hover:border-[#07745E]"
                onClick={() => sliderRef.current.slickNext()}
              >
                <GoArrowLeft className="w-[22px] h-[22px] " />
              </button>
              <button
                className="p-[10px] rounded-full border flex items-center justify-center hover:border-[#07745E]"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <GoArrowRight className="w-[22px] h-[22px] " />
              </button>
            </div>
            <Link to={"/o-kompanii/certificate"} className="px-5 py-3  rounded-full font-semibold border text-[14px] text-[#F8F7F3] bg-[#088269] hover:bg-[#07745E]">
              Сертификаты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brend;
