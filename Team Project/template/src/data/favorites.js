let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (GiFId) => {
  if (favorites.find(id => id === GiFId)) {
    return;
  }

  favorites.push(GiFId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const removeFavorite = (GIFId) => {
  favorites = favorites.filter(id => id !== GIFId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => [...favorites];

export const getFavoriteGifId = () => localStorage.getItem('favoriteGifId');

export const setFavoriteGifId = (gifId) => localStorage.setItem('favoriteGifId', gifId);