import india from "@/assests/landingPage/footer/madeIndia.png";
import logo from "@/assests/landingPage/hero1/iands_gray_logo.png";
import Link from "next/link";
export default function Footer() {
    return <footer id="i&sfotter" className="pt-10 sm:pt-13 xl:pt-14 flex md:flex-row flex-col justify-between items-start gap-1 pb-2 sm:pb-4 w-full bg-[#000B1D] px-[2%] lg:px-[3%] xl:px-[4%]">
        <aside className="flex md:max-w-[50%] w-full justify-start items-center md:items-start flex-col gap-2 md:gap-4">
            <Link href="/"> <img src={logo.src} alt="i&s" className="h-[40px]  md:h-[45px] lg:h-[55.37px]" /></Link>
            <p className="md:text-[17px]  lg:text-[18px] md:w-full max-w-[550px]  text-center md:text-start font-normal text-[#7F848D] text-[16px]">Leveraging on the facilities, technology and in depth knowledge about the different products such as pressure transmitters and indicator...</p>
            <img src={india.src} alt="madeinindia" className="h-[63px]  md:h-[70px] lg:h-[77px]" />
        </aside>
        <aside className="w-full mt-10 md:mt-0 flex gap-[3%] lg:gap-[8%] justify-evenly md:justify-center items-start">
            <ul className="flex flex-shrink-0 flex-col text-white justify-start  text-sm md:text-base font-medium items-start gap-2 lg:gap-3">
                <Link href="/"><li>HOME</li></Link>
                <Link href="/products"><li>PRODUCTS</li></Link>
                <Link href="/industry"><li>INDUSTRY</li></Link>
                <Link target="_blank" href="https://blog.instruments-systems.in"><li>BLOGS</li></Link>
                <Link href="/aboutus"><li>ABOUT US</li></Link>
                <Link href="/contactus"><li>CONTACT US</li></Link>
            </ul>
            <ul className="flex flex-shrink-0 flex-col text-white justify-start  text-sm md:text-base font-medium items-start gap-2 lg:gap-3">
                <li>Product Category</li>
                <Link href="/products?type=CONTROL VALVES"><li className="text-[#7F848D]">Control valves</li></Link>
                <Link href="/products?type=TRANSMITTERS"><li className="text-[#7F848D]">Transmitters</li></Link>
                <Link href="/products?type=AUTOMATION"><li className="text-[#7F848D]">Automation</li></Link>
                <Link href="/products?type=MOTORIZED ACTUATORS"><li className="text-[#7F848D]">Motorized actuators</li></Link>
                <Link href="/products?type=FLOW METER"><li className="text-[#7F848D]">Flow meter</li></Link>
            </ul>
            <ul className="flex flex-col text-white justify-start  text-sm md:text-base font-medium items-start gap-2 lg:gap-3">
                <li>Address</li>
                <li className="text-[#7F848D] max-w-[200px]">30, Mohabewala Industrial Area, Dehradun 248002, Uttarakhand, India</li>
            </ul>
        </aside>
    </footer>
}