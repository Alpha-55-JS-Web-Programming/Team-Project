import { CONTAINER_SELECTOR } from '../common/constants.js';
import { loadSearchResults } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { q } from './helpers.js';

export const renderSearchItems = async(searchTerm) => {
  const search = await loadSearchResults(searchTerm)
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(search);
};