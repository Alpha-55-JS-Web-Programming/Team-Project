// import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';
import { getTrendingUrl } from '../common/constants.js'

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
  const response = await fetch(getTrendingUrl(30));
  const result = await response.json();

  return result.data
};

export const loadSingleGif = () => {};