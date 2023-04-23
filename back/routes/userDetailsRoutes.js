const express = require("express");
const router = express.Router();
const {
  userDetails,
  problem01,
  problem04,
  problem03,
  problem02,
  problem05,
} = require("../controllers/problemsController");

router.get("/userDetails", userDetails);
router.get("/userDetails/users-income-lower-than-and-carbrand", problem01);
router.get("/userDetails/male-users-phone-price-greater", problem02);
router.get(
  "/userDetails/users-lastname-and-quote-character-length-and-email-lastname",
  problem03
);
router.get("/userDetails/users-carbrand-and-email-without-digits", problem04);
router.get("/userDetails/showing-data-top-10-cities", problem05);

module.exports = router;
