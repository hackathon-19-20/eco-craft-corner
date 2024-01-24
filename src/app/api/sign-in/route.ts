import { NextResponse, NextRequest } from "next/server";
import clientPromise from "@/lib/mongodb";
import {headers , cookies} from "next/headers"

export const POST = async (req: NextRequest) => {
  const client = await clientPromise;
  // getting the user details
  const { email, password } = await req.json();

  if (!email || !password) {
    return new NextResponse("Missing Fields! ", { status: 400 });
  }

  try {
    await client.connect();
    const users = client.db("eco-craft-corner").collection("users");
    const currentUser = await users.findOne({ email: email });
    // const id = currentUser?._id;
    // console.log(currentUser);
    // console.log(id);
    
    cookies().set("email",email);
    
    if (currentUser) {
      if (password === currentUser.password) {
        return new NextResponse("User Signed in Successfully! ", {
          status: 201,
        });
      } else {
        return new NextResponse("Password is incorrect! ", {
          status: 420,
        });
      }
    } else {
      return new NextResponse("User doesn't Exist! ", {
        status: 421,
      });
    }
  } catch (error) {}
};
