import CopyRight from "@/component/landingPage/copyRight";
import Footer from "@/component/landingPage/footer";
import Hero1 from "@/component/landingPage/hero1";
import Hero2 from "@/component/landingPage/hero2";
import Hero3 from "@/component/landingPage/hero3";
import Hero4 from "@/component/landingPage/hero4";
import Hero5 from "@/component/landingPage/hero5";
import KnowMore from "@/component/landingPage/knowMore";

export default function Home() {
  return (<main id="main-landing-page" className="w-dvw h-dvh relative overflow-h-auto overflow-x-hidden">
    <Hero1 />
    <Hero2/>
    <Hero3/>
    <Hero4/>
    <Hero5/>
    <KnowMore/>
    <Footer/>
    <CopyRight/>
  </main>
  );
}
