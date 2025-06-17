"use client";

import textDesign from "@/assests/landingPage/textDesing.png";

export default function KnowMore() {
    return <section className="w-dvw flex sm:gap-0 gap-8 sm:flex-row flex-col justify-between items-center relative  min-h-[dvh] px-[3%] lg:px-[4%] xl:px-[5%]  py-16 mt-5  bg-[#F7FAFF]">
        <h3 className="text-[24px]  md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold"> <span className="relative"><img src={textDesign.src} className="absolute -bottom-0.5 left-0 w-full" alt="i&s" />Want</span> to know more?</h3>
        <aside className="flex flex-wrap justify-center items-center gap-3 ">
            <input placeholder="Enter Your Email" className="text-[#7F848D] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] px-4 border  border-gray-300 bg-white rounded-lg  py-3 lg:py-4  outline-none"/>
            <button className="px-6 sm:px-5 lg:px-6 xl:px-8  rounded-xl flex-shrink-0 font-semibold text-base md:text-lg py-3 lg:py-4  text-white bg-[#0057FF]">Online Enquiry</button>
        </aside>
    </section>

}