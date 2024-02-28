import clientPromise from "../../lib/mongodb";

export default async function addCobble(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("cobble");
    const { title, preset, files, activeFile, resizeValue } = JSON.parse(req.body);

    const cobble = await db.collection("cobbles").insertOne({
      title,
      preset,
      files,
      activeFile,
      resizeValue,
    });
    res.json(cobble);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
