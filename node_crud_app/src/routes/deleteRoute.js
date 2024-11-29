const express = require("express");
const userController = require("../controllers/deleteController");

const router = express.Router();

// DELETE route to delete a user by id
router.delete("/:id", userController.deleteUser);

module.exports = router;
