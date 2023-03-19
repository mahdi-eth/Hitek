import { BASE_INSTANCE } from "../../constants";

export const getSingleProductService = async (data) => {
  const res = await BASE_INSTANCE.post("/product", data);
  return res.data;
};
