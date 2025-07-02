import building from "@/assests/aboutus/buildingCircle.png";
import img1 from "@/assests/aboutus/ourValues/1.png"
import img2 from "@/assests/aboutus/ourValues/2.png"
import img3 from "@/assests/aboutus/ourValues/3.png"
import img4 from "@/assests/aboutus/ourValues/4.png"
import img5 from "@/assests/aboutus/ourValues/5.png"
import img6 from "@/assests/aboutus/ourValues/6.png"

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
export default function OurValue() {
    return <section className="w-full py-16 px-[3%] lg:px-[3.5%] xl:px-[4.5%]">
        <aside className="w-full hidden lg:flex justify-center  items-center  gap-[3%] lg:gap-[3.5%] xl:gap-[4.5%]">
            <aside className="w-full text-[#7F848D] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] flex flex-col gap-5">
                <p>Leveraging on the facilities, technology and in depth knowledge about the diﬀerent products such as Pressure Transmitter, Diﬀerential Pressure Transmitter, Temperature Transmitter, Flow Meter, Electric Actuator (Multi Turn/Quarter Turn), Control Valve and Accessories, Power Cylinder available with us, we have created a niche for ourselves.</p>
                <p>These products are largely used and demanded by our clients in the global arena in various industries. Committed to quality, we have left no loopholes in manufacturing the best quality measuring of our products.</p>
                <p>As a "Instruments & Systems" we are a team of expert engineers, having vide and huge practical as well as online  field experience of almost 15 to 70 years in electrical actuators, motorized values, dampers, etc for Its design manufacturing, retrofitting, installations and it's commissioning in various private and Govt sectors. Over these period with our strong marketing analysis and customer's-relation & with their valued feedback we come to know the major problems and loop-holes in the automation area for electrical actuators.</p>
                <p>So keeping all these points in mind and to meet customer's exact requirements, we have started our own designed high quality and high performance user-friendly electrical actuators, motorized valves and dampers.</p>
            </aside>
            <img className="w-[350px]  h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[544px] xl:h-[544px]" src={building.src} alt="i&s" />
        </aside>
        <aside className="w-full lg:hidden text-[#7F848D] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed flex flex-col items-center gap-6 text-center lg:text-left">
            <p className="max-w-4xl">
                Leveraging the facilities, technology, and deep product knowledge of Pressure Transmitters, Differential Pressure Transmitters, Temperature Transmitters, Flow Meters, Electric Actuators (Multi Turn/Quarter Turn), Control Valves, Accessories, and Power Cylinders, we have carved a niche for ourselves.
            </p>

            <p className="max-w-4xl">
                These products are widely used and highly demanded across global industries. Committed to quality, we ensure precision in manufacturing top-grade measurement instruments without compromise.
            </p>

            <img
                src={building.src}
                alt="Instruments and Systems Building"
                className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[544px] rounded-lg mx-auto"
            />

            <p className="max-w-4xl">
                As "Instruments & Systems", our expert team comprises engineers with 15 to 70 years of extensive field and online experience in electrical actuators, motorized valves, and dampers—covering design, manufacturing, retrofitting, installation, and commissioning in both private and government sectors. Through in-depth market analysis and continuous client feedback, we've identified key issues in actuator automation and taken steps to resolve them.
            </p>

            <p className="max-w-4xl">
                Keeping these insights in mind, we have designed and launched our own high-performance, user-friendly electrical actuators, motorized valves, and dampers to precisely meet customer requirements.
            </p>
        </aside>


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