import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req: NextRequest) {
    const { email } = await req.json();
    try {
        const client = await clientPromise
        await client.connect();
        const users = client.db('eco-craft-corner').collection('users')
        const res = users.updateOne({ email: email }, { $set: { cart: [] } })
        return new NextResponse("Successfully placed the order", { status: 201 })
    } catch (error) {
        console.log(error);
    }
}