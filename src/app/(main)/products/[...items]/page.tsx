import ProductDetailsHelper from "@/component/productDetails/page";
import { allProductsArray } from "@/data/productsData";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

export default async function ProductDetails({ params }: any) {
  const param = await params;
  const paramsArray = param?.items;
  const product: Record<string, any> | any = allProductsArray.find(
    (data: Record<string, any>) => data.id === paramsArray?.[0]
  );

  if (!product) {
    return (
      <main className="w-full min-h-dvh flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-6">The product you're looking for does not exist or has been removed.</p>
        <Link
          href="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
        >
          Browse Products
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full mt-[35px] sm:pt-[40px] md:pt-[50px] min-h-dvh">
      <aside className="flex px-[2%] md:px-[2%] lg:px-[2.5%] xl:px-[3%] font-semibold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] justify-start items-center gap-2">
        <Link href={`/products?type=${encodeURIComponent(product.type)}`} className="capitalize text-start">
          {product.type.join(" / ")?.toLowerCase()}
        </Link>
        {
          product?.subType?.length>0? <>
            <IoMdArrowDropright />
            <p className="text-start capitalize">{product.subType?.join(" / ")?.toLowerCase()}</p>
          </>:null
        }
        <IoMdArrowDropright />
        <p className="text-start">{product.name}</p>
      </aside>
      <ProductDetailsHelper product={product} />
    </main>
  );
}
