import { BASE_INSTANCE } from "../../constants";

export const sendProductToBaketService = async (data) => {
  const res = await BASE_INSTANCE.post("/basket", data);
  return res.data;
};
