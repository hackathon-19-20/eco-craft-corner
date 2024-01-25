import React from 'react'
import clientPromise from "@/lib/mongodb";
import { cookies } from "next/headers"
import { getProducts } from "@/lib/api/products";
import { ShopButton } from "@/components/ui/button";
import { AddProducts } from '@/components/dashboard/AddProduct';


const getAllProducts = async () => {
    const client = await clientPromise;
    // getting the user details
    const emails = cookies().get("email")?.value;

    try {
        await client.connect();
        const users = client.db("eco-craft-corner").collection("users");
        const currentUser = await users.findOne({ email: emails });
        if (currentUser) {
            const productsInProduct = currentUser.product;
console.log(productsInProduct);

            if (Array.isArray(productsInProduct)) {
                const results = await getProducts({ productIds: productsInProduct });
                console.log("Results:", results);
                return results;
            } else {
                console.error("productsInCart is not an array");
            }
        }
    } catch (error) {
        console.error(`Error in get request ${error}`);
    }
};


export default async function MyProducts() {
  const res = await getAllProducts();
  // console.log(res);
  
  return (
    <div >
      <AddProducts/>
      <h1 className="text-center mb-[3rem] font-  extrabold text-[3rem]">Your Added Products</h1>
      <ul className="flex justify-around   flex-wrap">
        {res && res.map((product) => (
          <div className="shadow-xl max-w-[20rem] m-[2rem] p-[1rem] rounded-lg "  key={product?._id}>
          <li className="justify-center items-center text-center">
            <div className="items-center">
            <img className="max-w-[15rem] m-auto hover:max-w-[15.2rem] duration-500" src={product?.img} alt={product?.name} />
            </div>
            <h2 className="font-semibold text-lg">{product?.name}</h2>
            <p><b>Price</b>: ₹{product?.price}</p>
            <p>{product?.des}</p>
            <ShopButton size="sm" />
          </li>
        </div>
        ))}
      </ul>
    </div>
  )
}
