import { fetchArticles } from "../types";
import { fetchArticleFunc } from "../types";

export default function articleReducer(state = null, action) {
  switch (action.type) {
    case fetchArticles:
      return action.payload;
    default:
      return state;
  }
}
