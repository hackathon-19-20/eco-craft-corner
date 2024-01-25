import React from "react";
import Link from "next/link";
import { ShopButton } from "@/components/ui/button";

export default function Dashboard() {
  // console.log("hi " + cookies().get("userId")?.value);

  return (
    <div className="flex justify-around items-center">
      <div>Dashboard</div>
      <Link href="/shop">
      <ShopButton size="lg" />
      </Link>
    </div>
  );
}
