import { NextResponse, NextRequest } from "next/server";
import clientPromise from "@/lib/mongodb";
import {headers , cookies} from "next/headers"

export const POST = async (req: NextRequest) => {
  const client = await clientPromise;
  const { name, img, price, des } = await req.json();

  try {
    await client.connect();

    // Insert new product
    const products = client.db("eco-craft-corner").collection("product");
    const newProduct = await products.insertOne({ name, img, price, des });
    console.log("New Product ID:", newProduct.insertedId.toString());

    // Retrieve email from cookie
    const email = cookies().get("email")?.value;
    console.log("User Email:", email);

    // Update user document
    const users = client.db("eco-craft-corner").collection("users");
    const updateResult = await users.updateOne(
      { email : email },
      { $push: { products: newProduct.insertedId.toString() } },
    );

    console.log("Update Result:", updateResult);

    return new NextResponse("New Product Inserted", { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error Inserting Product", { status: 500 });
  }
};
