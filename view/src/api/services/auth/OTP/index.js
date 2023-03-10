import { BASE_INSTANCE } from "../../../constants";

export const userOTPService = async (email) => {
    const res = await BASE_INSTANCE.post("/otp", email);
    return res.data;
};
