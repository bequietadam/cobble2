import clientPromise from "./mongodb";




export default async function getCobbles() {
  try {
    const client = await clientPromise;
    const db = client.db("cobble");
    const cobbles = await db.collection("cobbles").find({}).limit(20).toArray();

    return (cobbles);
  } catch (e) {
    console.error(e);
    throw new Error(e as string);
  }
}