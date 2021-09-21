import { useQuery } from "react-query";
import { getPost, getPosts } from "../axios/posts";

export const useGetPosts = (params) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["posts", params],
    async () => await getPosts(params),
    {
      enabled: !!params,
    }
  );
  return {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
  };
};

export const useGetPost = (id) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["posts", id],
    async () => await getPost(id),
    {
      enabled: !!id,
    }
  );
  return {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
  };
};
