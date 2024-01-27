import React from "react";
import Link from "next/link";
import { ShopButton } from "@/components/ui/button";
import clientPromise from "@/lib/mongodb";
import { cookies } from "next/headers";
import { UserProps, getUserByEmail } from "@/lib/api/users";
import Image from "next/image";
import img from '../../../public/dashimg.png'

export default async function Dashboard() {
  const client = await clientPromise;

  const emails = cookies().get("email")?.value;

  let user: UserProps | null = null;

  if (emails) {
    user = await getUserByEmail(emails);
  }

  return (
    <div>

    <div className="flex justify-between items-center">
      <div className="text-xl font-bold">Dashboard</div>
      <Link href="/shop">
        <ShopButton size="lg" />
      </Link>
        </div>

      <div className="flex justify-around ">
        <div className="my-auto">
          <Image src="/dashimg.png" height={500} width={400} alt="dashboard"/>
        </div>
        <div className="my-20 items-center justify-start">

        {user && (
          <div className="text-[1.3rem]">
            <p className="p-3 shadow-md rounded-lg"><b>Name: </b> {user.name}</p>
            <br/>
            <p className="p-3 shadow-md rounded-lg"><b>Email: </b>{user.email}</p>
            <br/>
            <p className="p-3 shadow-md rounded-lg"><b>Phone: </b> {user.phone}</p>
            <br/>
            <p className="p-3 shadow-md rounded-lg"><b>Your Products: </b> {user.products.length}</p>
            
          </div>
        )}
          </div>
      </div>
          </div>
  );
}