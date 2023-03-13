import { BASE_INSTANCE } from "../../constants";

export const filterByHeaderService = async (data) => {
  const res = await BASE_INSTANCE.post("/filterHeader", data);
  return res.data;
};
