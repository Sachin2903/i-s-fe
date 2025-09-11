"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CustomDot = ({ onClick, ...rest }: any) => {
  const { active } = rest;
  return (
    <li
      className={`inline-block mx-1 cursor-pointer transition-all duration-300 ${
        active ? "bg-[#0057FF] w-[28px]" : "bg-[#C4C4C4] w-[12px]"
      } h-[12px] rounded-full`}
      onClick={() => onClick()}
    />
  );
};

const testimonial=[
  {
    name:"Amit Kumar",
    address:"Delhi",
    message:"Instruments & Systems has been our go-to partner for pressure and level transmitters. The reliability and accuracy of their iPTrans series has significantly improved our plant’s performance. Their team is knowledgeable, responsive, and understands the demands of process-critical environments."
  },
  {
    name:"Raj Verma",
    address:"Dehradun",
    message:"What sets Instruments & Systems apart is their ability to offer customized valve automation solutions with minimal lead times. From motorized valves to iTork actuators, every product reflects quality engineering and consistent performance. A solid Indian manufacturer we trust on global projects."
  },
  {
    name:"Rahul Sharma",
    address:"Haryana",
    message:"We’ve been using their smart transmitters and control valves across multiple boiler and turbine automation points. Their team not only delivers great products, but also offers valuable application support. Instruments & Systems is a true long-term partner."
  },
  {
    name:"Suresh Reddy",
    address:"Dehradun",
    message:"Their submersible and radar level transmitters have helped us maintain optimal control in our STP and ETP projects. Seamless integration, competitive pricing, and a team that actually listens — that's why we choose Instruments & Systems every time."
  },
  {
    name:"Vikas Kumar",
    address:"Dehradun",
    message:"We recently switched to I&S for our valve automation requirements and couldn’t be happier. Their butterfly valves with iTork actuators are robust and maintenance-friendly — a perfect fit for our pulp processing line. The engineering precision and build quality of the valves instill confidence"
  }
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export default function Hero4() {
  return (
    <section className="w-dvw  flex justify-start items-center pb-16 flex-col bg-white px-4">
      <h3 className="text-[24px] relative z-50 mb-10 text-center md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">
        What{" "}
       
          people
        all over the world are saying about us
      </h3>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        arrows={false}
        showDots={true}
        customDot={<CustomDot />}
        dotListClass="flex justify-center  items-center "
        className="w-full relative z-50 max-w-[1236px]"
      >
        {testimonial.map((_, index) => (
          <div
            key={index}
            className="p-6 mb-10 bg-white   border border-[#EBEDF0] mx-2 rounded-xl shadow-md text-center"
          >
            <p className="text-sm line-clamp-5 text-start text-black font-medium lg:text-base">
              {_?.message}
            </p>
            <aside className="w-full flex justify-start items-start gap-2 mt-4">
              <img
                className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex-shrink-0 rounded-full shadow-md"
                src={`https://ui-avatars.com/api/?name=${_?.name?.split(" ")?.join("+")}&background=1e40af&color=fff&rounded=true`}
                alt="User avatar"
              />
              <div className="w-full flex justify-start flex-col items-start">
                <h6 className="text-sm text-black font-semibold lg:text-base">
                  {_?.name}
                </h6>
                <p className=" text-[#97989F] font-medium text-sm">
                  {_?.address}
                </p>
              </div>
            </aside>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
