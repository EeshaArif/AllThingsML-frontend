export interface Article {
  id?: number;
  heading: string;
  author: string;
  body: string;
  description: string;
  thumbnail: string;
  created_at: string;
}
export interface ArticleResponse {
  articles_list: Article[];
}
