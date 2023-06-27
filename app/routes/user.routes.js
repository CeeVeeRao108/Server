module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/", users.create);

  // Retrieve all user
  router.get("/", users.findAll);

  // Retrieve all winner user
  router.get("/winner", users.findAllwinner);

  // Retrieve a single user with id
  router.get("/:id", users.findOne);

  // Update a user with id
  router.put("/:id", users.update);

  app.use("/api/users", router);
};
