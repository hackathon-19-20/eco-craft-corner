import { NextResponse, NextRequest } from "next/server";
import clientPromise from "@/lib/mongodb";
import {headers , cookies} from "next/headers"

export const POST = async (req: NextRequest) => {
  const client = await clientPromise;
  const { name, img, price, des} = await req.json();
  
  try {
    await client.connect();
    const products = client.db("eco-craft-corner").collection("product");
    const newProduct = await products.insertOne({name:name, img:img, price:price, des:des});
    
    const email = cookies().get("email");
    const users = client.db("eco-craft-corner").collection("users");

    await users.updateOne(
        {email: email},
        {$push : {"products": newProduct.insertedId}},   
    );

    return new NextResponse("New Product Inserted",{status: 201})
  } catch (error) {
    console.log(error);
    
  }
};
