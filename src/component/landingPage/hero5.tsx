"use client";
import client from "@/assests/landingPage/hero5/client.png";
import client1 from "@/assests/landingPage/hero5/client1.png";
import client2 from "@/assests/landingPage/hero5/client2.png";
import client3 from "@/assests/landingPage/hero5/client3.png";
import client4 from "@/assests/landingPage/hero5/client4.png";
import client5 from "@/assests/landingPage/hero5/client5.png";
import client6 from "@/assests/landingPage/hero5/client6.png";
import client7 from "@/assests/landingPage/hero5/client7.png";
import client8 from "@/assests/landingPage/hero5/client8.png";
import client9 from "@/assests/landingPage/hero5/client9.png";
import client10 from "@/assests/landingPage/hero5/client10.png";
import client11 from "@/assests/landingPage/hero5/client11.png";
const array = [
    client,
    client1,client2,client3,client4,client5,client6,client7,client8,client9,client10,client11
];
export default function Hero5() {
    return <section className="w-dvw relative  min-h-[dvh] flex justify-start items-center pb-16 flex-col bg-white">
        <h3 className="text-[24px] relative z-50 mb-10 md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Our Clients</h3>
        <div className="w-full flex overflow-hidden ">
            <div className="flex w-full relative z-50 flex-shrink-0 infinite-scroll">

                {[...Array(2)].map((_, idx) => (
                    <div key={idx} className="flex min-w-full flex-shrink-0 gap-10 px-6 items-center">
                        {array.map((src, i) => (
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