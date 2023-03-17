import { BASE_INSTANCE } from "../../constants";

export const getSingleProductService = async () => {
  const res = await BASE_INSTANCE.post("/product");
  return res.data;
};
