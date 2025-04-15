export const HOME = "home";

export const TRENDING = "trending";

export const FAVORITES = "favorites";

export const UPLOAD = "upload";

export const FULL_HEART = "❤";

export const EMPTY_HEART = "♡";

export const ABOUT = "about";

export const API_KEY = "1zuFE91nbybP5xGff9qAtw2N3j2zK7MF";

export const getUrl = (limit = 30, offset) => {
  return `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${
    offset + limit
  }`;
};

export const CONTAINER_SELECTOR = "#container";

export const date = "April, 2024";
