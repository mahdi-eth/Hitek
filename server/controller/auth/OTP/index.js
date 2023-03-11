const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const bcrypt = require("bcrypt");
const { User } = require("../../../model/user");

const sendOtpToEmail = async (req, res) => {
    const { email } = req.body;

    const unhashedOTP = Math.floor(100000 + Math.random() * 900000);
    const salt = await bcrypt.genSalt(10);
    const otp = await bcrypt.hash(unhashedOTP.toString(), salt);

    const user = await User.findOneAndUpdate(
        { email },
        { $set: { otpCode: otp } },
        { new: true }
    );
    if (!user) {
        return res.status(404).json({ message: "User not found!" });
    }

    const transporter = nodemailer.createTransport(
        smtpTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            secure: true,
            port: 465,
            auth: {
                user: "mahdi.ettehad85@gmail.com",
                pass: process.env.PASS
            }
        })
    );

    const mailOptions = {
        from: "mahdi.ettehad85@gmail.com",
        to: email,
        subject: "Your OTP code for authentication",
        text: `Your OTP code is ${otp}. This code will expire in 5 minutes.`
    };

    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error);
            return res.status(400).json({
                message: "Failed to send OTP. Please try again.",
                error
            });
        } else {
            return res
                .status(200)
                .json({ message: "OTP email sent successfully!" });
        }
    });
};

module.exports = { sendOtpToEmail };
