"use client";

import ProductsHelper from "@/component/productDetails/product";
import { Suspense } from "react";

export default function Product() {
    return <Suspense fallback={<></>}>
        <ProductsHelper />
    </Suspense>
}