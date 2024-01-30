import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function editCobble(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("cobble");
    const { id } = req.query;
    const { title, preset, files, activeFile } = JSON.parse(req.body);
    

    const cobble = await db.collection("cobbles").updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          title: title,
          preset: preset,
          files: files,
          activeFile: activeFile,
        },
      }
    );

    res.json(cobble);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
