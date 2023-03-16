import { BASE_INSTANCE } from "../../../constants";

export const signinUserService = async (data) => {
    const res = await BASE_INSTANCE.post("/signin", data);
    return res.data;
};
