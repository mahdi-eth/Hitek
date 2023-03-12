import { BASE_INSTANCE } from "../../constants";

export const postFiltersDataService = async (data) => {
  const res = await BASE_INSTANCE.post("/filters", data);
  return res.data;
};
