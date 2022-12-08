const mongoConfig = require("./mongoConfig");

async function findAndUpdateDocument() {
  try {
    const db = await mongoConfig.connect("socialApp");
    const posts = db.collection("posts");
    const updatedDoc = await posts.findOneAndUpdate(
      { username: "doe" },
      { $set: { content: "Content is Changed" } },
      { returnDocument: "after" }
    );
    console.log(updatedDoc);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoConfig.connectionClose();
  }
}

findAndUpdateDocument();
