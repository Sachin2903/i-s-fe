import Banner from "@/component/aboutus/banner";
import OurValue from "@/component/aboutus/ourValue";
import SmarterOperation from "@/component/contactus/smarterOperation";

export default function AboutUs() {
    return <main id="main-landing-page" className="w-dvw  relative overflow-h-auto overflow-x-hidden">
        <Banner />
        <OurValue/>
        <SmarterOperation />
    </main>
}