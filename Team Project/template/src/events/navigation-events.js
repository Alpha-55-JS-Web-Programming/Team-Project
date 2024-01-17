import { CONTAINER_SELECTOR, HOME } from '../common/constants.js';
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';
import {getTrendingUrl} from '../common/constants.js'


export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

      case TRENDING:
      setActiveNav(TRENDING);
      return renderTrending();
      // missing partial implementation

    default: return null;
  }

};



const renderTrending = async() => {
  const trending = await loadTrending();
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trending);
};


//request service
import {getTrendingUrl} from '../common/constants.js'

export const loadTrending = async() => {
  const response = await fetch(getTrendingUrl(25,0))
  const result = await response.json()
  return result.data
};

q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trending);
// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};


const renderFavorites = () => {
  // missing implementation
};

const renderAbout = () => {
  // missing implementation
};
