const jwt = require("jsonwebtoken");
const User = require("../../model/user");

const addToBasket = async (req, res) => {
    const { id, token } = req.body;

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_CODE);
        const userId = decodedToken.id;

        const user = await User.findOne({ _id: userId });

        user.basket.push(id);
        await user.save();

        res.json({ message: "Product added to basket!" });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = { addToBasket };
