import leftDesing from "@/assests/landingPage/hero2/sectionDesignLeft.png";
import rightDesing from "@/assests/landingPage/hero2/sectionDesignRight.png";
import { TiArrowRight } from "react-icons/ti";

import flow from "@/assests/products/flow_meter.png";
import valves from "@/assests/products/valves.png";
import transmitters from "@/assests/products/transmitters.png";
import automation from "@/assests/products/automation.png";
import motorized from "@/assests/products/actuators.png";
import Link from "next/link";
const categoryArray = [
    {
        name: "Control Valves",
        img: valves,
        des: "Precisely regulate flow, pressure, and temperature in critical process systems.",
        count: 60
    },
    {
        name: "Transmitters",
        img: transmitters,
        des: "Deliver accurate and real-time process data with high-sensitivity transmitters.",
        count: 70
    },
    {
        name: "Automation",
        img: automation,
        des: "Smart automation enhances productivity, safety, and consistency.",
        count: 20
    },
    {
        name: "Motorized Autuators",
        img: motorized,
        des: "Motorized actuators provide reliable motion control for valves and systems.",
        count: 40
    },
    {
        name: "Flow Meter",
        img: flow,
        des: "Achieve accurate flow measurement for liquids and gases in real time.",
        count: 50
    }
]
export default function Hero2() {
    return <section className="w-dvw relative  flex justify-start items-center sm:py-10 py-8 md:py-12 lg:py-14 xl:py-16 flex-col bg-white">
        <img className="absolute z-10 w-[200px] sm:[210px] md:w-[230px] lg:w-[250px] xl:w-[280px] left-0 top-1/3" src={leftDesing.src} alt="i&s" />
        <img className="absolute z-10 w-[200px] sm:[210px] md:w-[230px] lg:w-[250px] xl:w-[280px] right-0 bottom-0" src={rightDesing.src} alt="i&s" />
        <h2 id="product_category" className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Our Products Category</h2>
        <section className="w-full flex sm:py-10 py-8 md:py-12 lg:py-14 xl:py-16 flex-wrap justify-center items-center gap-6 ">
            {
                categoryArray.map((data: any, index: number) => {
                    return <Link
                        key={index}
                        href={`/products?type=${data.name?.toUpperCase()}`}
                        className="group flex flex-col justify-start items-center relative bg-white z-30 w-[365px] p-[4%] md:p-[2%] py-[3%] md:py-[1.4%] lg:w-[390px] xl:w-[415px] flex-shrink-0 rounded-xl border border-gray-200 shadow-md hover:bg-[#0057FF] transition-all duration-300"
                    >
                        <p className=" text-[20px] md:text-[24px] lg:text-[28px] self-end xl:text-[32px] bg-[#F5F8FF] p-2 md:p-3 w-fit rounded-xl text-[#0057FF] font-semibold">
                            {data.count}+
                        </p>
                        <aside
                            className={`md:h-[120px] ${index > 2 ? "p-5 sm:p-6" : "p-2"} flex justify-center items-center self-start h-[95px] lg:h-[145hpx]`}
                        >
                            <img className="h-full" src={data.img.src} alt="i&s" />
                        </aside>
                        <h3 className="group-hover:text-white text-[20px] mt-2 self-start md:text-[22px] lg:text-[26px] xl:text-[30px] font-semibold">
                            {data.name}
                        </h3>
                        <p className="group-hover:text-white text-[13px] text-[#7F848D] mt-2 self-start md:text-[14px] lg:text-[15px] xl:text-[16px] font-medium">
                            {data.des}
                        </p>
                        <p className="group-hover:text-white text-[16px] flex justify-start items-center gap-2 text-[#0057FF] mt-2 self-start md:text-[17px] lg:text-[18px] xl:text-[19px] font-semibold">
                            View all <TiArrowRight className="flex-shrink-0 scale-150" />
                        </p>
                    </Link>

                })
            }
        </section>
    </section>
}