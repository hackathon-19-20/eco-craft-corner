import React from "react";
import Link from "next/link";
import { ShopButton } from "@/components/ui/button";
import clientPromise from "@/lib/mongodb";
import { cookies } from "next/headers";
import { UserProps, getUserByEmail } from "@/lib/api/users";

export default async function Dashboard() {
  const client = await clientPromise;

  const emails = cookies().get("email")?.value;

  let user: UserProps | null = null;

  if (emails) {
    user = await getUserByEmail(emails);
  }

  return (
    <div>

    <div className="flex justify-around items-center">
      <div>Dashboard</div>
      <Link href="/shop">
        <ShopButton size="lg" />
      </Link>
        </div>

      <div className="flex justify-around shadow-xl ">
        <div className="my-auto">
          <img src="https://th.bing.com/th/id/OIP.F9y1qSOILWsXCGPigyjepwHaHa?pid=ImgDet&w=474&h=474&rs=1" alt="" />
        </div>
        <div className="items-center my-auto justify-start">

        {user && (
          <div className="text-[1.5rem]">
            <p><b>Name</b><br/> {user.name}</p>
            <p><b>Email</b><br/> {user.email}</p>
            <p><b>Phone</b><br/> {user.phone}</p>
            <p><b>Your Products</b>: {user.products.length}</p>
            
          </div>
        )}
          </div>
      </div>
          </div>
  );
}