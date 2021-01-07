const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Hi curious, welcome to my mind." }).status(200);
});


module.exports = router;