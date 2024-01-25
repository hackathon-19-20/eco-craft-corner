import { getAllProducts } from "@/lib/api/products";
import { unstable_noStore as noStore } from "next/cache";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShopCard from "@/components/Shop/ShopCard";

export default async function Shop() {
  noStore();
  const products = await getAllProducts();

  return (
    <div >
      <h1 className="text-center mb-[3rem] font-  extrabold text-[3rem]">Products</h1>
      <Link href="/dashboard"><Button variant="main">Dashboard</Button></Link>
      <ShopCard productArray={JSON.stringify(products)}/>
    </div>
  );
}