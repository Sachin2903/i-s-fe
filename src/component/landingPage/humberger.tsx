"use client"
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function Humberger() {
    const [openMenu, setOpenMenu] = useState(false);
    return <>
        <aside className="relative  md:hidden   w-[35px] h-[35px]">
            <MdMenu onClick={() => setOpenMenu(true)} className={`text-white ${openMenu ? "scale-0 origin-bottom-right" : ""}     z-50 absolute top-0 left-0 transition-all duration-500  ease-in-out text-3xl  sm:text-4xl`} />
            <RxCross2 onClick={() => setOpenMenu(false)} className={`text-white ${!openMenu ? "scale-0 origin-top-right" : ""}  z-50 absolute top-0 left-0   transition-all duration-500 ease-in-out text-3xl  sm:text-4xl`} />
        </aside>

        <aside className={`w-dvw  md:hidden ${openMenu?" right-0":" -right-[200vw]"} transition-all duration-300 ease-in-out h-dvh fixed top-0  z-30`}>

            <ul className="w-[250px]  text-white font-medium text-base flex flex-col justify-start h-full items-center gap-10 pt-[120px] backdrop-blur-lg bg-black/40 float-right">
                <li>HOME</li>
                <li>PRODUCTS</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
            </ul>


        </aside>
    </>
}