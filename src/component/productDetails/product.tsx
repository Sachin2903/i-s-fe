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
import linear from "@/assests/products/linear.png"
import SingleProductHelper from "./singleProductHelper";

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
        special_heading: "in-Tork"

    },
    {
        name: "Flow Meter",
        img: flow,
        special_heading: "iP Trans"

    },
    {
        name: "Linear Power Cylinder",
        img: linear,
        special_heading: ""

    }
]

const transmitters_subType = ["Pressure Series", "Temperature Series", "Level Series", "Flow Series"]

export default function ProductsHelper() {
    const searchParams = useSearchParams();
    const [productType, setProductType] = useState(productTypes.map((data: Record<string, any>) => data?.name?.toUpperCase()).includes(searchParams.get("type")?.toUpperCase()) ? searchParams.get("type")?.toUpperCase() : "ALL PRODUCTS")
    const [subType, setSubType] = useState("PRESSURE SERIES");

    return <main className="w-full   min-h-dvh ">
        <section className="w-full  px-[2%] mb-7 sm:mb-8  md:mb-8 lg:mb-10  md:px-[2%] lg:px-[2.5%] xl:px-[3%]    border-b border-[#7F848D] pb-10  flex-wrap mt-[15px] sm:mt-[20px] md:mt-[30px] max-w-[1350px] mx-auto  flex justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            {
                productTypes?.map((data: Record<string, any>, index: number) => {
                    return <section key={index} className="flex  flex-col justify-start items-center flex-shrink-0 gap-2">
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
        {productType == "TRANSMITTERS" && <section className="mb-7 sm:mb-8  md:mb-8 lg:mb-10 px-[2%] flex-wrap   flex justify-center items-center gap-3 sm:gap-3 md:gap-4  lg:gap-5  md:px-[2%] lg:px-[2.5%] xl:px-[3%]">
            {
                transmitters_subType.map((type: any, index: number) => {
                    return <aside key={index} onClick={() => {
                        setSubType(type?.toUpperCase())
                    }} className={`${subType == type?.toUpperCase() ? "bg-[#0057FF] text-white border-[#0057FF]" : "bg-[#F6FAFF] text-[#0057FF] border-[#0057FF42]"}  transition-all capitalize duration-200 cursor-pointer ease-in-out border max-w-[266px] px-2 text-center w-full py-3 font-medium rounded-lg   text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px]`}>
                        {type}
                    </aside>
                })
            }
        </section>}
        {productType == "TRANSMITTERS" && (subType == "LEVEL SERIES" || subType == "FLOW SERIES") ? <section className="w-fullpx-[2%]   md:px-[2%] lg:px-[2.5%] xl:px-[3%]  flex justify-center gap-5 flex-wrap pb-18 items-center">
            <p className="w-full  md:mx-[2%] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] lg:mx-[2.5%] xl:mx-[3%] text-center px-4 py-2 font-semibold bg-[#F7FAFF]">{subType == "FLOW SERIES" ? "Flow series" : "Contact Type"}</p>
            {
                allProductsArray.filter((data: Record<string, any>) => productType == "TRANSMITTERS" ? (subType == "LEVEL SERIES" || subType == "FLOW SERIES") ? data?.extraType?.includes(subType == "FLOW SERIES" ? "FLOW SERIES" : "CONTACT TYPE") : data?.subType?.includes(subType) : data.type.includes(productType) || productType == "ALL PRODUCTS").map((data: Record<string, any>, index: number) => {
                    return <SingleProductHelper product={data} key={index} />
                })
            }
            <p className="w-full  md:mx-[2%] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] lg:mx-[2.5%] xl:mx-[3%] text-center px-4 py-2 font-semibold bg-[#F7FAFF]">{subType == "FLOW SERIES" ? "Remote seal series" : "Non-Contact Type"}</p>
            {
                allProductsArray.filter((data: Record<string, any>) => productType == "TRANSMITTERS" ? (subType == "LEVEL SERIES" || subType == "FLOW SERIES") ? data?.extraType?.includes(subType == "FLOW SERIES" ? "REMOTE SEAL SERIES" : "NON-CONTACT TYPE") : data?.subType?.includes(subType) : data.type.includes(productType) || productType == "ALL PRODUCTS").map((data: Record<string, any>, index: number) => {
                    return <SingleProductHelper product={data} key={index} />
                })
            }

        </section> : productType == "AUTOMATION" ? <SpecialAutomation /> : <section className="w-fullpx-[2%]   md:px-[2%] lg:px-[2.5%] xl:px-[3%]  flex justify-center gap-5 flex-wrap pb-18 items-center">
            {
                allProductsArray.filter((data: Record<string, any>) => productType == "TRANSMITTERS" ? data?.subType?.includes(subType) : data.type.includes(productType) || productType == "ALL PRODUCTS").map((data: Record<string, any>, index: number) => {
                    return <SingleProductHelper product={data} key={index} />
                })
            }
        </section>}

    </main>
}

