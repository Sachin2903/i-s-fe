import textDesign from "@/assests/landingPage/textDesing.png";
import desing from "@/assests/landingPage/hero2/category.png";
import leftDesing from "@/assests/landingPage/hero2/sectionDesignLeft.png";
import rightDesing from "@/assests/landingPage/hero2/sectionDesignRight.png";
import { TiArrowRight } from "react-icons/ti";

export default function Hero2() {
    return <section className="w-dvw relative  min-h-[dvh] flex justify-start items-center py-16 flex-col bg-white">
        <img className="absolute z-10 w-[200px] sm:[210px] md:w-[230px] lg:w-[250px] xl:w-[280px] left-0 top-1/3" src={leftDesing.src} alt="i&s" />
        <img className="absolute z-10 w-[200px] sm:[210px] md:w-[230px] lg:w-[250px] xl:w-[280px] right-0 bottom-0" src={rightDesing.src} alt="i&s" />
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Our <span className="relative"><img src={textDesign.src} className="absolute -bottom-2.5 left-0 w-full" alt="text_design" />Products</span> Category</h2>
        <section className="w-full flex py-16 flex-wrap justify-center items-center gap-6 ">

            {
                new Array(5).fill(0).map((_: any, index: number) => {
                    return <aside key={index} className="flex flex-col justify-start items-center relative bg-white z-30 w-[365px] p-[4%] md:p-[2%] py-[3%] md:py-[1.4%] lg:w-[390px] xl:w-[415px] flex-shrink-0 rounded-xl  border border-gray-200 shadow-md">
                        <p className="text-[20px]  md:text-[24px] lg:text-[28px] self-end xl:text-[32px] bg-[#F5F8FF] p-2 md:p-3 w-fit rounded-xl  text-[#0057FF]  font-semibold">60+</p>
                        <img className="w-[72px] self-start md:w-[82px] lg:w-[82px] " src={desing.src} alt="i&s" />
                        <h3 className="text-[20px] mt-2 self-start md:text-[22px] lg:text-[26px] xl:text-[30px] font-semibold">Control Valves </h3>
                        <p className="text-[13px] text-[#7F848D] mt-2 self-start md:text-[14px] lg:text-[15px] xl:text-[16px] font-medium">Precisely regulate flow, pressure, and temperature in critical process systems.</p>
                        <p className="text-[16px] flex justify-start items-center gap-2 text-[#0057FF] mt-2 self-start md:text-[17px] lg:text-[18px] xl:text-[19px] font-semibold">View all <TiArrowRight className="flex-shrink-0  scale-150 " /></p>

                    </aside>
                })
            }


        </section>

    </section>
}