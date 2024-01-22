import { getAllUsers } from "@/lib/api/users";
import { NextResponse } from "next/server";

export const GET =  async () => {
  try {
    const data = await getAllUsers();
    return new NextResponse("Here are the users : " + JSON.stringify(data), { status: 200 });
  } catch (error) {}
}
