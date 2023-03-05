import BASE_INSTANCE from "@/api";

export const signUp = async (data) => {
  const res = await BASE_INSTANCE.post("/signup", data);
  return res.data
};
