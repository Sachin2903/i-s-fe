import { IoMdCall } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import map_location from "@/assests/ins_location_map.png"
import Link from "next/link"
const contactUsData = [
    {
        img: <IoMdCall className="bg-white text-4xl sm:text-5xl rounded-full text-[#3461FF] p-1.5 sm:p-2 border border-gray-200" />,
        name: "Phone Number :",
        data: "+919720870870"
    },
    {
        img: <MdEmail className="bg-white text-4xl sm:text-5xl rounded-full text-[#3461FF] p-1.5 sm:p-2 border border-gray-200" />,
        name: "For Domestic Enquiries :",
        data: "sales@instruments-systems.com"
    },
    {
        img: <MdEmail className="bg-white text-4xl sm:text-5xl rounded-full text-[#3461FF] p-1.5 sm:p-2 border border-gray-200" />,
        name: "For International Enquiries :",
        data: "intlsales@instruments-systems.in"
    }
]
export default function MapContact() {
    return <main className="w-full px-[3%] lg:px-4 py-14 lg:flex-row flex-col  flex justify-evenly items-center gap-2 bg-white ">
        <aside className="w-full  mb-4 lg:mb-0 lg:max-w-[650px]">
            <Link target="_blank" href="https://maps.app.goo.gl/EufknxR5U1a2R2hS6?g_st=aw" className=""><img src={map_location.src} className="w-full lg:max-w-[580px] object-cover object-center mx-auto" alt="i&s_location" /></Link>

        </aside>
        <aside className="w-full  lg:max-w-[560px]  px-5 py-6 bg-white ">
            <h3 className="text-[24px]  md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Contact us</h3>
            <aside className="w-full mt-4 sm:mt-5 flex justify-start flex-col items-start gap-5 sm:gap-6 bg-[#F7FAFF] shadow-md lg:max-w-[511px] py-5 px-4">
                {
                    contactUsData.map((data: any, index: number) => {
                        return <aside className="flex justify-start items-start gap-3" key={index}>
                            {data.img}
                            <div>
                                <p className="font-medium text-[14px] text-[#7F848D] sm:text-[15px] md:text-[16px]">{data.name}</p>
                                <p className="font-medium text-[14px] text-[#7F848D] sm:text-[15px] md:text-[16px]">{data.data}</p>
                            </div>
                        </aside>
                    })
                }

            </aside>
        </aside>
    </main >
}