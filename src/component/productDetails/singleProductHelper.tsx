import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdInformationCircle, IoMdCall } from "react-icons/io";
import Image from "next/image";

const SingleProductHelper = ({ product: data }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const changeImage = () => {
      const randomDelay = Math.floor(Math.random() * (8 - 3 + 1) + 3) * 1000;

      timer = setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === data.img.length - 1 ? 0 : prevIndex + 1
        );
        changeImage(); 
      }, randomDelay);
    };

    changeImage();

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <Link
      className="border sm:w-[275px] w-[215px] md:w-[285px] lg:w-[295px] xl:w-[315px] rounded-lg p-4 border-[#EBEDF0] shadow-md group"
      href={`/products/${data.id}/${encodeURIComponent(data.name)}`}
    >
      <div className="w-full relative shadow mb-3 border border-[#EBEDF0] rounded-lg overflow-hidden flex justify-center items-center h-[210px] sm:h-[220px] md:h-[230px] lg:h-[240px] xl:h-[255px]">
        <Image
          className="max-h-[90%] object-contain object-center transition-opacity duration-700"
          src={data?.img?.[currentImageIndex??0]}
          alt="i&s"
        />
        <p className="text-[12px] text-white group-hover:translate-y-0 transition-transform duration-500 ease-in-out translate-y-[250px] bg-[#000000a6] absolute top-0 left-0 p-4 flex justify-center items-center text-center w-full h-full font-medium text-shadow-lg sm:text-[13px] md:text-[14px] flex-col gap-2">
          <IoMdInformationCircle className="flex-shrink-0 text-2xl" />
          {data.des}
        </p>
      </div>
      <p className="text-[#323334] line-clamp-2 min-h-[60px] px-0.5 font-semibold text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] ">
        {data.name}
      </p>
      <button className="hover:bg-[#0057FF] font-medium mt-4 rounded-lg cursor-pointer w-full flex justify-center py-2 items-center gap-2 border text-[12px] md:text-[14px] text-[#0057FF] border-[#0057FF] hover:text-white">
        <IoMdCall className="scale-110" /> Enquire Now
      </button>
    </Link>
  );
};

export default SingleProductHelper;
