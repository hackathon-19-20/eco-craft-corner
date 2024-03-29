import { NextResponse, NextRequest } from "next/server";
import clientPromise from "@/lib/mongodb";
const bcrypt = require("bcrypt");
const saltRounds = 10;



export async function POST(req: NextRequest, res: NextResponse) {
  const client = await clientPromise;
  // getting the user details
  const { name, email, password, phone } = await req.json();
  

  if (!name || !email || !password) {
    return new NextResponse("Missing Fields! ", { status: 400 });
  }

  try {
    await client.connect();
    const users = client.db("eco-craft-corner").collection("users");
    const userExist = await users.findOne({ email: email });
    
    // If user already exists in db
    if (userExist) {
      
      return new NextResponse("User already exists! ", { status: 422 });

    } else {
      //inserting user details in db
      

      const products:string[] = []
      const cart:string[] = []
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const result = await users.insertOne({ name, email, password:hashedPassword, phone,products ,cart });
      return new NextResponse("User registered! ", { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return new NextResponse("Error registering user! ", {
      status: 500,
    });
  } finally {
    await client.close();
  }
}
