const bcrypt = require("bcrypt");
const User = require("../../../model/user");

const handleUserSignup = async (req, res) => {
    const { name, email, password, termsAndConditions } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email must be provided!" });
    }
    if (!password) {
        return res.status(400).json({ message: "Password must be provided!" });
    }
    if (!name) {
        return res.status(400).json({ message: "Name must be provided!" });
    }
    if (!termsAndConditions) {
        return res
            .status(400)
            .json({ message: "termsAndConditions must be checked!" });
    }

    const isDuplicate = await User.findOne({ email });
    if (isDuplicate) {
        return res
            .status(400)
            .json({ message: "This email has already been used!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashedPass });
    user.save();

    return res.status(201).json({ message: "User created successfully!" });
};

module.exports = {
    handleUserSignup
};
