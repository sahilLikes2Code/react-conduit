import { fetchArticles, fetchTags } from "./types";
import { store } from "../store/index";

export let fetchArticlesFunc = (payload) => {
  return { type: fetchArticles, payload };
};

export let fetchTagsFunc = (payload) => {
  return { type: fetchTags, payload };
};

export let fetchArticlesCDM = () => {
  return function () {
    fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
      .then((response) => response.json())
      .then((data) => {
        // this.setState({ articles: data });
        store.dispatch(fetchArticlesFunc(data));
      });
  };
};

export let fetchTagsCDM = () => {
  return function () {
    fetch("https://conduit.productionready.io/api/tags")
      .then((res) => res.json())
      .then((tagData) =>
        // this.setState({ tags: tagData }))
        store.dispatch(fetchTagsFunc(tagData))
      );
  };
};
