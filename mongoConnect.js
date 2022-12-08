const mongodb = require("mongodb");
// require("dotenv").config();
const url = "mongodb://localhost:27017";
const client = new mongodb.MongoClient(url);

/**
 * connecting to mongodb and running find queries on socialApp db
 */
async function run() {
  try {
    //connecting to client
    await client.connect();
    //selecting the users Colleciton
    const UserCollection = client.db("socialApp").collection("users");
    //finding the user collections
    const cursor = UserCollection.find({});
    //iterating over the cursor.
    await cursor.forEach((docs) => {
      console.log(docs);
    });
    console.log("Aggregation query");
    //creating an aggregate query
    const aggregate = UserCollection.aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "username",
          foreignField: "username",
          as: "user_posts",
          pipeline: [
            { $project: { content: 1 } },
            { $addFields: { postid: { $toString: "$_id" } } },
            {
              $lookup: {
                from: "comments",
                localField: "postid",
                foreignField: "postid",
                as: "comments",
                pipeline: [{ $project: { _id: 0, postid: 0 } }],
              },
            },
          ],
        },
      },
    ]);
    console.log("Aggregation query");
    //iterate over the documents from the aggregate
    await aggregate.forEach((docs) => {
      console.log(docs);
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run();
