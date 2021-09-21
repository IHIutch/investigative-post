import qs from "qs";
import axios from "redaxios";

export const getPosts = async (params = null) => {
  console.log(`${process.env.BASE_URL}/posts?`);
  try {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/posts?` + qs.stringify(params)
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getPost = async (id) => {
  try {
    const { data } = await axios.get(`${process.env.BASE_URL}/posts/${id}`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
