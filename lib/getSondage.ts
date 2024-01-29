import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";



export default async function getCobble(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db("cobble");
    const cobble = await db.collection("cobbles").findOne({
      _id: new ObjectId(id),
    });
    
    return (cobble)
  } catch (e) {
    console.error(e);
    throw new Error(e as string);
  }
}
