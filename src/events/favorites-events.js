import { EMPTY_HEART, FULL_HEART } from "../common/constants.js";
import {addFavorite, getFavorites, removeFavorite} from "../data/favorites.js";
import { q } from "./helpers.js";
import { setFavoriteGifId } from "../data/favorites.js";

export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  const heartSpan = q(`span[data-gif-id="${gifId}"]`);
  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
    heartSpan.classList.remove("active");
    heartSpan.innerHTML = EMPTY_HEART;
    setFavoriteGifId(null);
  } else {
    addFavorite(gifId);
    heartSpan.classList.add("active");
    heartSpan.innerHTML = FULL_HEART;
    setFavoriteGifId(gifId);
  }
};

export const renderFavoriteStatus = (GifId) => {
  const favorites = getFavorites();

  return favorites.includes(GifId)
    ? `<span class="favorite active" data-gif-id="${GifId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${GifId}">${EMPTY_HEART}</span>`;
};
