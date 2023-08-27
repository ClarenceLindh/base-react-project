import {
  ArticleService as IArticleService,
  GetAllArticlesResponse,
} from "api/article/article.model";

import httpClient from "common/http/httpClient";

const ArticleService = (): IArticleService => {
  return {
    getAllArticles: (): HttpPromise<GetAllArticlesResponse> => {
      return httpClient.get("/articles");
    },
  };
};

export default ArticleService();
