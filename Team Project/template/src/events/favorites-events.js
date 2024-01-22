import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';
import { setFavoriteGifId } from '../data/favorites.js';

// export const toggleFavoriteStatus = (GifId) => {
//   const favorites = getFavorites();
//   const heartSpan = q(`span[data-gif-id="${GifId}"]`);

//   if (favorites.includes(GifId)) {
//     removeFavorite(GifId);
//     heartSpan.classList.remove('active')
//     heartSpan.innerHTML = EMPTY_HEART;
//   } else {
//     addFavorite(GifId);
//     heartSpan.classList.add('active');
//     heartSpan.innerHTML = FULL_HEART;
//   }
// };

export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  const heartSpan = q(`span[data-gif-id="${gifId}"]`);
  if (favorites.includes(gifId)) {
      removeFavorite(gifId);
      heartSpan.classList.remove('active');
      heartSpan.innerHTML = EMPTY_HEART;
      // Remove the favorite GIF ID from local storage
      setFavoriteGifId(null);
  } else {
      addFavorite(gifId);
      heartSpan.classList.add('active');
      heartSpan.innerHTML = FULL_HEART;
      // Update the stored favorite GIF ID
      setFavoriteGifId(gifId);
  }
};

export const renderFavoriteStatus = (GifId) => {
  const favorites = getFavorites();

  return favorites.includes(GifId)
    ? `<span class="favorite active" data-gif-id="${GifId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${GifId}">${EMPTY_HEART}</span>`;
};
