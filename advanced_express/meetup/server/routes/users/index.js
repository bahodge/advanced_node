const express = require("express");
const UserModel = require("../../models/UserModel");

const router = express.Router();

module.exports = params => {
    const {} = params;

    router.get("/registration", (req, res) =>
        res.render("users/registration", { success: req.query.success })
    );

    router.post("/registration", async (req, res, next) => {
        const body = req.body;
        try {
            const user = new UserModel({
                username: body.username,
                email: body.email,
                password: body.password
            });

            const savedUser = await user.save();
            if (savedUser) {
                return res.redirect("/users/registration?success=true");
            } else {
                return next(new Error("failed to save user for reasons"));
            }
        } catch (error) {
            return next(error);
        }
    });

    router.get("/account", (req, res) =>
        res.render("users/account", { user: req.user })
    );

    return router;
};
