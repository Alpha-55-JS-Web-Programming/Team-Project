import { loadRandomGif } from "../requests/request-service.js";
import { toTrendingItemView } from "./trending-view.js";

export const toFavoritesView = async () => {
  const favoriteGif = await loadRandomGif();
  return `
    <div id="gifs">
      <h1>Favorite gifs:</h1>
      <div class="content">
        <img src="${favoriteGif}" alt="Random Gif">
      </div>
    </div>`;
};