import clientPromise from "@/lib/mongodb";

export interface UserProps {
  name: string;
  email:string;
  phone:string;
  products:Array;
}

export async function getAllUsers(): Promise<UserProps[] | null> {
  const client = await clientPromise;
  const collection = client.db("eco-craft-corner").collection("users");

  const cursor = collection.find<UserProps>({});
  const result = await cursor.toArray();

  if (result.length > 0) {
    return result;
  } else {
    return null;
  }
}


export async function getUserByEmail(email: string): Promise<UserProps | null> {
  const client = await clientPromise;
  const collection = client.db("eco-craft-corner").collection("users");

  const user = await collection.findOne<UserProps>({ email });

  return user || null;
}