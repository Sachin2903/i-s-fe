import AskAQuestion from "@/component/contactus/askaquestion";
import MapContact from "@/component/contactus/mapContact";
import SmarterOperation from "@/component/contactus/smarterOperation";

export default function ContactUs(){
    return <main id="main-landing-page" className="w-dvw  relative overflow-h-auto overflow-x-hidden">
        <AskAQuestion/>
        <MapContact/>
        <SmarterOperation/>
    </main>
}