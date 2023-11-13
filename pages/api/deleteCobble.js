import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function deleteCobble(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("cobble");
    const { id } = req.query;

    const cobble = await db.collection("cobbles").deleteOne({
      _id: ObjectId(id),
    });

    res.json(cobble);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
