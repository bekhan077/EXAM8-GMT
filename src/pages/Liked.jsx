import { useSelector } from "react-redux";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Burger from "../../public/assets/signin/burger.svg"
import Table from "../../public/assets/signin/table.svg"



const Liked = () => {
    const { cards } = useSelector((state) => state.cartProducts);
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
         <div className="flex items-center gap-2 pb-[80px] pt-[20px] text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <Link to={"/katalog"} className="text-[#7A7687]">
           Медицинское оборудование
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/izbrannoe"} className="">
           Избранное
          </NavLink>
        </div>
         <h1 className="text-[48px] font-medium mb-[20px]">Избранное</h1>
       <div className="flex justify-between gap-2">
        <div className="">
          <p className="text-[16px] font-medium mb-2">Все товары</p>
          <p className="text-[16px] font-medium mb-2 opacity-50">Маммографы</p>
          <p className="text-[16px] font-medium opacity-50">Флюорографы</p>
        </div>
        <div className="">
           <div className="flex justify-between items-center border rounded-xl py-[11px] px-4 mb-[20px]">
              <div className="flex gap-2 items-center">
                <p>По популярности</p>
                <IoIosArrowDown/>
              </div>
              <div className="flex items-center gap-5">
                <img src={Burger} alt="" />
                <img src={Table} alt="" />
              </div>
           </div>
        <div className="grid grid-cols-3 gap-4">
           {cards.map((card) => (
          <div key={card.id} className="border rounded-xl w-[320px] pb-5 ">
            <div className="w-[320px] h-[320px] rounded-xl p-14 bg-white">
              <img src={card.image} alt={card.title} className="w-full h-full rounded-xl object-contain"/>
            </div>
            <div className="px-4 py-2">
              <h3 className="text-[18px] font-semibold w-[200px]">{card.title}</h3>
              <p className="text-[#7A7687] text-[14px] mt-[10px]">{card.desc}</p>
              <p className="text-[#7A7687] text-[14px] ">{card.position}</p>
            </div>
            <div className="px-4 py-2 my-[30px]">
              <p className="text-[18px] font-semibold">{card.price}</p>
            </div>
            <div className="px-4">
              <button className="w-full bg-transparent border rounded-full text-[14px] font-semibold py-2 px-4 text-[#088269]">Добавить в корзину</button>
            </div>
           
          </div>
        ))}
        </div>
        <button className="bg-[#088269] px-6 py-2 rounded-full text-[#F8F7F3] text-[14px] font-semibold my-[30px] ml-[88%]">В каталог</button>
        </div>
        
       </div>
      </div>
    </div>
  );
}

export default Liked