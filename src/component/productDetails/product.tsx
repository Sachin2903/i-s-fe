"use client"
import all from "@/assests/products/@.png";
import valves from "@/assests/products/valves.png";
import transmitters from "@/assests/products/transmitters.png";
import automation from "@/assests/products/automation.png";
import motorized from "@/assests/products/actuators.png";
import flow from "@/assests/products/flow_meter.png";
import { useState } from "react";
import { IoMdCall, IoMdInformationCircle } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import { allProductsArray } from "@/data/productsData";
import Link from "next/link";
import SpecialAutomation from "./specialAutomation";

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
        special_heading: "iP Trans"

    }
]

const transmitters_subType = ["Pressure Series", "Temperature Series", "Level Series", "Flow Meter"]

export default function ProductsHelper() {
    const searchParams = useSearchParams();
    const [productType, setProductType] = useState(productTypes.map((data: Record<string, any>) => data?.name?.toUpperCase()).includes(searchParams.get("type")?.toUpperCase()) ? searchParams.get("type")?.toUpperCase() : "ALL PRODUCTS")
    const [subType, setSubType] = useState("PRESSURE SERIES");

    return <main className="w-full   min-h-dvh ">
        <section className="w-full  px-[2%]   md:px-[2%] lg:px-[2.5%] xl:px-[3%]  mb-10  border-b border-[#7F848D] pb-10  flex-wrap mt-[15px] sm:mt-[20px] md:mt-[30px] max-w-[1350px] mx-auto  flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14">
            {
                productTypes?.map((data: Record<string, any>, index: number) => {
                    return <section key={index} className="flex flex-col justify-start items-center flex-shrink-0 gap-2">
                        {data?.name?.toUpperCase() == productType && data?.special_heading ? <p className="bg-[#0057FF]     mx-auto text-[15px] w-fit px-4 rounded-full text-center py-0.5 text-white font-lobster  ">{productTypes.find((data: Record<string, any>) => data?.name?.toUpperCase() == productType)?.special_heading}</p> : <p className="bg-[#0057FF]     mx-auto text-[15px] w-fit px-4 rounded-full text-center py-0.5 text-white font-lobster invisible ">ip trans</p>}
                        <aside onClick={() => setProductType(data?.name?.toUpperCase())} className={`lg:w-[124px] w-[104px] h-[104px]  md:w-[114px] md:h-[114px] p-4 md:p-5 lg:p-6 lg:h-[124px] transition-all duration-500 ease-in-out cursor-pointer  flex justify-center items-center  ${productType == data.name?.toUpperCase() ? "bg-[#0057FF] border-[#0057FF] shadow-md" : "bg-[#F4F9FF] border-[#e3f0ff] shadow"} border  rounded-xl `}>
                            <img
                                src={data?.img?.src}
                                alt={data.name}
                                className={` ${productType == data.name?.toUpperCase() ? "filter brightness-0 invert sepia saturate-100 hue-rotate-[330deg]" : ""} transition-all duration-500 ease-in-out max-h-full`}
                            />
                        </aside>
                        <p className={`${productType == data.name?.toUpperCase() ? "" : ""} font-semibold  text-[#323334] mt-3 text-sm md:text-base`}>{data.name}</p>
                    </section>
                })
            }
        </section>
        {productType=="TRANSMITTERS"&&<section className="mb-10 px-[2%]   flex justify-center items-center gap-5  md:px-[2%] lg:px-[2.5%] xl:px-[3%]">
            {
                transmitters_subType.map((type: any, index: number) => {
                    return <aside key={index} onClick={() => {
                        setSubType(type?.toUpperCase())
                    }} className={`${subType == type?.toUpperCase() ? "bg-[#0057FF] text-white border-[#0057FF]" : "bg-[#F6FAFF] text-[#0057FF] border-[#0057FF42]"}  transition-all capitalize duration-200 cursor-pointer ease-in-out border max-w-[256px] text-center w-full py-3 font-medium rounded-lg   text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]`}>
                        {type}
                    </aside>
                })
            }
        </section>}
        {productType=="AUTOMATION"?<SpecialAutomation/>:<section className="w-fullpx-[2%]   md:px-[2%] lg:px-[2.5%] xl:px-[3%]  flex justify-center gap-5 flex-wrap pb-18 items-center">
            {
                allProductsArray.filter((data: Record<string, any>) => productType=="TRANSMITTERS" ? data?.subType?.includes(subType) : data.type.includes(productType) || productType == "ALL PRODUCTS").map((data: Record<string, any>, index: number) => {
                    return <Link className="border sm:w-[275px] w-[215px] md:w-[285px] lg:w-[295px] xl:w-[315px] rounded-lg p-4 border-[#EBEDF0] shadow-md group" key={index} href={`/products/${data.id}/${encodeURIComponent(data.name)}`}>
                        <div className="w-full relative shadow mb-3 border border-[#EBEDF0] rounded-lg overflow-hidden flex justify-center items-center h-[210px] sm:h-[220px] md:h-[230px] lg:h-[240px] xl:h-[255px]">
                            <img className="max-w-full h-[85%]" src={data?.img?.[0]?.src} alt="i&s" />
                            <p className="text-[12px] text-white group-hover:translate-y-0 transition-transform duration-500 ease-in-out translate-y-[250px] bg-[#000000a6]  absolute top-0 left-0 p-4 flex justify-center items-center text-center  w-full h-full  font-medium text-shadow-lg  sm:text-[13px] md:text-[14px] flex-col gap-2"><IoMdInformationCircle className="flex-shrink-0 text-2xl" />{data.des}</p>
                        </div>
                        <p className="text-[#323334] line-clamp-2 min-h-[60px] px-0.5 font-semibold text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] ">{data.name}</p>
                        <button className="hover:bg-[#0057FF] font-medium mt-4 rounded-lg cursor-pointer w-full flex justify-center py-2 items-center gap-2 border text-[12px] md:text-[14px] text-[#0057FF]  border-[#0057FF] hover:text-white"><IoMdCall className="scale-110" /> Enquire Now</button>
                    </Link>
                })
            }
        </section>}

    </main>
}