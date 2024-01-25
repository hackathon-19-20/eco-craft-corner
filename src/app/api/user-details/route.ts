import { NextResponse, NextRequest } from "next/server";
import clientPromise from "@/lib/mongodb";
import { cookies } from "next/headers"
import { getProducts } from "@/lib/api/products";

export const GET = async () => {
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
                console.log(results);
                return new NextResponse(JSON.stringify({ results }), {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            } else {
                console.error("productsInCart is not an array");
            }
        }

        return new NextResponse("LOL");
    } catch (error) {
        console.error(`Error in get request ${error}`);
        return new NextResponse("Error");
    } finally {
        client.close();
    }
};
