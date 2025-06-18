"use client";

import textDesign from "@/assests/landingPage/textDesing.png";
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
    <section className="w-dvw relative flex justify-start items-center pb-16 flex-col bg-white px-4">
      <h3 className="text-[24px] mb-10 text-center md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold">
        What{" "}
        <span className="relative inline-block">
          <img
            src={textDesign.src}
            className="absolute -bottom-1 left-0 w-full"
            alt="i&s"
          />
          people
        </span>{" "}
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
        dotListClass="flex justify-center items-center "
        className="w-full max-w-[1236px]"
      >
        {new Array(10).fill(0).map((_, index) => (
          <div
            key={index}
            className="p-6 mb-10 bg-white border border-[#EBEDF0] mx-2 rounded-xl shadow-md text-center"
          >
            <p className="text-sm text-start text-black font-medium lg:text-base">
              Lorem ipsum dolor sit amet consectetur. Quam libero viverra
              faucibus condimentum.
            </p>
            <aside className="w-full flex justify-start items-start gap-2 mt-4">
              <img
                className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex-shrink-0 rounded-full shadow-md"
                src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
                alt="User avatar"
              />
              <div className="w-full flex justify-start flex-col items-start">
                <h6 className="text-sm text-black font-semibold lg:text-base">
                  Name Surname
                </h6>
                <p className="text-xs text-[#97989F] font-medium lg:text-sm">
                  Location
                </p>
              </div>
            </aside>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
