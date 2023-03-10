const nodemailer = require("nodemailer");
const { User } = require("../../../model/user");

const sendOtpToEmail = async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found!" });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "mahdi.ettehad85@gmail.com",
            pass: process.env.PASS
        }
    });

    const otp = Math.floor(100000 + Math.random() * 900000);

    const mailOptions = {
        from: "mahdi.ettehad85@gmail.com",
        to: email,
        subject: "Your OTP code for authentication",
        text: `Your OTP code is ${otp}. This code will expire in 5 minutes.`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res
                .status(400)
                .json({
                    message: "Failed to send OTP. Please try again.",
                    error
                });
        } else {
            return res
                .status(200)
                .json({ message: "OTP email sent: " + info.response });
        }
    });
};

module.exports = { sendOtpToEmail };
