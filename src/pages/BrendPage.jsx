import { Link, NavLink } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";
import FastQuestion from '../components/supply/FastQuestion';
import Brend from '../components/main/brend/Brand';
import Question from '../components/main/question/Question';
import Img2 from "../../public/assets/brend/img2.png";
import Img1 from "../../public/assets/brend/img1.png"

const BrendPage = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <div className="gap-2 py-5 text-[16px] font-normal flex items-center ">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[#7A7687] text-[20px] " />
          <Link to={"/proizvoditel"} className="text-[#7A7687]">
            Производители
          </Link>
          <RiArrowRightSLine className="text-[#7A7687] text-[20px] " />
          <NavLink to={"/proizvoditel"} className="">
            Медецинское оборудование Draeger
          </NavLink>
        </div>
        <h1 className="font-medium pt-[100px] text-[48px] ">
          Медецинское оборудование Draeger
        </h1>
        <div className="gap-2 py-5 flex justify-between items-center">
          <div className="w-[50%]">
            <img src={Img1} alt="" className="object-cover w-full" />
          </div>

          <div className="w-[50%]">
            <img src={Img2} alt="" className="object-cover w-full" />
          </div>
        </div>
        <div className="grid-cols-1 gap-4 w-[50%] ml-[50%] my-4 grid ">
          <p className="font-medium text-[16px]">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в Российской Федерации и соседних странах столкнулись
            с вызовом, требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии до ультразвуковых сканеров
            и ЛОР комбайнов. Переход на полностью цифровую платформу
            при диагностике и лечении заболеваний также стал серьёзным
            испытанием для большинства больниц и частных клиник.{" "}
          </p>
          <p className="font-medium text-[16px]">
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
      <Brend />
      <FastQuestion />
      <Question />
    </div>
  );
}

export default BrendPage;