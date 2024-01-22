import { renderFavoriteStatus } from "../events/favorites-events.js";

export const toGifDetailsView = (trendingItem) => {
  return `
      <div class="gif-info">
        <h2>${trendingItem.title}</h2>
        <p>Rating: ${trendingItem.rating}</p>
        <p>Import Date: ${trendingItem.import_datetime}</p>
        <p>Gif Id: ${trendingItem.id}</p>
        <p>User: ${trendingItem.user?.username || 'Unknown'}</p>
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
        <h2>Trending</h2>
        <div class="trending-gifs">
          ${trendingGifs.map(toTrendingItemView).join('')}
        </div>
      </section>
    `;
};

export const toTrendingItemView = (trendingItem) => {
  const defaultImageUrl = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';
  const imageUrl = trendingItem.images?.fixed_width?.url || defaultImageUrl;

  return `
    <div class="grid">
      <a href="#/trending/${trendingItem.id}">
        <div class="custom-image-container">
          <img src="${imageUrl}" alt="${trendingItem.title}">
        </div>
        <button class="view-gif-details-button" data-gif-id=${trendingItem.id}>View Gif Details</button>
        ${renderFavoriteStatus(trendingItem.id)}
      </a>
    </div>
  `;
};