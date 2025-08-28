"use client"
import power from "@/assests/industry/Group.png";
import oil from "@/assests/industry/fa-solid_oil-can.png";
import chemical from "@/assests/industry/game-icons_chemical-tank.png";
import steel from "@/assests/industry/la_drum-steelpan.png";
import cement from "@/assests/industry/ri_building-2-line.png";
import defense from "@/assests/industry/game-icons_egg-defense.png";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import powerBanner from "@/assests/industry/powerBanner.png";
import oilBanner from "@/assests/industry/oilBanner.png";
import chemicalBanner from "@/assests/industry/chemical.png";
import steelBanner from "@/assests/industry/steelBanner.png";
import cementBanner from "@/assests/industry/cementBanner.png";
import defenseBanner from "@/assests/industry/defensein.jpeg";
import { IndustryDataArray, paperIndustryClients, sugarIndustryCLient } from "@/data/industryData";
import water_manage from "@/assests/industry/water_managment.png";
import water_manage_banner from "@/assests/industry/watermanagementBanner.png";
import distilleries from "@/assests/industry/distilleries.png";
import textile from "@/assests/industry/textile.png";
import sugar from "@/assests/industry/sugar.png";
import paperpulp from "@/assests/industry/paper.png";
import distilleries_banner from "@/assests/industry/distillerbanner.png";
import textile_banner from "@/assests/industry/texttileBanner.png";
import sugar_banner from "@/assests/industry/sugarBanner.png";
import paperpulp_banner from "@/assests/industry/paperpulpbanner.png";
import coalMIningBanner from "@/assests/industry/coalminingbanner.png";
import HYdroPowerBanner from "@/assests/industry/hydrogen.png";
import NUclearBanner from "@/assests/industry/nuclear.png";

