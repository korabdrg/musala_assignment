interface IArticle {
  title: string;
  content: string;
  urlToImage: string;
  author: string;
}

type ArticleState = {
  articles: IArticle[];
};

type ArticleAction = {
  type: string;
  data: IArticle[];
};

type DispatchTypeNews = (args: ArticleAction) => ArticleAction;
