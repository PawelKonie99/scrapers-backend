export {};
const adminRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

adminRouter.post("/api/admin", async (req, res) => {
    const body = req.body;

    const isAdminLogged: {
        username: string;
        _id: string;
    } = await User.findOne({ username: body.username });

    if (!isAdminLogged) {
        return res.status(400).json({
            error: "Invalid username or password",
        });
    }

    const allUsers = await User.find();
    console.log(allUsers);
    // let isAdmin: boolean = false;
    // if (body.password === process.env.ADMIN_PASSWORD && body.username === process.env.ADMIN_USERNAME) {
    //     isAdmin = true;
    // }

    // const userForToken: { username: string; id: string } = {
    //     username: registeredUser.username,
    //     id: registeredUser._id,
    // };

    // const token = await jwt.sign(userForToken, process.env.SECRET);

    res.status(200).json({ allUsers });
});

module.exports = adminRouter;
