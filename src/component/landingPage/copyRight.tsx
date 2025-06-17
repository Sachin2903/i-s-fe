import { FaInstagram, FaRegCopyright } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { RiYoutubeLine } from "react-icons/ri";

export default function CopyRight() {
    return <section className="py-3 flex justify-between items-center text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-[#7F848D]  sm:py-4  gap-1  w-full bg-[#000B1D] px-[2%] lg:px-[3%] xl:px-[4%]">
        <h6 className="flex justify-center items-center gap-1"><FaRegCopyright /> {new Date().getFullYear()} All rights reserved.</h6>
        <aside className="flex justify-center items-center gap-3 ">
            <FaInstagram   className="scale-125" />
            <FiFacebook    className="scale-125"/>
            <RiYoutubeLine className="scale-125"/>
        </aside>
    </section>
}