import building from "@/assests/aboutus/buildingCircle.png";
import img1 from "@/assests/aboutus/ourValues/1.png"
import img2 from "@/assests/aboutus/ourValues/2.png"
import img3 from "@/assests/aboutus/ourValues/3.png"
import img4 from "@/assests/aboutus/ourValues/4.png"
import img5 from "@/assests/aboutus/ourValues/5.png"
import img6 from "@/assests/aboutus/ourValues/6.png"
import mission from "@/assests/aboutus/mission.png";
import vission from "@/assests/aboutus/vission.png";
import { FaFilePdf } from "react-icons/fa";

const ourValueArray = [
    {
        img: img1,
        heading: "Quality First",
        des: "We deliver reliable, high-performance solutions with uncompromised quality."
    },
    {
        img: img2,
        heading: "Client Satisfaction",
        des: "We prioritize client needs and aim to exceed expectations every time."
    },
    {
        img: img3,
        heading: "Transparency & Trust",
        des: "We build lasting relationships through honesty and consistent integrity."
    },
    {
        img: img4,
        heading: "Innovation Driven",
        des: "We embrace new ideas and technologies to deliver smarter, future-ready solutions."
    },
    {
        img: img5,
        heading: "Timely Delivery",
        des: "Fast, efficient service without compromising quality."
    },
    {
        img: img6,
        heading: "Continuous Improvement",
        des: "We constantly evolve by learning, adapting, and striving to be better every day."
    }
]

