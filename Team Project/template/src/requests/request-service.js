// import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';

import { API_KEY } from "../common/constants.js";

/**
*
* @returns {Promise<Array<{
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
  * }>>} - array of trending gifs
  */
export const loadTrendingGifs = async () => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${30}&offset=0&rating=g`);
  const result = await response.json();

  return result.data;
};

export const loadSingleGif = () => {};

export const loadGifDetails = async (gifId) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}&rating=g`);
  const result = await response.json();

  return result.data;
};

export const loadSearchResults = async (searchInputValue) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchInputValue}&limit=25&offset=0&rating=g&lang=en`);
  const result = await response.json();

  return result.data;
};

export const uploadGif = async (file) => {
  // creating FormData object to send key/value pairs via fetch() to a server
  const formData = new FormData();
  // This appends the file to the FormData object with the key 'image'.
  formData.append('file', file);
  formData.append('api_key', API_KEY);
  // uploadingformData to folder giphy
  const result = await fetch('https://upload.giphy.com/v1/gifs', {
    method: 'POST',
    body: formData,
  });

  if (!result.ok) {
    throw new Error(`Unexpected status code when uploading GIF: ${result.status}, ${await result.text()}`);
  }
  return result.ok;
}