import { renderFavoriteStatus } from "../events/favorites-events.js";

/**
 *
 * @param {{
 *   title: string,
 *   images: {
 *     fixed_width: {
 *       url: string,
 *     },
 *   },
 *   rating: string,
 *   import_datetime: string,
 *   id: string,
 *   user?: {
 *     username: string,
 *   },
 * }} trendingItem - An object containing details about a trending GIF.
 * @returns {string} HTML string representing the detailed view of a GIF.
 */
export const toGifDetailsView = (trendingItem) => {
  return `
      <div class="gif-info">
        <h2>${trendingItem.title}</h2>
        <img src="${trendingItem?.images.fixed_width.url}" alt="${trendingItem.title}">
        <p>Rating: ${trendingItem.rating}</p>
        <p>Import Date: ${trendingItem.import_datetime}</p>
        <p>Gif Id: ${trendingItem.id}</p>
        <p>User: ${trendingItem.user?.username || "Unknown"}</p>
      </div>
    `;
};

/**
 *
 * @param {Array<{
 * id: string,
 * rating: string,
 * title: string,
 * images: {
 *  fixed_width: {
 *   url: string,
 *  },
 * },
 * user: {
 *  avatar_url: string,
 *  username: string,
 * },
 * }>} trendingGifs
 */

export const toTrendingView = (trendingGifs) => {
  return `
      <section class="trending">
        <div class="trending-gifs">
          ${trendingGifs.map(toTrendingItemView).join("")}
        </div>
      </section>
    `;
};

/**
 *
 * @param {{
 *   id: string,
 *   title: string,
 *   images: {
 *     fixed_width?: {
 *       url: string,
 *     },
 *   },
 *   user?: {
 *     username: string,
 *   },
 * }} trendingItem - An object containing details about a single trending GIF.
 * @returns {string} HTML string representing a single item in the trending view.
 */
export const toTrendingItemView = (trendingItem) => {
  console.log(trendingItem);
  return `
    <div class="grid">
        <img src="${trendingItem?.images?.fixed_width?.url}" alt="${trendingItem.title}">
        <button class="view-gif-details-button"  data-gif-id=${trendingItem.id} >View Gif Details</button>
        ${renderFavoriteStatus(trendingItem.id)}
      </a>
    </div>
  `;
};