const MissionVision = [
    {
        img: mission,
        "name": "Mission",
        "description": "To design and deliver high-quality, reliable instrumentation, that integrates seamlessly into automation systems, empowering customers with long-term performance, advanced technology, and cost-effective solutions."
    },
    {
        img: vission,
        "name": "Vision",
        "description": "To be recognized globally as a trusted leader in instrumentation and automation technology, known for innovation, quality manufacturing, excellent service, and solutions that deliver proven performance in diverse automation applications."
    }
]
export default function OurValue() {
    return <section className="w-full py-16 px-[3%] lg:px-[3.5%] xl:px-[4.5%]">
        <aside className="w-full hidden lg:flex justify-center  items-center  gap-[3%] lg:gap-[3.5%] xl:gap-[4.5%]">
            <aside className="w-full text-[#7F848D] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] flex flex-col gap-5">
                <p>Instruments & Systems has been at the forefront of India's industrial automation revolution for over 40 years. Since our establishment in 1985, we've evolved from a specialized manufacturer into a comprehensive automation solutions partner, serving critical industries across India's private and government sectors.</p>
                <p>Our expertise spans the complete spectrum of industrial automation: precision-engineered control valves that regulate flow with exacting accuracy, process transmitters that deliver reliable field data under the harshest conditions, robust electric actuators designed for both quarter-turn and multi-turn applications, and integrated automation systems that bring it all together. From pressure and temperature transmitters to sophisticated flow meters, motorized valves, dampers, and actuator accessories, we manufacture solutions that power India's most demanding industrial processes.</p>
                <p>What sets us apart is our deep industry knowledge across power generation, oil and gas exploration, water treatment facilities, paper mills, sugar refineries, steel plants, chemical processing, and pharmaceutical manufacturing. Each sector brings unique challenges, and our four decades of experience have taught us that one-size-fits-all solutions simply don't work in critical applications</p>
                <p>This understanding drives our engineering philosophy. Our team combines seasoned expertise, with individual experience ranging from 15 to 40 years, with fresh innovation in automation design. We don't just manufacture components; we solve real-world problems that our clients face daily. When standard solutions fall short, we engineer custom actuator systems that deliver smooth operation, exceptional longevity, and seamless integration whether you're building new facilities or retrofitting existing infrastructure.</p>
            </aside>
            <img className="w-[350px]  h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[544px] xl:h-[544px]" src={building.src} alt="i&s" />
        </aside>
        <aside className="w-full text-[#7F848D] text-[14px] sm:text-[16px] md:text-[18px] mt-8 lg:text-[20px] flex flex-col gap-5">

            <p>
                Our collaborative approach means we work closely with each client to understand their specific operational challenges. This partnership model has led us to develop proprietary actuator technologies that address common industry pain points: systems that maintain precision under extreme conditions, components that integrate effortlessly with existing infrastructure, and solutions built to perform reliably for decades, not just years.</p>
            <p>At Instruments & Systems, we measure success not just by the products we ship, but by the critical processes we help our clients optimize, the downtime we help them avoid, and the operational excellence we help them achieve. After four decades of innovation, we remain committed to engineering automation solutions that don't just meet today's requirements: they anticipate tomorrow's challenges.</p>
        </aside>
        <aside className="w-full lg:hidden text-[#7F848D] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed flex flex-col items-center gap-6 text-center lg:text-left">
            <p className="max-w-4xl">Instruments & Systems has been at the forefront of India's industrial automation revolution for over 40 years. Since our establishment in 1985, we've evolved from a specialized manufacturer into a comprehensive automation solutions partner, serving critical industries across India's private and government sectors.</p>
            <p className="max-w-4xl">Our expertise spans the complete spectrum of industrial automation: precision-engineered control valves that regulate flow with exacting accuracy, process transmitters that deliver reliable field data under the harshest conditions, robust electric actuators designed for both quarter-turn and multi-turn applications, and integrated automation systems that bring it all together. From pressure and temperature transmitters to sophisticated flow meters, motorized valves, dampers, and actuator accessories, we manufacture solutions that power India's most demanding industrial processes.</p>
            <p className="max-w-4xl">What sets us apart is our deep industry knowledge across power generation, oil and gas exploration, water treatment facilities, paper mills, sugar refineries, steel plants, chemical processing, and pharmaceutical manufacturing. Each sector brings unique challenges, and our four decades of experience have taught us that one-size-fits-all solutions simply don't work in critical applications</p>

            <img
                src={building.src}
                alt="Instruments and Systems Building"
                className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[544px] rounded-lg mx-auto"
            />

            <p className="max-w-4xl">This understanding drives our engineering philosophy. Our team combines seasoned expertise, with individual experience ranging from 15 to 40 years, with fresh innovation in automation design. We don't just manufacture components; we solve real-world problems that our clients face daily. When standard solutions fall short, we engineer custom actuator systems that deliver smooth operation, exceptional longevity, and seamless integration whether you're building new facilities or retrofitting existing infrastructure.</p>
            <p className="max-w-4xl">
                Our collaborative approach means we work closely with each client to understand their specific operational challenges. This partnership model has led us to develop proprietary actuator technologies that address common industry pain points: systems that maintain precision under extreme conditions, components that integrate effortlessly with existing infrastructure, and solutions built to perform reliably for decades, not just years.</p>
            <p className="max-w-4xl">At Instruments & Systems, we measure success not just by the products we ship, but by the critical processes we help our clients optimize, the downtime we help them avoid, and the operational excellence we help them achieve. After four decades of innovation, we remain committed to engineering automation solutions that don't just meet today's requirements: they anticipate tomorrow's challenges.</p>
        </aside>

        <aside className="w-full flex-col md:flex-row mt-16 flex justify-center items-center gap-6 ">
            {
                MissionVision?.map((data: any,index:number) => {
                    return <aside key={index} className="w-full  flex-col flex justify-start items-center gap-1 border border-[#e6ecf7] shadow-md bg-[#F7FAFF] max-w-[611px] px-4 py-6">
                        <div className="w-[85px] border border-gray-200 shadow-md flex justify-center items-center h-[85px] p-4 rounded-full bg-white"><img src={data.img.src} alt={data.name} className=" h-full" /></div>
                        <h3 className="text-[24px] font-bold sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px]">{data?.name}</h3>
                        <p className="text-[16px] max-w-[90%] font-medium text-center text-[#7F848D] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]">{data?.description}</p>
                    </aside>
                })
            }
        </aside>
<section className="flex  mt-8 flex-wrap sm:mt-16 justify-center w-full items-center gap-5">
            <a href="/pdf/company.pdf" target="_blank" className="bg-[#3461FF] text-sm font-semibold text-white flex  justify-center w-fit  rounded-md items-center gap-3 sm:text-base py-4 px-8"><FaFilePdf />Company Profile</a>
            <a href="/pdf/technicalcatalogue.pdf" target="_blank" className="bg-[#3461FF] text-sm font-semibold text-white flex justify-center  w-fit  rounded-md items-center gap-3 sm:text-base py-4 px-8"><FaFilePdf />Technical Cataolgue</a>
        </section>
        <aside className="py-20">
            <h3 className="text-[24px] w-full justify-center flex items-center md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">Our Value</h3>
            <aside className="grid gap-6 lg:gap-8 mt-10 md:mt-14 grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                    ourValueArray.map((data: any, index: number) => {
                        return <aside className="flex px-5 py-6 md:py-4.5 shadow-md bg-[#F7FAFF]  justify-start items-center gap-5 md:gap-4 lg:gap-5 xl:gap-6" key={index}>
                            <img className="w-[43.88px] h-[41.98px]" src={data.img.src} alt={data.heading} />
                            <aside>
                                <h4 className=" font-semibold text-[18px] lg:text-[19px] xl:text-[20px]">{data.heading}</h4>
                                <p className="font-medium text-[#7F848D] text-[14px]">{data.des}</p>
                            </aside>
                        </aside>
                    })
                }
            </aside>
        </aside>

    </section>
}
