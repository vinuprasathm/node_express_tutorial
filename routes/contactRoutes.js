const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({message: "Get all contacts"})
  });

router.route("/").post((req, res) => {
  res.status(200).json({message: "Create contact"})
  });

router.route("/:id").put((req, res) => {
  res.status(200).json({message: `update contacts for ${req.params.id}`})
  });

router.route("/:id").delete((req, res) => {
  res.status(200).json({message: `delete contacts for ${req.params.id}`})
  });

module.exports = router;