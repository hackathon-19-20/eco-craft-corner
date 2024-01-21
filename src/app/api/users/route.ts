import type { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers } from "@/lib/api/users/users";
import { NextResponse } from "next/server";

export const GET =  async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const data = await getAllUsers();
    return new NextResponse("Here are the users : " + JSON.stringify(data), { status: 200 });
  } catch (error) {}
}
