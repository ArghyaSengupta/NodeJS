const express = require("express");
const userService = require("./userService");
const app = express();

app.use(express.json());

app.get("/users", async (request, response) => {
  try {
    const users = await userService.getUserData();
    response.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000);
