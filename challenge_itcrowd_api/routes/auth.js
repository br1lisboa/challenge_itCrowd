const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//REGISTRO DE USUARIO
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGUEO DEL USUARIO INTENTO UN MILLON
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Credenciales erroneas");

        const password = user.password;
        password !== req.body.password && res.status(401).json("Credenciales erroneas");

        const accessToken = jwt.sign({
            id: user._id, isAdmin: user.isAdmin,
        }, process.env.JWT_SEC,
        {expiresIn:"3d"}
        );

        const { pass , ...others} = user._doc;

        res.status(200).json({...others, accessToken});

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
