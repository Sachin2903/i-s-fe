"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function Humberger() {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const mainPage = document.getElementById("main-landing-page");
        if (mainPage) {
            mainPage.style.overflow = openMenu ? "hidden" : "";
        }

        return () => {
            if (mainPage) {
                mainPage.style.overflow = "";
            }
        };
    }, [openMenu]);


    return (
        <>
            <aside className="relative md:hidden w-[35px] h-[35px] z-[99999]">
                <MdMenu
                    onClick={() => setOpenMenu(true)}
                    className={`text-white ${openMenu ? "scale-0" : ""} cursor-pointer absolute top-0 left-0 transition-all duration-500 ease-in-out text-3xl sm:text-4xl`}
                />
                <RxCross2
                    onClick={() => setOpenMenu(false)}
                    className={`text-white ${!openMenu ? "scale-0" : ""} cursor-pointer absolute top-0 left-0 transition-all duration-500 ease-in-out text-3xl sm:text-4xl`}
                />
            </aside>

            <aside
                className={`fixed top-0  w-dvw h-dvh z-[9999] md:hidden transition-all duration-300 ease-in-out ${openMenu ? "right-0" : "-right-[200vw]"
                    }`}
            >
                <ul className="w-[250px] float-right h-full text-white font-medium text-base flex flex-col items-center justify-start gap-10 pt-[120px] backdrop-blur-lg bg-black/60">
                    <Link href="/"><li>HOME</li></Link>
                    <Link href="/products"><li>PRODUCTS</li></Link>
                    <Link href="/aboutus"><li>ABOUT US</li></Link>
                    <Link href="/contactus"><li>CONTACT US</li></Link>
                </ul>
            </aside>
        </>
    );
}