const IndustryTypes = [
    {
        name: "Power Plant",
        img: power,
        bannerHeading: "Shaping the Future of Energy Generation",
        des: "For over a century, our technologies have powered the world—making energy generation more reliable, more efficient, and more sustainable across thermal, hydro, and renewable plants.",
        banner: powerBanner,
        subType: [{
            name: "Thermal Power",
            bannerHeading: "Revolutionizing Resource Extraction",
            des: "We’ve been making mining operations safer, smarter, and more sustainable—leveraging advanced monitoring, automation, and predictive analytics to redefine productivity in coal and mineral mining.",
            banner: coalMIningBanner
        }, {
            name: "Hydro Power",
            bannerHeading: "Harnessing the Power of Water",
            des: "We empower hydroelectric plants with advanced control systems, predictive maintenance tools, and grid integration solutions—enabling clean, reliable, and efficient power generation.",
            banner: HYdroPowerBanner
        }, {
            name: "Nuclear",
            bannerHeading: "Securing the Future of Nuclear",
            des: "Our technologies enhance safety, efficiency, and performance in the nuclear sector—supporting civilian and research reactors with next-gen monitoring and control systems.",
            banner: NUclearBanner
        }],

    },
    {
        name: "Oil & Gas",
        img: oil,
        bannerHeading: "Transferring The Energy Landscape",
        des: "Our innovations have been fueling progress in the oil & gas industry—enhancing safety, optimizing exploration and refining, and driving cleaner, smarter operations worldwide.",
        banner: oilBanner


    },
    {
        name: "Chemical & Fertilizer",
        img: chemical,
        bannerHeading: "Enabling Growth through Innovation ",
        des: "From advanced process automation to sustainable manufacturing, our solutions have helped chemical and fertilizer industries boost productivity, reduce emissions, and support global agriculture.",
        banner: chemicalBanner

    },
    {
        name: "Steel",
        img: steel,
        bannerHeading: "Forging the future of steel",
        des: "For decades, we’ve empowered the steel industry with cutting-edge automation, energy-efficient systems, and high-performance solutions that ensure strength, safety, and sustainability.",
        banner: steelBanner


    },
    {
        name: "Cement",
        img: cement,
        bannerHeading: "Building Stronger Foundations",
        des: "From raw material processing to finished product, our intelligent solutions enhance efficiency, reduce emissions, and enable greener operations in cement manufacturing.",
        banner: cementBanner

    },
    {
        name: "Defense",
        img: defense,
        bannerHeading: "Strengthening National Security Through Techonology",
        des: "For decades, we’ve been at the forefront of defence innovation—delivering mission-critical solutions that enhance surveillance, mobility, communication, and operational readiness.",
        banner: defenseBanner

    },
    {
        name: "Water Management",
        img: water_manage,
        bannerHeading: "Delivering Smart Solutions for Every Drop",
        des: "Our technologies streamline water treatment, monitoring, and distribution—ensuring reliability, efficiency, and environmental stewardship.",
        banner: water_manage_banner

    },
    {
        name: "Distilleries",
        img: distilleries,
        bannerHeading: "Crafting Precision in Every Drop",
        des: "With cutting-edge automation and safety controls, we help distilleries achieve consistent quality, traceability, and operational excellence.",
        banner: distilleries_banner

    },
    {
        name: "Textile",
        img: textile,
        bannerHeading: "Weaving Efficiency Into Every Thread",
        des: "Our intelligent systems enhance fabric quality, production speed, and resource optimization—making textile manufacturing smarter and more sustainable.",
        banner: textile_banner

    },
    {
        name: "Sugar",
        img: sugar,
        bannerHeading: "Refining Processes, Elevating Yields",
        des: "We empower sugar mills with high-performance solutions that reduce energy use, minimize losses, and enhance overall productivity.",
        banner: sugar_banner

    },
    {
        name: "Paper & Pulp",
        img: paperpulp,
        bannerHeading: "Engineering Efficiency from Pulp to Paper",
        des: "Our automation and energy management systems bring greater consistency, lower emissions, and cost savings to every stage of paper production.",
        banner: paperpulp_banner

    }
]
export default function IndustryHelper() {
    const searchParams = useSearchParams();
    const [productType, setProductType] = useState(IndustryTypes.map((data: Record<string, any>) => data?.name?.toUpperCase()).includes(searchParams.get("type")?.toUpperCase()) ? searchParams.get("type")?.toUpperCase() : "POWER PLANT")
    const [industryObject, setIndustryObject] = useState<any>(IndustryTypes.find((data: Record<string, any>) => data?.name?.toUpperCase() == searchParams.get("power")?.toUpperCase()) ?? IndustryTypes[0]);
    const [subType, setSubType] = useState<any | null>(null);

    return <main className="w-full   ">
        <section className="w-full mb-10 px-4    border-b border-[#7F848D] pb-10  flex-wrap mt-[35px] sm:mt-[40px] md:mt-[50px] max-w-[1950px] mx-auto  flex justify-center items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 ">
            {
                IndustryTypes?.map((data: Record<string, any>, index: number) => {
                    return <section key={index} className="flex lg:w-[105px] md:w-[95px] w-[85px] flex-col justify-start items-center flex-shrink-0  gap-5 ">
                        <aside onClick={() => {

                            setSubType(null)

                            setProductType(data?.name?.toUpperCase()); setIndustryObject(data)
                        }} className={`  h-[85px]   md:h-[95px] p-4 md:p-4 lg:p-4 lg:h-[105px] transition-all duration-500 ease-in-out cursor-pointer  flex justify-center items-center  ${productType == data.name?.toUpperCase() ? "bg-[#0057FF] border-[#0057FF] shadow-md" : "bg-[#F4F9FF] border-[#d6e9ff] shadow"} border rounded-xl `}>
                            <img
                                src={data?.img?.src}
                                alt={data.name}
                                className={` ${productType == data.name?.toUpperCase() ? "filter brightness-0 invert sepia saturate-100 hue-rotate-[330deg]" : ""} transition-all duration-500 ease-in-out max-h-full`}
                            />
                        </aside>
                        <p className={`${productType == data.name?.toUpperCase() ? "" : ""} font-semibold  text-[#323334] text-sm  w-[100%] text-center md:text-base`}>{data.name}</p>
                    </section>
                })
            }
        </section>
        <section className="mb-10 px-[2%] flex justify-center items-center gap-5  md:px-[2%] lg:px-[2.5%] xl:px-[3%]">
            {
                industryObject?.subType?.map((type: any, index: number) => {
                    return <aside key={index} onClick={() => {
                        setSubType(type)
                    }} className={`${subType == type ? "bg-[#0057FF] text-white border-[#0057FF]" : "bg-[#F6FAFF] text-[#0057FF] border-[#0057FF42]"}  transition-all duration-200 cursor-pointer ease-in-out border max-w-[360px] text-center w-full py-3 font-medium rounded-lg   text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]`}>
                        {type?.name}
                    </aside>
                })
            }
        </section>

        <section className="relative w-full h-[690px]">
            <img
                src={subType ? subType?.banner?.src : industryObject.banner?.src}
                alt={subType ? subType.name : industryObject?.name}
                className="w-full z-10 absolute top-0 left-0 object-cover object-top h-full"
            />

            <section className="flex px-[3%] lg:px-[4%] xl:px-[5%] flex-col justify-evenly items-center w-full h-full ">
                <aside className="text-[50px] relative z-10 sm:text-[55px]   flex text-shadow-lg/30 justify-start flex-col items-center lg:items-start md:text-[65px]  leading-14 sm:leading-20 xl:leading-24 lg:text-[75px] xl:text-[96px]   w-full text-white  font-bold">
                    <p>{subType ? subType?.bannerHeading : industryObject?.bannerHeading}</p>
                    <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] mt-3 leading-10">{subType ? subType?.des : industryObject?.des}</p>

                </aside>
                <aside className="flex w-full relative z-10 justify-center  lg:justify-start items-center flex-wrap    gap-5 sm:gap-8">
                    <button className="px-10 sm:px-12 md:px-14 lg:px-16 xl:px-20 rounded-xl flex-shrink-0 font-semibold text-base md:text-lg py-4 md:py-4 lg:py-5 xl:py-6 text-[#0057FF] bg-white">Learn More</button>
                    <button className="px-10 sm:px-12 md:px-14 lg:px-16 xl:px-20 rounded-xl flex-shrink-0 font-semibold text-base md:text-lg py-4 md:py-4 lg:py-5 xl:py-6 text-white bg-[#0057FF]">Online Enquiry</button>
                </aside>
            </section>
        </section>

        <aside className="pt-20   ">
            <h3 className="text-[24px] px-[2%]   md:px-[2%] lg:px-[2.5%] xl:px-[3%] w-full justify-start flex items-start md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Our Trusted Partners </h3>

            {(productType == "SUGAR" || productType == "PAPER & PULP") ? <aside className=" min-h-[250px] px-[0.5%]   md:px-[1%] lg:px-[1.5%] xl:px-[2%] py-16 bg-[#F7FAFF]  grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mt-10 md:mt-14 ">
                {
                    [...(productType == "SUGAR" ? sugarIndustryCLient : paperIndustryClients)].map((client: string, index: number) => {
                        return <aside className="w-full bg-white border border-gray-100 shadow  rounded-md  px-[3%] py-5" key={index}>
                            <p className="text-[#0057FF] font-semibold text-[16px] w-full text-center sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]">{client}</p>
                        </aside>
                    })
                }
            </aside> : <aside className="flex justify-center min-h-[250px] px-[0.5%]   md:px-[1%] lg:px-[1.5%] xl:px-[2%] py-16 bg-[#F7FAFF] items-center flex-wrap gap-6 lg:gap-8 mt-10 md:mt-14 ">
                {
                    IndustryDataArray.filter((data: Record<string, any>) => data.type.includes(productType) && (subType ? data.subType.includes(subType?.name) : data.subType?.length == 0)
                    ).map((data: any, index: number) => {
                        return <aside className="flex w-full max-w-[480px] sm:max-w-[510px] md:max-w-[550px] lg:max-w-[600px] px-5 py-6 md:py-4.5 shadow-md bg-white rounded-lg border border-gray-200  justify-start items-center gap-5 md:gap-4 lg:gap-5 xl:gap-6" key={index}>
                            <div className={`w-[80px] ${data.img?"":"bg-gray-200"}  rounded-full h-[80px]`}>


                                {data.img && <img
                                    onError={(e: any) => (e.target.style.display = "hidden")}
                                    className="w-full h-full   object-contain  object-center"
                                    src={data.img.src}
                                    alt={data.heading}
                                />}
                            </div>

                            <aside>
                                <h4 className=" font-semibold text-[18px] text-[#0057FF] lg:text-[19px] xl:text-[20px]">{data?.name}</h4>
                                <p className="font-medium text-[#000000] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]">{data?.des}</p>
                            </aside>
                        </aside>
                    })
                }
            </aside>}
        </aside>



    </main>
}