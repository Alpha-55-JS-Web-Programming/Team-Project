// import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';
import {getTrendingUrl} from '../common/constants.js'

export const loadSearchMovies = (searchTerm = '') => {
  // missing implementation
};

export const loadTrending = async() => {
  const response = await fetch(getTrendingUrl(25,0))
  const result = await response.json()
  return result.data
};