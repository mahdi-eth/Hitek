import { BASE_INSTANCE } from "../../constants";

export const contactUsService = async (data) => {
  const res = await BASE_INSTANCE.post("/contactus", data);
  return res.data;
};
