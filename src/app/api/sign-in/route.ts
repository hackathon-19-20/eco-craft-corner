import { NextResponse, NextRequest } from "next/server";
import clientPromise from "@/lib/mongodb";

export const POST = async (req: NextRequest) => {
  const client = await clientPromise;
  // getting the user details
  const { email, password } = await req.json();


  if ( !email || !password) {
    return new NextResponse("Missing Fields! ", { status: 400 });
  }

  try {
    await client.connect();
    const users = client.db("eco-craft-money").collection("users");
    
    
  } catch (error) {
    
  }
};
