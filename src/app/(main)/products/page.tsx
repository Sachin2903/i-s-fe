"use client"
import all from "@/assests/products/@.png";
import valves from "@/assests/products/valves.png";
import transmitters from "@/assests/products/transmitters.png";
import automation from "@/assests/products/automation.png";
import motorized from "@/assests/products/actuators.png";
import flow from "@/assests/products/flow_meter.png";
import { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { useSearchParams } from "next/navigation";

const productTypes = [
    {
        name: "All Products",
        img: all,
        special_heading: ""

    },
    {
        name: "Control Valves",
        img: valves,
        special_heading: ""

    },
    {
        name: "Transmitters",
        img: transmitters,
        special_heading: "iP Trans"

    },
    {
        name: "Automation",
        img: automation,
        special_heading: ""

    },
    {
        name: "Motorized Actuators",
        img: motorized,
        special_heading: "i-Tork"

    },
    {
        name: "Flow Meter",
        img: flow,
        special_heading: ""

    }
]

export default function Products() {
    const searchParams=useSearchParams();
    const [productType, setProductType] = useState(productTypes.map((data:Record<string,any>)=>data?.name?.toUpperCase()).includes(searchParams.get("type")?.toUpperCase())?searchParams.get("type")?.toUpperCase():"ALL PRODUCTS")

    return <main className="w-full   px-[2%]   md:px-[2%] lg:px-[2.5%] xl:px-[3%] min-h-dvh ">
        <section className="w-full mb-10  border-b border-[#7F848D] pb-10  flex-wrap mt-[35px] sm:mt-[40px] md:mt-[50px] max-w-[1300px] mx-auto  flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14">
            {
                productTypes?.map((data: Record<string, any>, index: number) => {
                    return <section key={index} className="flex flex-col justify-start items-center flex-shrink-0 gap-5">
                        <aside onClick={() => setProductType(data?.name?.toUpperCase())} className={`lg:w-[124px] w-[104px] h-[104px]  md:w-[114px] md:h-[114px] p-4 md:p-5 lg:p-6 lg:h-[124px] transition-all duration-500 ease-in-out cursor-pointer  flex justify-center items-center  ${productType == data.name?.toUpperCase() ? "bg-[#0057FF] shadow-md" : "bg-[#F4F9FF] shadow"}  rounded-xl `}>
                            <img
                                src={data?.img?.src}
                                alt={data.name}
                                className={` ${productType == data.name?.toUpperCase() ? "filter brightness-0 invert sepia saturate-100 hue-rotate-[330deg]" : ""} transition-all duration-500 ease-in-out max-h-full`}
                            />
                        </aside>
                        <p className={`${productType == data.name?.toUpperCase() ? "" : ""} font-semibold  text-[#323334] text-sm md:text-base`}>{data.name}</p>
                    </section>
                })
            }
        </section>
        {productTypes.find((data: Record<string, any>) => data?.name?.toUpperCase() == productType)?.special_heading && <p className="bg-[#0057FF]  mb-7 md:mb-10  max-w-[1300px] mx-auto text-2xl sm:text-3xl lg:text-4xl text-center py-1 text-white font-lobster w-full ">{productTypes.find((data: Record<string, any>) => data?.name?.toUpperCase() == productType)?.special_heading}</p>}
        <section className="w-full flex justify-center gap-5 flex-wrap mb-10 items-center">
            {
                new Array(10).fill(0).map((data: Record<string, any>, index: number) => {
                    return <aside className="borders sm:w-[265px] w-[205px] md:w-[275px] lg:w-[285px] xl:w-[305px] rounded-lg p-4 border-[#EBEDF0] shadow-md" key={index}>
                        <div className="w-full shadow mb-3 border border-[#EBEDF0] rounded-lg overflow-hidden flex justify-center items-center h-[210px] sm:h-[220px] md:h-[230px] lg:h-[240px] xl:h-[255px]">
                            <img className="max-w-full h-[85%]" src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`} alt="i&s" />
                        </div>
                        <p className="text-[#323334] px-0.5 font-semibold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] ">Transmitters with Remote Seal</p>
                        <p className="text-[12px] px-0.5 font-medium text-[#323334] sm:text-[13px] md:text-[14px]">Differential Pressure Transmitter with Remote Seal and Capillary</p>
                        <button className="hover:bg-[#0057FF] font-medium mt-6 rounded-lg cursor-pointer w-full flex justify-center py-2 items-center gap-2 border text-[12px] md:text-[14px] text-[#0057FF]  border-[#0057FF] hover:text-white"><IoMdCall className="scale-110" /> Enquire Now</button>
                    </aside>
                })
            }
        </section>

    </main>
}