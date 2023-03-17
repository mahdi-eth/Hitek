import { BASE_INSTANCE } from "../../constants";

export const getSingleProductService = async () => {
  const res = await BASE_INSTANCE.get("/single-product");
  return res.data;
};
