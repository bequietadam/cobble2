import clientPromise from "../../lib/mongodb";

export default async function getCobbles(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("cobble");
    const cobbles = await db.collection("cobbles").find({}).limit(20).toArray();

    res.json(cobbles);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
