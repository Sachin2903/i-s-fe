import logo from "@/assests/landingPage/hero1/iands_gray_logo.png";
import { CiSearch } from "react-icons/ci";
import Humberger from "./humberger";
import Link from "next/link";

export default function Navbar({ color }: { color: boolean }) {
    return <nav className={`relative z-20 flex justify-between items-center ${color ? "bg-[#000B1D]" : "bg-black/30 backdrop-blur-3xl"}   z-20  px-[3%] lg:px-[4%] xl:px-[5%] pt-5 sm:pt-8 xl:pt-9 pb-2 sm:pb-4 w-full`}>
        <Link href="/"><img src={logo.src} alt="logo" className="h-[50px] md:h-[60px] lg:h-[74.57px]" /></Link>
        <ul className="hidden md:flex text-white justify-center  text-sm md:text-base font-medium items-center gap-4 md:gap-5 lg:gap-6 xl:gap-10">
            <Link href="/"><li>HOME</li></Link>
            <Link href="/products"><li>PRODUCTS</li></Link>
            <Link href="/industry"><li>INDUSTRY</li></Link>
            <Link href="/"><li>BLOGS</li></Link>
            <Link href="/aboutus"><li>ABOUT US</li></Link>
            <Link href="/contactus"><li>CONTACT US</li></Link>
            {/* <aside className="w-[220px] lg:w-[270px] xl:w-[300px] h-[36px] border px-3 border-white/60 text-gray-100 flex justify-between items-center  rounded-full">
                <input className=" outline-none w-full font-normal h-full px-2  py-1" />
                <CiSearch className="text-2xl " />
            </aside> */}

        </ul>
        <Humberger />

    </nav>
}