import { BASE_INSTANCE } from "../../../constants";

export const signupUserService = async (data) => {
  const res = await BASE_INSTANCE.post("/signup", data);
  return res.data
};
