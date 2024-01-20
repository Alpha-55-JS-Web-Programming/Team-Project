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
