import Navbar from "./navbar";
import and_logo from "@/assests/landingPage/hero1/andLogo.png";

export default function Hero1() {
    return (
        <section className="relative w-full h-screen">
            <Navbar color={false} />

             <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full z-10 absolute top-0 left-0 object-cover object-top h-full"
            >
                <source src="/intro.mp4" type="video/mp4" />
            </video> 
            <section className="flex px-[3%] lg:px-[4%] xl:px-[5%] flex-col justify-evenly items-center w-full h-full ">
                <aside className="text-[50px] relative z-10 sm:text-[55px]   flex text-shadow-lg/30 justify-start flex-col items-center lg:items-start md:text-[65px]  leading-14 sm:leading-20 xl:leading-24 lg:text-[75px] xl:text-[96px]   w-full text-white  font-bold">
                    <p>Welcome to</p>
                    <h1 className="flex sm:flex-row flex-col justify-start gap-3 md:gap-4 lg:gap-5 items-center">Instruments <img src={and_logo.src} alt="i&s" className="w-[68px] md:w-[83px] lg:w-[93px] xl:w-[113px]" /> Systems</h1>
                </aside>
                <aside className="flex w-full relative z-10 justify-center  lg:justify-start items-center flex-wrap    gap-5 sm:gap-8">
                    <button className="px-10 sm:px-12 md:px-14 lg:px-16 xl:px-20 rounded-xl flex-shrink-0 font-semibold text-base md:text-lg py-4 md:py-4 lg:py-5 xl:py-6 text-[#0057FF] bg-white">Learn More</button>
                    <button className="px-10 sm:px-12 md:px-14 lg:px-16 xl:px-20 rounded-xl flex-shrink-0 font-semibold text-base md:text-lg py-4 md:py-4 lg:py-5 xl:py-6 text-white bg-[#0057FF]">Online Enquiry</button>
                </aside>
            </section>




        </section>)
}