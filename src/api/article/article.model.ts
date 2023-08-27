export interface Article {
  id: number;
  title: string;
  slug: string;
  summary: string;
  body: string;
  createdAt: Date;
  image: string;
  views: number;
  likes: number;
}

export interface GetAllArticlesResponse {
  articles: Article[];
}

export interface ArticleService {
  getAllArticles: () => HttpPromise<GetAllArticlesResponse>;
}
