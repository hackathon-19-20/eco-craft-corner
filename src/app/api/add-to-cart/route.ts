import { NextResponse, NextRequest } from "next/server";
import clientPromise from "@/lib/mongodb";
import { headers, cookies } from "next/headers"

export const POST = async (req: NextRequest) => {
    try {
        const client = await clientPromise;
        await client.connect();

        const {id} = await req.json();
        const email = cookies().get("email")?.value;

        const users = client.db("eco-craft-corner").collection("users");
        await users.updateOne(
            { email: email },
            { $push: { cart: id } },
        );
        return new NextResponse("Product Successfully added to Cart", { status: 201 });
    } catch (error) {
        return new NextResponse("Error Inserting Product to Cart" , { status: 500 });
    }
};
