import { allProductsArray, automationProductArray } from "@/data/productsData";
import Link from "next/link";
import { useState } from "react";
import { IoMdCall, IoMdInformationCircle } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SendEnquiryModal from "./sendEnquiryModel";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
        partialVisibilityGutter: 50,
    },
    largeDesktop: {
        breakpoint: { max: 3000, min: 1440 },
        items: 6,
        partialVisibilityGutter: 40,
    },
    desktop: {
        breakpoint: { max: 1440, min: 1000 },
        items: 4,
        partialVisibilityGutter: 30,
    },
    tablet: {
        breakpoint: { max: 1000, min: 768 },
        items: 3,
        partialVisibilityGutter: 20,
    },
    smallTablet: {
        breakpoint: { max: 768, min: 550 },
        items: 2,
        partialVisibilityGutter: 15,
    },
    mobile: {
        breakpoint: { max: 550, min: 0 },
        items: 1,
        partialVisibilityGutter: 10,
    },
};

const automation_subType = ["Sugar Automation", "Water Automation"]

const CustomDot = ({ onClick, ...rest }: any) => {
    const { active } = rest;
    return (
        <li
            className={`inline-block mx-1 cursor-pointer transition-all duration-300 ${active ? "bg-[#0057FF] w-[28px]" : "bg-[#C4C4C4] w-[12px]"
                } h-[12px] rounded-full`}
            onClick={() => onClick()}
        />
    );
};
export default function SpecialAutomation() {
    const [subType, setSubType] = useState<any>("SUGAR AUTOMATION");
    const [items, setItems] = useState(automationProductArray[0]);
    const [openModel, setOpenModel] = useState(false)
    return <section className="w-full    min-h-dvh ">
        {openModel && <SendEnquiryModal addProductName={true} name={`${items?.name}`} onClose={() => setOpenModel(false)} />}

        <section className="mb-10 px-[2%] flex justify-center items-center gap-5  md:px-[2%] lg:px-[2.5%] xl:px-[3%]">
            {
                automation_subType.map((type: any, index: number) => {
                    return <aside key={index} onClick={() => {
                        setSubType(type?.toUpperCase())
                        setItems(type?.toUpperCase() == "SUGAR AUTOMATION" ? automationProductArray[0] : automationProductArray[1]);
                    }} className={`${subType == type?.toUpperCase() ? "bg-[#0057FF] text-white border-[#0057FF]" : "bg-[#F6FAFF] text-[#0057FF] border-[#0057FF42]"}  transition-all capitalize duration-200 cursor-pointer ease-in-out border max-w-[266px] px-2 text-center w-full py-3 font-medium rounded-lg   text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]`}>
                        {type}
                    </aside>
                })
            }
        </section>
        <section className="flex md:flex-row    px-[2%]  md:px-[2%] lg:px-[2.5%] xl:px-[3%] flex-col  justify-start pt-8 gap-5 lg:gap-6 xl:gap-7 items-start">
            <aside className="flex  w-full md:w-fit mb-4 md:mb-0  justify-center  md:justify-start items-start">
                <aside className="w-full  flex-col p-6 md:pt-0 md:pr-0 md:mt-2  sm:w-[378] md:w-[329px]  xl:w-[521px]   flex justify-center items-center ">
                    <img className="max-w-full  object-cover object-top h-full" alt="i&s" src={items?.img[0].src} />
                    <button onClick={() => setOpenModel(true)} className="px-12 sm:px-14 cursor-pointer md:px-16  mt-5 lg:px-20 xl:px-24  rounded-lg text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] flex-shrink-0 font-semibold  py-2.5 lg:py-3 w-full xl:py-4 text-white bg-[#0057FF]">Enquiry Now</button>
                </aside>
            </aside>
            <aside className="flex gap-1 md:border-l min-h-[382px] md:min-h-[290px lg:min-h-[345px] xl:min-h-[426px]  md:pl-4 lg:pl-6 md:border-[#c7cacf] max-w-[940px]  flex-col  justify-start items-start">
                <p className="text-[#000B1D]  font-semibold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px]">{items.name}</p>
                <p className="text-[#7F848D]  font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ">{items.des}</p>
                <p className="text-[#0057FF]  font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ">{items.desHeightlight}</p>
                <p className="text-black mt-3  font-semibold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ">{items.compHead}</p>
                <ul className="w-full grid list-disc pl-5  gap-1.5 grid-cols-2">
                    {
                        items.points.map((data: string, index: number) => <li key={index} className="text-[#7F848D]   font-medium w-fit text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ">{data}</li>)
                    }
                </ul>
                <p className="text-black mt-3  font-semibold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ">{items.objTitle}</p>
                {
                    items.obj.map((data: any, index: number) => {
                        return <p key={index} className="text-[#7F848D]  f text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] "><span className="text-[#202122] font-medium">{data.head}</span> &nbsp; {data.des}</p>
                    })
                }

            </aside>
        </section>



        <aside className="px-[2%] my-16  md:px-[2%] lg:px-[2.5%] xl:px-[3%] w-full">
            <section className="px-[1%]  py-6  md:px-[1.5%] lg:px-[2%] xl:px-[2.5%] w-full bg-[#F6FAFF] border shadow-md border-[#d9eaff]">
                <p className="text-[#0057FF] font-bold text-center text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px]">{items?.bannerHead}</p>
                <p className="text-[13px] mt-2 text-[#7F848D] font-semibold max-w-[90%] mx-auto text-center sm:text-[14px] md:text-[15px] lg:text-[16px]">{items.bannerDes}</p>
            </section>
        </aside>


            <p className="text-[#000B1D]   px-[2%]  md:px-[2%] lg:px-[2.5%] xl:px-[3%] mb-5  font-semibold text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px]">Related Products</p>
            <section className="w-dvw  relative flex justify-start items-center pb-16 flex-col bg-white ">
                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    arrows={false}
                    autoPlaySpeed={3000}
                    showDots={true}
                    customDot={<CustomDot />}
                    dotListClass="flex justify-center items-center "
                    className="w-full  "
                    draggable={true}
                // customLeftArrow={<CustomLeftArrow />}
                // customRightArrow={<CustomRightArrow />}

                >

                    {
                        allProductsArray.filter((data: any) => data?.tag?.includes(subType!=="SUGAR AUTOMATION"?"Water Automation":"Sugar Automation")).map((data: Record<string, any>, index: number) => {
                            return <Link key={index} href={`/products/${data.id}/${encodeURIComponent(data.name)}`}> <aside className=" border mb-16 mx-[4%] group rounded-lg p-4 border-[#EBEDF0] shadow-md" >
                                <div className="w-full relative   shadow mb-3 border border-[#EBEDF0] rounded-lg overflow-hidden flex justify-center items-center h-[210px] sm:h-[220px] md:h-[230px] lg:h-[240px] xl:h-[255px]">
                                    <img className="max-h-[90%] object-contain object-center" src={data?.img?.[0]?.src} alt="i&s" />
                                    <p className="text-[12px] text-white group-hover:translate-y-0 transition-transform duration-500 ease-in-out translate-y-[250px] bg-[#000000a6]  absolute top-0 left-0 p-4 flex justify-center items-center text-center  w-full h-full  font-medium text-shadow-lg  sm:text-[13px] md:text-[14px] flex-col gap-2"><IoMdInformationCircle className="flex-shrink-0 text-2xl" />{data.des}</p>
                                </div>
                                <p className="text-[#323334] line-clamp-1 px-0.5 font-semibold text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] ">{data.name}</p>
                                <p className="text-[12px] line-clamp-2 min-h-[40px] px-0.5 font-medium text-[#323334] sm:text-[13px] md:text-[14px]">{data.des}</p>
                                <button className="hover:bg-[#0057FF] font-medium mt-4 rounded-lg cursor-pointer w-full flex justify-center py-2 items-center gap-2 border text-[12px] md:text-[14px] text-[#0057FF]  border-[#0057FF] hover:text-white"><IoMdCall className="scale-110" /> Enquire Now</button>
                            </aside></Link>
                        })
                    }
                </Carousel>
            </section>

    </section>
}

// const CustomLeftArrow = ({ onClick }: any) => (
//     <button
//         onClick={onClick}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
//     >
//         <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//         </svg>
//     </button>
// );

// const CustomRightArrow = ({ onClick }: any) => (
//     <button
//         onClick={onClick}
//         className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10 bg-[#0057FF] rounded-full shadow-md p-2 hover:bg-gray-100"
//     >
//         <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//         </svg>
//     </button>
// );
