import banner from "@/assests/aboutus/banner.png";
export default function Banner() {
    return <section className="relative w-full h-[90vh]">
        <img
            src={banner.src} alt="i&s"
            className="w-full z-10 absolute top-0 left-0 object-cover object-top h-full"
        />
        <section className="flex   px-[3%] lg:px-[4%] xl:px-[5%] flex-col justify-end pb-14 items-start w-full h-full ">
            <aside className="text-[50px] relative z-10 sm:text-[55px]   flex text-shadow-lg/30 justify-start flex-col  items-start lg:items-start md:text-[65px]   lg:text-[75px] xl:text-[96px] sm:leading-14 leading-12 lg:leading-16 w-full text-white  font-bold">
                <p>About us</p>
                <p className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-medium">Welcome to Instruments & Systems</p>
            </aside>
        </section>
    </section>
}