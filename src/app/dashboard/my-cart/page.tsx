import React from 'react'
import clientPromise from "@/lib/mongodb";
import { cookies } from "next/headers"
import { getProducts } from "@/lib/api/products";
import { ShopButton } from "@/components/ui/button";


const getAllProducts = async () => {
    const client = await clientPromise;
    // getting the user details
    const emails = cookies().get("email")?.value;

    try {
        await client.connect();
        const users = client.db("eco-craft-corner").collection("users");
        const currentUser = await users.findOne({ email: emails });
        if (currentUser) {
            const productsInCart = currentUser.cart;

            if (Array.isArray(productsInCart)) {
                const results = await getProducts({ productIds: productsInCart });
                return results;
            } else {
                console.error("productsInCart is not an array");
            }
        }
    } catch (error) {
        console.error(`Error in get request ${error}`);
    }
};


export default async function MyCart() {
  const res = await getAllProducts();
  // console.log(res);
  
  return (
    <div >
      <h1 className="text-center mb-[3rem] font-  extrabold text-[3rem]">Your Cart</h1>
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
          </li>
        </div>
        ))}
      </ul>
    </div>
  )
}
