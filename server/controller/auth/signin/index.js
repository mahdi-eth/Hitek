const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../../model/user");

const handleUserLogin = async (req, res) => {
    const { email, password } = req?.body;

    if (!email) {
        return res.status(400).json({ message: "Email must be provided!" });
    }
    if (!password) {
        return res.status(400).json({ message: "password must be provided!" });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found!" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return res.status(404).json({ message: "Something's wrong!" });
    }

    const tokenObj = {
        id: user._id,
        username: user.email
    };

    const token = jwt.sign(tokenObj, process.env.SECRET_CODE);

    return res.status(200).json({ message: "Login successful!", token });
};

module.exports = {
    handleUserLogin
};
