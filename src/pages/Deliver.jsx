import PositiveSide from '../components/supply/PositiveSide';
import Course from "../components/main/course/Course"
import { Link, NavLink } from 'react-router-dom';
import Document from '../components/supply/Document';
import FastQuestion from '../components/supply/FastQuestion';
import Concultation from '../components/supply/Concultation';
import MapPunktVidacha from "../components/Map/MapPunktVidacha";
import MapPostroitMashrut from '../components/Map/MapPostroitMashrut';
import { RiArrowRightSLine } from "react-icons/ri";

const Dostavka = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex  text-[16px] font-normal items-center gap-2 py-5">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/dostavka"} className="">
            Доставка
          </NavLink>
        </div>
        <h1 className="font-medium text-[48px] pt-[80px] pb-[40px]">
          Информация о доставке
        </h1>
      <MapPunktVidacha/>
        <div className="ml-[50%] w-[50%] ">
          <p className="text-[16px] font-medium">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов. Переход на полностью цифровую платформу
            при диагностике и лечении заболеваний также стал серьёзным
            испытанием для большинства больниц и частных клиник.{" "}
          </p>
        </div>
      </div>
      <PositiveSide />
      <div className="container pt-10 pb-[150px] flex justify-between">
        <div className="">
          <h2 className="w-[50%] text-[30px] font-medium pb-[25px]">
            Правила получения товара в пункте выдачи
          </h2>
          <p className="w-[70%] font-medium text-[16px]">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов.
          </p>
        </div>
        <div className="">
          <div className="py-[20px] border-t-[1px] border-[#D5D1E1]">
            <h4 className="text-[18px] font-medium">Подготовить документы</h4>
            <p className="text-[16px] font-medium pt-[12px] text-[#7A7687]">
              Предварительно ознакомиться с условиями выдачи грузов на сайте и
              подготовьте нужные документы
            </p>
          </div>
          <div className="py-[20px] border-t-[1px] border-[#D5D1E1]">
            <h4 className="text-[18px] font-medium">Проверка упаковки</h4>
            <p className="text-[16px] font-medium pt-[12px] text-[#7A7687]">
              При получении необходимо внимательно осмотреть упаковку груза на
              наличие механических повреждений и нарушений целостности упаковки
            </p>
          </div>
          <div className="py-[20px] border-t-[1px] border-[#D5D1E1]">
            <h4 className="text-[18px] font-medium">Проверка товара</h4>
            <p className="text-[16px] font-medium pt-[12px] text-[#7A7687]">
              Вскрыть каждую упаковку и проверите товар по количеству согласно
              накладной поставщика и на наличие повреждений товара внутри тары
            </p>
          </div>
        </div>
      </div>
      <FastQuestion />
      <div className="container py-[150px]">
        <div className="flex justify-between mb-[15px] items-center">
          <h2 className="w-[50%] text-[30px] font-medium">
            Вы сможете забрать оборудование{" "}
            <span className="text-[#088269]">самостоятельно</span> из нашего
            офиса
          </h2>
          <div className="flex justify-between gap-3 w-[50%]">
            <div className="w-full border rounded-lg p-[25px]">
              <h4 className="text-[18px] font-semibold mb-[20px]">Контакты</h4>
              <p className="text-[#7A7687] text-medium text-[16px]">
                +7 (000) 000-00-00
              </p>
              <p className="text-[#7A7687] text-medium text-[16px]">
                info@mail.ru
              </p>
            </div>
            <div className="w-full border rounded-lg p-[25px]">
              <h4 className="text-[18px] font-semibold mb-[20px]">Контакты</h4>
              <p className="text-[#7A7687] text-medium text-[16px]">
                +7 (000) 000-00-00
              </p>
              <p className="text-[#7A7687] text-medium text-[16px]">
                info@mail.ru
              </p>
            </div>
          </div>
        </div>
       <MapPostroitMashrut/>
      </div>

      <Document />
      <Concultation />
      <Course />
    </div>
  );
}

export default Dostavka