let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (movieId) => {
  if (favorites.find(id => id === movieId)) {
    return;
  }

  favorites.push(movieId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const removeFavorite = (movieId) => {
  favorites = favorites.filter(id => id !== movieId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => [...favorites];
