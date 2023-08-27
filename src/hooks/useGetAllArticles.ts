import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "store";
import { getAllArticles } from "store/slices/articleSlice";

const useGetAllArticles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const article = useSelector((state: RootState) => state.article);

  const { articles, loading, error } = article;

  const getArticles = useCallback(async () => {
    const response = await dispatch(getAllArticles());
    return response.payload;
  }, [dispatch]);

  return {
    getArticles,
    articles,
    loading,
    error,
  };
};

export default useGetAllArticles;
