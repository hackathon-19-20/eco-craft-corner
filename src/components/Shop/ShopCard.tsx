"use client"
import React from 'react'
import { Button } from "@/components/ui/button";
import clientPromise from '@/lib/mongodb';

function ShopCard({ productArray }: { productArray: string }) {
    
    const products: Product[] | null = JSON.parse(productArray)
    const submitHandler = async (id: string) => {
        const res = await fetch("/api/add-to-cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id }),
        })
        
        if(res.ok){
            alert("Product added to cart sucessfully");
        }
    }

    return (
        <div>
            <ul className="flex justify-around   flex-wrap">
                {products && products.map((product) => (
                    <div className="shadow-xl max-w-[20rem] max-h-[50rem] m-[2rem] p-[1rem] rounded-lg " key={product._id}>
                        <li className="justify-center items-center text-center" >
                            <div className="items-center">
                                <img className="max-w-[15rem] m-auto hover:max-w-[15.2rem] duration-500" src={product.img} alt={product.name} />
                            </div>
                            <h2 className="font-semibold text-lg">{product.name}</h2>
                            <p><b>Price</b>: ₹{product.price}</p>
                            <p>{product.des}</p>
                            <form onSubmit={() => { submitHandler(product._id) }}>
                                <Button id={product._id} className=' mt-3 hover:bg-primary-buttonHover hover:text-gray-800'>Add to cart</Button>
                            </form>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShopCard
