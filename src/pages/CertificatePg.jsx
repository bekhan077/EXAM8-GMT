import { Link, NavLink } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { RiArrowRightSLine } from "react-icons/ri";
import { Collapse } from "antd";
import Consult from "../components/Garantii/Consult";
import Catalog from "../components/main/catalog/Catalog"



const text = (
  <>
    <div className="text-[#088269] py-4 text-[14px] font-medium flex flex-col space-y-2">
      <p>
        Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября
        2015 г.
      </p>
      <p>Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.</p>
      <p>Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г</p>
      <p>
        Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.
      </p>
      <p>Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года</p>
      <p>Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.</p>
      <p>Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.</p>
      <p>Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.</p>
      <p>Гигрометры ВИТ Свидетельство об утверждении</p>
      <p>Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017 г.</p>
      <p> Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.</p>
      <p>Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018 г.</p>
      <p>Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18 марта 2020 г.</p>
      <p>Емкости-контейнеры РУ № ФСР 2012/13095 ч.1</p>
      <p>Электроды медицинские РУ № ФСЗ 2012/12612</p>
      <p>Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая 2012 г.</p>
      <p>
        Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ 2011/11287 от 27
        декабря 2011 г.
      </p>
      <p>Термометр медицинский РУ № ФСЗ 2011/10572</p>
      <p>
        Мундштуки картонные и адаптеры РУ № ФСР 2012/13317 от 27 августа 2019 г.
      </p>
      <p>
        Мундштуки картонные одноразовые РУ № ФСР 2012/13607 от 13 февраля 2018
        г.
      </p>
      <p>
        Анализатор паров этанола Alcotest РУ № РЗН 2016/5237 от 13 января 2017
        г.
      </p>
    </div>
  </>
);

const items = [
  {
    key: "1",
    label: (
      <span className="ml-[-12px] text-[18px] font-semibold ">
        Медицинские инструменты
      </span>
    ),
    children: text,
  },
  {
    key: "2",
    label: (
      <span className="ml-[-12px] text-[18px] font-semibold">
        Материалы для гинекологии и урологии
      </span>
    ),
    children: text,
  },
  {
    key: "3",
    label: (
      <span className="ml-[-12px] text-[18px] font-semibold">
        Материалы для инъекционных процедур
      </span>
    ),
    children: text,
  },
  {
    key: "4",
    label: (
      <span className="text-[18px] ml-[-12px] font-semibold ">
        Перевязочные материалы
      </span>
    ),
    children: text,
  },
];

const CertificatePg = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex items-center pt-[20px] text-[16px] font-normal gap-2 pb-[40px]">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <Link to={"/o-kompanii"} className="text-[#7A7687]">
            О компании
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/o-kompanii/certificate"} className="">
            Сертификаты
          </NavLink>
        </div>
        <div className="pb-[100px] pt-[40px] flex justify-between ">
          <div>
            <h2 className=" text-[48px] font-medium sm:mb-[30px] ">
              Сертификаты
            </h2>
          </div>
          <Collapse
            accordion
            items={items}
            bordered={false}
            expandIcon={({ isActive }) => (
              <div className="border rounded-full border-[#E1DFE7] p-2 active:bg-[#088269] absolute right-4 top-2 ">
                <PlusOutlined
                  rotate={isActive ? 45 : 0}
                  className="w-[15px] h-[15px] active:text-[white] text-black text-[20px] "
                />
              </div>
            )}
            className="w-[50%] border-none h-full bg-transparent "
          />
        </div>
      </div>
      <Catalog/>
      <Consult/>
    </div>
  );
};

export default CertificatePg;
