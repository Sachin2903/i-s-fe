import textDesign from "@/assests/landingPage/textDesing.png";
const numbers = [
    {
        num: 5,
        title: "Services",
        plus:false
    },
    {
        num: 150,
        title: "Products",
        plus:true
    },
    {
        num: 100,
        title: "Clients",
        plus:true
    },
    {
        num: 500,
        title: "Suppliers",
        plus:true
    }
]
export default function Hero3() {
    return <section className="w-dvw relative  flex justify-start items-center sm:py-8  py-6 md:py-10 lg:py-12 xl:py-14 flex-col bg-white">
        <h3 className="text-[24px] text-center md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Our <span className="relative"><img src={textDesign.src} className="absolute -bottom-2 left-0 w-full" alt="text_design" />Growth</span> Story</h3>
        <section className="w-full my-10 flex-wrap mx-auto max-w-[1100px] flex justify-evenly items-center  sm:flex-row flex-col  gap-5 sm:gap-3 lg:gap-4 xl:gap-5">
            {
                numbers.map((data: Record<string, any>, index: number) => {
                    return <aside key={index} className="flex-col flex justify-start  items-center">
                        <h4 className="text-[#0057FF] font-bold text-[60px] lg:text-[70px] xl:text-[85px]">{data?.num}{data?.plus&&"+"}</h4>
                        <h6 className="text-[#000B1D] w-fit  mt-2  font-normal   text-[22px] lg:text-[26px] ">{data?.title}</h6>

                    </aside>
                })
            }

        </section>
    </section>
}