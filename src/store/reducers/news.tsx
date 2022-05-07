export const initialState = {articles: []};

const news = (
  state: ArticleState = initialState,
  action: ArticleAction,
): ArticleState => {
  let {type} = action;
  switch (type) {
    case 'GET_NEWS_SUCCESS':
      return {
        articles: [...action.data],
      };
    case 'FILTER_NEWS':
      return {
        ...state,
        articles: [...action.data],
      };
    default:
      return state;
  }
};

export default news;
