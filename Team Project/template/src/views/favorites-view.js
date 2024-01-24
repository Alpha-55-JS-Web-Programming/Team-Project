import { loadSingleGifById } from "../events/navigation-events.js";


/**
 *
 * @returns {Promise<string>} A promise that resolves to a string containing the HTML structure for displaying the favorite GIF.
 */
export const toFavoritesView = () => {
  const favoriteGif = loadSingleGifById();
  return `
    <div id="gifs">
      <h1>Favorite gifs:</h1>
      <div class="content">
        <img src="${favoriteGif}" alt="Random Gif">
      </div>
    </div>`;
};
