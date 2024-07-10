import { Link, NavLink } from 'react-router-dom';
import Consult from '../components/Garantii/Consult';
import GarantiiService from '../components/Garantii/GarantiService';
import { RiArrowRightSLine } from "react-icons/ri";
import Warning from '../components/Garantii/Warning';

const Garantii = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="flex font-normal items-center gap-2 py-5 text-[16px]">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/garantii"} className="">
            Гарантии
          </NavLink>
        </div>
        <div className="pt-[50px] w-[50%]">
          <h1 className="text-[48px] font-medium py-[40px]">Гарантии</h1>
          <p className="font-medium text-[16px] pb-[20px]">
            Регулярное сервисное обслуживание медицинской техники – залог ее
            надежной, беспроблемной эксплуатации, а также продолжительного срока
            службы. Периодическая диагностика позволяет выявить любые
            неисправности, отклонения от нормального рабочего режима на самых
            ранних сроках. Это предотвратит серьезные поломки, приводящие к
            дорогостоящим ремонтам.{" "}
          </p>
          <p className="font-medium text-[16px] pb-[10px]">
            Являясь авторизованным дилером брендов, продукция которых
            представлена в каталоге, компания:
          </p>
          <ol className="text-[16px] font-medium list-decimal px-10">
            <li>
              Предоставляет услуги сервисного и гарантийного обслуживания.
            </li>
            <li>
              Осуществляет поставку оригинальных запчастей и комплектующих.
            </li>
            <li>
              Обучает медицинский персонал работе с современным
              высокотехнологичным оборудованием.
            </li>
          </ol>
          <p className="font-medium text-[16px] pt-[20px]">
            Глобал Медикал Трейд является надежным поставщиком медицинского
            оборудовани, предлагая своим клиентам качественную продукцию по
            лучшей цене. Наша компания гарантирует всем клиентам возможность
            воспользоваться услугами квалифицированных мастеров в установке,
            пуско-наладке, сервисном и техническом обслуживании приобретенного
            оборудования.
          </p>
        </div>
      </div>
      <GarantiiService />
      <Warning />
      <Consult />
    </div>
  );
}

export default Garantii;