import SmarterOperation from "@/component/contactus/smarterOperation";
import IndustryHelper from "@/component/industry/industryHelper";
import { Suspense } from "react";

export default function Industry() {
    return <Suspense fallback={<></>}>
        <IndustryHelper />
        <SmarterOperation />
    </Suspense>
}