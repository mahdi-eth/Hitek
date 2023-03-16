import { BASE_INSTANCE } from "../../constants";

export const getProductsService = async () => {
  const res = await BASE_INSTANCE.get("/products");
  return res.data;
};
