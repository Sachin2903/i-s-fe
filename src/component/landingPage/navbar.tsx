import logo from "@/assests/landingPage/hero1/iands_gray_logo.png";
import { CiSearch } from "react-icons/ci";
import Humberger from "./humberger";

export default function Navbar({color}:{color:boolean}) {
    return <nav className={`flex justify-between items-center ${color?"bg-[#000B1D]":"bg-black/30 backdrop-blur-3xl"}   z-20  px-[3%] lg:px-[4%] xl:px-[5%] pt-5 sm:pt-8 xl:pt-9 pb-2 sm:pb-4 w-full`}>
        <img src={logo.src} alt="logo" className="h-[50px] md:h-[60px] lg:h-[74.57px]" />
        <ul className="hidden md:flex text-white justify-center  text-sm md:text-base font-medium items-center gap-5 md:gap-6 lg:gap-8 xl:gap-12">
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <aside className="w-[220px] lg:w-[270px] xl:w-[300px] h-[36px] border px-3 border-white/60 text-gray-100 flex justify-between items-center  rounded-full">
                <input className=" outline-none w-full font-normal h-full px-2  py-1" />
                <CiSearch className="text-2xl " />
            </aside>

        </ul>
        <Humberger />

    </nav>
}