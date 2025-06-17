import ProductDetailsHelper from "@/component/productDetails/page";
import { IoMdArrowDropright } from "react-icons/io";

export default async function ProductDetails({ params }: any) {
    const param = await params;
    const paramsArray = param?.items;

    return <main className="w-full mt-[35px] sm:pt-[40px] md:pt-[50px]  min-h-dvh ">
        <aside className="flex   px-[2%]   md:px-[2%] lg:px-[2.5%] xl:px-[3%] font-semibold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] justify-start items-center gap-2">
            <p className=" text-start">Control Valves</p>
            <IoMdArrowDropright />
            <p className=" text-start">Ball Control Valve</p>
        </aside>
        <ProductDetailsHelper/>
    </main>
}