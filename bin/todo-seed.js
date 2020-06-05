const mongoose = require("mongoose");

const ToDo = require("./../models/Todo");

const config = require("./../config/db");

const toDo = [
  {
    title: "Clean kitchen",
    body: "I have to clean the kitchen and fridge",
  },
  {
    title: "Buy milk",
    body: "I need to buy milk to bake a cake",
  },
];

mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(`Connected to MOngo! Database name: ${x.connection.name}`);
    return x.connection.dropDatabase();
  })
  .then(() => {
    const newCollection = ToDo.create(toDo);

    console.log(newCollection);
    newCollection
      .then((toDoCollection) => {
        console.log("ToDoCollection --->", toDoCollection);
      })
      .catch((err) => {
        console.log("error -->", err);
      });
  })
  .catch((err) => {
    console.error("Error connection to mongo", err);
  });
