"use server"
import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";
import { revalidatePath } from 'next/cache'

export default async function deleteCobble(id: string) {

  try {
    const client = await clientPromise;
    const db = client.db("cobble");

    const cobble = await db.collection("cobbles").deleteOne({
      _id: new ObjectId(id),
    });

    revalidatePath('/cairn')

    return cobble;
  } catch (e) {
    console.error(e);
    throw new Error(e as string);
  }
};