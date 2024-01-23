import { loadSingleGifById } from "../events/navigation-events.js";

export const toFavoritesView = async () => {
  const favoriteGif = await loadSingleGifById();
  return `
    <div id="gifs">
      <h1>Favorite gifs:</h1>
      <div class="content">
        <img src="${favoriteGif}" alt="Random Gif">
      </div>
    </div>`;
};
