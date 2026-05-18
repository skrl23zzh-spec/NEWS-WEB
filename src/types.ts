export interface Article {
  id: string;
  category: string;
  titles: { en: string; zh: string };
  excerpts: { en: string; zh: string };
  image: string;
  date: string;
  author: string;
  url?: string;
}
