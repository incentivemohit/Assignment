const { User } = require("../models/userModel");

//fetch all user details

const userDetails = async (req, res) => {
  await User.find({})
    .then((userDetails) => res.status(200).json({ data: userDetails }))
    .catch((err) => console.log(err.message));
};

//problem 1 : Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

const problem01 = async (req, res) => {
  await User.find({
    $or: [{ car: "BMW" }, { car: "Mercedes-Benz" }],
    income: { $lt: "$5" },
  })
    .then((data) => res.json({ data }))
    .catch((err) => console.log(err.message));
};

//problem 2 : Male Users which have phone price greater than 10,000.

const problem02 = async (req, res) => {
  await User.find({ phone_price: { $gt: 10000 }, gender: { $gte: "M" } })
    .then((data) => res.json({ data }))
    .catch((err) => console.log(err.message));
};

//problem 3 : Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

const problem03 = async (req, res) => {
  await User.find({
    quote: { $exists: true },
    last_name: /^M/,
    $expr: { $gt: [{ $strLenCP: "$quote" }, 15] },
    email: {
      $regex: /[last_name]/,
    },
  })
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => console.log(err.message));
};

//problem 4 : Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

const problem04 = async (req, res) => {
  await User.find({
    $or: [{ car: "BMW" }, { car: "Mercedes-Benz" }, { car: "Audi" }],
    email: {
      $regex: /[^0-9\W]/,
    },
  })
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => console.log(err.message));
};

//problem 5 : Show the data of top 10 cities which have the highest number of users and their average income.

const problem05 = async (req, res) => {
  await User.find()
    .sort({ income: -1 })
    .limit(10)
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => console.log(err.message));
};

module.exports = {
  userDetails,
  problem01,
  problem02,
  problem03,
  problem04,
  problem05,
};
