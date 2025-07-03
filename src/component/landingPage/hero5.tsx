"use client";

import { IndustryDataArray } from "@/data/industryData";

export default function Hero5() {
    return <section className="w-dvw relative  min-h-[dvh] flex justify-start items-center pb-16 flex-col bg-white">
        <h3 className="text-[24px] relative z-50 mb-10 md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Our Clients</h3>
        <div className="w-full flex overflow-hidden ">
            <div className="flex w-full relative z-50 flex-shrink-0 infinite-scroll">

                {[...Array(2)].map((_, idx) => (
                    <div key={idx} className="flex min-w-full flex-shrink-0 gap-10 px-6 items-center">
                        {IndustryDataArray?.map((data:Record<string,any>)=>data?.img).map((src, i) => (
                            <img
                                key={`${idx}-${i}`}
                                src={src.src}
                                alt={`img-${i}`}
                                className="w-20  h-20 md:w-22 md:h-22 lg:h-24 lg:w-24 xl:w-26 xl:h-26 object-cover rounded-md"
                            />
                        ))}
                    </div>
                ))}

            </div>
            
        </div>
    </section>
}