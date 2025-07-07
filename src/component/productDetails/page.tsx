"use client";
import { allProductsArray } from "@/data/productsData";
import Link from "next/link";
import { useState } from "react";
import { IoMdCall, IoMdInformationCircle } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SendEnquiryModal from "./sendEnquiryModel";


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


export default function ProductDetailsHelper({ product }: any) {
    const [items, setItems] = useState(product);
    const [openModel, setOpenModel] = useState(false);

    return <main className="full pb-8">

        {openModel && <SendEnquiryModal addProductName={true} name={`${product.name} , ${product.subType?.join(" / ")?.toLowerCase()}`} onClose={() => setOpenModel(false)} />}

        <section className="flex md:flex-row    px-[2%]  md:px-[2%] lg:px-[2.5%] xl:px-[3%] flex-col  justify-start pt-8 gap-5 lg:gap-6 xl:gap-7 items-start">
            <aside className="flex w-full md:w-fit mb-4 md:mb-0  justify-center  md:justify-start items-start">
                <aside className="w-full p-6 sm:w-[378] h-[382px] md:w-[329px] md:h-[290px] lg:w-[420px] lg:h-[345px] xl:w-[521px] xl:h-[426px]  flex justify-center items-center ">
                    <img className="h-full object-cover object-top " alt="i&s" src={items?.img[0].src} />
                </aside>

                <aside className="flex gap-2 ml-3 md:ml-4 lg:ml-6 flex-col">
                    {
                        items?.img.slice(1).map((data: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setItems((prev: any) => {
                                            const newImgArray = [...prev.img];
                                            const clickedIndex = index + 1;

                                            [newImgArray[0], newImgArray[clickedIndex]] = [
                                                newImgArray[clickedIndex],
                                                newImgArray[0],
                                            ];
                                            return { ...prev, img: newImgArray };
                                        });
                                    }}
                                    className="w-[80px] p-2 h-[84px] sm:w-[85px] sm:h-[89px] md:w-[88px] md:h-[95px] lg:w-[95px] lg:h-[91px] xl:w-[100px] xl:h-[96px] flex justify-center items-center border-gray-200 border shadow hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer"
                                >
                                    <img
                                        className="object-cover object-top h-full"
                                        alt="i&s"
                                        src={data.src}
                                    />
                                </div>
                            );
                        })
                    }

                </aside>
            </aside>
            <aside className="flex gap-1 md:border-l min-h-[382px] md:min-h-[290px lg:min-h-[345px] xl:min-h-[426px]  md:pl-4 lg:pl-6 md:border-[#c7cacf] max-w-[940px]  flex-col  justify-start items-start">
                <p className="text-[#7F848D]  font-semibold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] capitalize xl:text-[20px]">{items.type?.join(" / ")?.toLowerCase()}</p>
                <p className="text-[#000B1D]  font-semibold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px]">{items.name}</p>
                <p className="text-[#7F848D]  font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ">{items.des}</p>
                <p className="text-[#7F848D] mt-5  font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] ">{items.extraDes}</p>


                <button onClick={() => { setOpenModel(true) }} className="px-12 cursor-pointer sm:px-14 md:px-16  mt-5 lg:px-20 xl:px-24  rounded-lg text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] flex-shrink-0 font-semibold  py-2.5 lg:py-3 xl:py-4 text-white bg-[#0057FF]">Enquiry Now</button>

            </aside>
        </section>

        {items?.pdf?.length > 0 && <section className="w-full   px-[2%]  md:px-[2%] lg:px-[2.5%] xl:px-[3%] mt-7 md:mt-10 min-h-[350px]">
            <aside className="w-full border-[rgb(127,132,141)] border-b flex justify-start items-center ">
                <p className="text-[#7F848D] border-b-4 border-black cursor-pointer px-[5%] md:px-8 py-1.5 font-semibold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]">Brochures</p>

            </aside>
            <aside className="w-full gap-3 md:gap-5 flex justify-start items-center  py-5 sm:py-8 px-3 sm:px-6">
                {
                    items?.pdf?.map((data: any, index: number) => {
                        return <a
                            key={index}
                            href={data.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={`${product.name??"i&s"}.pdf`}
                            className="relative cursor-pointer block w-[164px] sm:w-[184px] md:w-[204px] lg:w-[224px] xl:w-[254px] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <p className="ribbon">Open PDF</p>
                            <img
                                src={data?.banner}
                                alt="Download PDF"
                                className="w-full h-auto rounded-md"
                            />
                        </a>

                    })
                }
            </aside>
        </section>}
        <p className="text-[#000B1D] mt-7 md:mt-10  px-[2%]  md:px-[2%] lg:px-[2.5%] xl:px-[3%] mb-5  font-semibold text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px]">Related Products</p>
        <section className="w-dvw  relative flex justify-start items-center pb-16 flex-col bg-white ">
            <Carousel
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                arrows={false}
                showDots={true}
                customDot={<CustomDot />}
                dotListClass="flex justify-center items-center "
                className="w-full  "
                draggable={true}

            >

                {
                    allProductsArray.filter((data: Record<string, any>) => (data.type.some((d: string) => items.type.includes(d)) && items?.id !== data?.id)
                    ).filter((data: Record<string, any>) => items.subType?.length == 0 ? true : data.subType.some((d: string) => items.subType.includes(d))
                    ).map((data: Record<string, any>, index: number) => {
                        return <Link key={index} href={`/products/${data.id}/${encodeURIComponent(data.name)}`}> <aside className=" border mb-16 group mx-[4%] rounded-lg p-4 border-[#EBEDF0] shadow-md" >
                            <div className="w-full relative shadow mb-3 border border-[#EBEDF0] rounded-lg overflow-hidden flex justify-center items-center h-[210px] sm:h-[220px] md:h-[230px] lg:h-[240px] xl:h-[255px]">
                                <img className="max-w-full h-[85%]" src={data?.img?.[0]?.src} alt="i&s" />
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

    </main>
}