import { BASE_INSTANCE } from "../../constants";

export const getHeaderBrandsService = async (data) => {
  const res = await BASE_INSTANCE.post("/header", data);
  return res.data;
};
