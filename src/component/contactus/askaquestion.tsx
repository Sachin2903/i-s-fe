import { FaClock, FaLocationDot } from "react-icons/fa6";
import AskQuestionForm from "./askQuestionForm";
import Link from "next/link";

export default function AskAQuestion() {
    return <main className="w-full px-[3%] lg:px-4 py-14 lg:flex-row flex-col  flex justify-evenly items-center gap-2 bg-[#F7FAFF] ">
        <aside className="w-full  mb-16 lg:mb-0 lg:max-w-[650px]">
            <h3 className="text-[24px]  md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Contact Us</h3>
            <p className="text-[16px] max-w-[550px]  md:text-[18px] lg:text-[20px] xl:text-[20px] font-medium text-[#7F848D]">If you have any questions, you can contact us. Please fill out the form below. </p>
            <aside className="w-full shadow-md border border-gray-100 bg-white px-5 py-3 sm:py-5 flex sm:flex-row flex-col justify-center items-center gap-4 mt-5 sm:mt-6 md:mt-8 lg:mt-10">
                <aside className="w-full flex justify-start items-center gap-3 sm:gap-4 px-1 sm:border-r-4 border-b-4 sm:border-b-0 py-4 sm:py-0 border-[#0057FF]  ">
                    <div className="bg-[#0057FF] flex-shrink-0 text-white w-[40px] sm:w-[45px] lg:w-[50px]  h-[40px] sm:h-[45px] lg:h-[50px] flex justify-center items-center rounded-full"> <FaClock className="text-base sm:text-lg lg:text-xl" /></div>
                    <section className="">
                        <h3 className="text-[16px]  md:text-[18px] lg:text-[20px] xl:text-[20px] font-bold">Working Hours :</h3>
                        <p className="text-[12px] mt-2  md:text-[13px] lg:text-[14px] xl:text-[14px] font-medium text-[#7F848D]">Mon-Sat : 9:30am to 6:00 pm</p>

                    </section>
                </aside>

                <Link target="_blank" href="https://maps.app.goo.gl/EufknxR5U1a2R2hS6?g_st=aw" className="w-full  cursor-pointer flex justify-start  py-4 sm:py-0 items-center gap-3 sm:gap-4 px-1">
                    <div className="bg-[#0057FF] flex-shrink-0 text-white w-[40px] sm:w-[45px] lg:w-[50px]  h-[40px] sm:h-[45px] lg:h-[50px] flex justify-center items-center rounded-full">  <FaLocationDot className="text-base sm:text-lg lg:text-xl" /></div>
                    <section className="">
                        <h3 className="text-[16px]  md:text-[18px] lg:text-[20px] xl:text-[20px] font-bold">Office Address</h3>
                        <p className="text-[12px] mt-2 md:text-[13px] lg:text-[14px] xl:text-[14px] font-medium text-[#7F848D]">30, Mohabewala Industrial Area, Dehradun 248002, Uttarakhand, India</p>
                    </section>
                </Link>

            </aside>

        </aside>
       <AskQuestionForm/>
    </main>
}