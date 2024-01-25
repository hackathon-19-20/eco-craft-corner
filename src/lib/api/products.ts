import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function getAllProducts() {
  const client = await clientPromise;
  client.connect();
  const products = client.db("eco-craft-corner").collection("product");

  const cursor = products.find<Product>({});
  const result = await cursor.toArray();

  if (result.length > 0) {
    return result;
  } else {
    return null;
  }
}

const getProductById = async (productId : string) => {
  const client = await clientPromise;
  client.connect();
  console.log(productId);
  const id = new ObjectId(productId)
  const products = client.db("eco-craft-corner").collection("product");
  return await products.findOne<Product>({ _id: id });
};

export async function getProducts({ productIds }: { productIds: string[] }) {
  
  const results = await Promise.all(productIds.map(productId => getProductById(productId)));

  if (results) {
    return results;
  } else {
    return null;
  }
}