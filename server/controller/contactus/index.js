const jwt = require("jsonwebtoken");
const ContactUs = require("../../model/contactus");

const handleContactus = async (req, res) => {
    const { data, token } = req.body;
    const { name, email, company, country, message } = data;

    const decodedToken = jwt.decode(token, process.env.SECRET_CODE);

    if (!decodedToken) {
        return res.status(401).json({ message: "Invalid token" });
    }

    const newMessage = new ContactUs({
        name,
        email,
        company,
        country,
        message
    });

    await newMessage.save();

    res.json({ message: "Contact message sent!" });
};

module.exports = { handleContactus };
