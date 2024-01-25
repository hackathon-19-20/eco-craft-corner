import { getAllProducts } from "@/lib/api/products";
import { unstable_noStore as noStore } from "next/cache";
import { Button, ShopButton } from "@/components/ui/button";
import Link from "next/link";

export default async function Shop() {
  noStore();
  const products = await getAllProducts();

  return (
    <div >
      <h1 className="text-center mb-[3rem] font-  extrabold text-[3rem]">Products</h1>
      <Link href="/dashboard"><Button variant="main">Dashboard</Button></Link>
      <ul className="flex justify-around   flex-wrap">
        {products && products.map((product) => (
          <div className="shadow-xl max-w-[20rem] m-[2rem] p-[1rem] rounded-lg " key={product._id}>
          <li className="justify-center items-center text-center" >
            <div className="items-center">
            <img className="max-w-[15rem] m-auto hover:max-w-[15.2rem] duration-500" src={product.img} alt={product.name} />
            </div>
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p><b>Price</b>: ₹{product.price}</p>
            <p>{product.des}</p>
            <ShopButton size="sm" />
          </li>
        </div>
        ))}
      </ul>
    </div>
  );
}