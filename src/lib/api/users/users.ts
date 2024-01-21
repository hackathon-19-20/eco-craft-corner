import clientPromise from "@/lib/mongodb";

export interface UserProps {
  name: string;
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
