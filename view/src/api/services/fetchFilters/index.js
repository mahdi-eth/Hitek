import { BASE_INSTANCE } from "../../constants";

export const getFiltersService = async () => {
  const res = await BASE_INSTANCE.get("/filters");
  return res.data;
};
