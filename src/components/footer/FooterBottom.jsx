import Logo from "../../../public/Logo2.svg"
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Img1 from "../../../public/Icons/master.svg"
import Img2 from "../../../public/Icons/visa.svg"
import Img3 from "../../../public/Icons/mir.svg"





const FooterBottom = () => {
  return (
    <div className="bg-[#088269]">
      <div className="container py-5">
        <div className="flex justify-between border-t-2 border-t-[#F8F7F3] py-[20px] flex-wrap">
          <div className="w-[189px]">
            <img src={Logo} alt="" />
            <p className="text-[14px] text-[#F8F7F3] mt-[10px]">
              ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»
            </p>
          </div>
          <div className="w-[100px">
            <p className="font-bold text-[14px] text-[#F8F7F3] ">
              Мы в соцсетях
            </p>
            <div className="flex justify-between mt-[10px]">
              <Link
                to={"https://www.instagram.com/globalmed.uz"}
                className="p-[4px] rounded-md text-[#088269] bg-[#F8F7F3] "
              >
                <SlSocialVkontakte className="w-[22px] h-[22px] hover:text-[#1f5c33]" />
              </Link>
              <Link
                to={"https://t.me/Global_Malumot"}
                className="p-[4px] rounded-md text-[#088269] bg-[#F8F7F3] "
              >
                <FaTelegramPlane className="w-[22px] h-[22px]  hover:text-[#1f5c33] " />
              </Link>
              <Link
                to={
                  "https://api.whatsapp.com/message/DCG7YJSP4U4VI1?autoload=1&app_absent=0"
                }
                className="p-[4px] rounded-md text-[#088269] bg-[#F8F7F3]"
              >
                <FaWhatsapp className="w-[22px] h-[22px] hover:text-[#1f5c33]" />
              </Link>
            </div>
          </div>
          <div className="w-[170px] flex flex-col">
            <NavLink className="mb-[10px] text-[13px] text-[#F8F7F3] hover:text-[#BDDBC7]">
              Партнерская программа
            </NavLink>
            <NavLink className=" mb-[10px] text-[13px] text-[#F8F7F3] hover:text-[#BDDBC7]">
              Оптовые продажи
            </NavLink>
            <NavLink className="  text-[13px] text-[#F8F7F3] hover:text-[#BDDBC7]">
              Реквизиты
            </NavLink>
          </div>
          <div className="w-[220px] flex flex-col">
            <NavLink className="mb-[10px] text-[13px] text-[#F8F7F3] hover:text-[#BDDBC7]">
              Политика конфиденциальности
            </NavLink>
            <NavLink className=" mb-[10px] text-[13px] text-[#F8F7F3] hover:text-[#BDDBC7]">
              Условия соглашения
            </NavLink>
            <NavLink className="  text-[13px] text-[#F8F7F3] hover:text-[#BDDBC7]">
              Карта сайта
            </NavLink>
          </div>
          <div className="w-[220px] flex flex-col">
            <h4 className="mb-[10px] text-[13px] text-[#F8F7F3]">Способы оплаты</h4>
            <div className="flex gap-3">
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 pt-5 flex-wrap">
          <p className="w-[153px] text-[13px] text-[#F8F7F3]">
            © 2022 Медоборудование Все права защищены
          </p>
          <p className="w-[1060px] text-[13px]  text-[#76B8A9]">
            Информация на данном сайте носит справочный характер и не является
            публичной офертой, определяемой положениями Статьи 437 Гражданского
            кодекса Российской Федерации
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom