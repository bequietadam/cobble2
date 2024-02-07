import { Cobble } from "@components/SandEditor";
import clientPromise from "./mongodb";
import { revalidatePath } from 'next/cache'



export default async function addCobble(cobble: Cobble) {
  try {
    const client = await clientPromise;
    const db = client.db("cobble");
    const cobbles = await db.collection("cobbles").find({}).limit(20).toArray();
    
    revalidatePath('/cairn')

    return (cobbles);
  } catch (e) {
    console.error(e);
    throw new Error(e as string);
  }
}
