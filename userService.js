const mongoConfig = require("./mongoConfig");

async function getUserData() {
  try {
    const db = await mongoConfig.connect("socialApp");
    const userCollection = db.collection("users");

    const cursor = await userCollection.find({}).toArray();
    return cursor;
  } catch (error) {
    console.error(error);
  } finally {
    await mongoConfig.connectionClose();
  }
}

module.exports = { getUserData };
