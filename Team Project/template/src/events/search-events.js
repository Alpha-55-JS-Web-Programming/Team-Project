import { CONTAINER_SELECTOR } from '../common/constants.js';
// import { loadSearchMovies } from '../requests/request-service.js';
import { loadTrendingGifs } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';

export const renderSearchItems = (searchTerm) => {
  loadTrendingGifs(searchTerm)
    .then(gifs => q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs, searchTerm));
};
