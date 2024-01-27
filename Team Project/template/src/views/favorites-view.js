import { toTrendingItemView } from "./trending-view.js";

/**
 *
 * @returns {Promise<string>} A promise that resolves to a string containing the HTML structure for displaying the favorite GIF.
 */
export const toFavoritesView = (trendingGifs, hasFavorites) => {

  return `
    <section class="trending">
      ${!hasFavorites ? "<b>No favorite GIFs have been added yet.</b>" : ""}
      <div class="trending-gifs">
        ${trendingGifs.map(toTrendingItemView).join("")}
      </div>
    </section>`;
};
