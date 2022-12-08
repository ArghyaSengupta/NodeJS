const mongoConfig = require("./utils/mongoConfig");

/**
 * Finds a single doc with content "Ipsum"
 */
async function findOneDocument() {
  try {
    //Creating a mongodb connection and selecting socialApp DB
    const db = await mongoConfig.connect("socialApp");
    //Using the posts collection and finds the doc with content
    const posts = db.collection("posts");
    const doc = await posts.findOne({ content: "Ipsum" });
    console.log(doc);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoConfig.connectionClose();
  }
}

findOneDocument();
