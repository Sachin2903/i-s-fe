import { FaClock, FaLocationDot } from "react-icons/fa6";

export default function AskAQuestion() {
    return <main className="w-full px-[3%] lg:px-[0%] py-14 lg:flex-row flex-col  flex justify-evenly items-center gap-2 bg-[#F7FAFF] ">
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

                <aside className="w-full flex justify-start  py-4 sm:py-0 items-center gap-3 sm:gap-4 px-1">
                    <div className="bg-[#0057FF] flex-shrink-0 text-white w-[40px] sm:w-[45px] lg:w-[50px]  h-[40px] sm:h-[45px] lg:h-[50px] flex justify-center items-center rounded-full">  <FaLocationDot className="text-base sm:text-lg lg:text-xl" /></div>
                    <section className="">
                        <h3 className="text-[16px]  md:text-[18px] lg:text-[20px] xl:text-[20px] font-bold">Office Address</h3>
                        <p className="text-[12px] mt-2 md:text-[13px] lg:text-[14px] xl:text-[14px] font-medium text-[#7F848D]">30, Mohabewala Industrial Area, Dehradun, Uttarakhand</p>
                    </section>
                </aside>

            </aside>

        </aside>
        <aside className="w-full  lg:max-w-[560px]  px-5 py-6 bg-white shadow-md border border-gray-200">
            <h3 className="text-[24px]  md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Ask a question</h3>
            <p className="text-[16px] max-w-[550px]  md:text-[18px] lg:text-[20px] xl:text-[20px] font-medium text-[#7F848D]">If you have any questions, you can contact us. Please fill out the form below.</p>
            <aside className="w-full mt-6  grid grid-cols-2 gap-8">
                <input placeholder="First Name" className="text-[#7F848D] py-2   text-[14px] border-b-4  border-[#0057FF]  sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]" />
                <input placeholder="Last Name" className="text-[#7F848D]  py-2   text-[14px] border-b-4 border-[#0057FF]  sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]" />
                <input placeholder="Phone no" className="text-[#7F848D]   py-2   text-[14px] border-b-4 border-[#0057FF]  sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]" />
                <input placeholder="Email" className="text-[#7F848D]      py-2  text-[14px] border-b-4 border-[#0057FF]  sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]" />

            </aside>
            <textarea placeholder="Message" className="text-[#7F848D] mb-16 mt-8 resize-none min-h-[150px] w-full     py-2  text-[14px] border-b-4 border-[#0057FF]  sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]" />
            <button className="px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 rounded-xl flex-shrink-0 font-semibold text-base md:text-lg py-3 md:py-3 lg:py-4 xl:py-5 text-white bg-[#0057FF]">Submit Now</button>
        </aside>
    </main>
}