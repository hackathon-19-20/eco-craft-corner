import React from "react";
import { AddProducts } from "@/components/dashboard/AddProduct";

export default function MyProducts() {
  return (
    <>
      <div className="flex justify-center items-center">
        <AddProducts />
      </div>
      <div>My Products</div>
    </>
  );
}
