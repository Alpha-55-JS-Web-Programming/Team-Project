import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING } from '../common/constants.js';
import { loadSingleMovie } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { getTrendingUrl } from '../common/constants.js'
import { toTrendingView } from '../views/trending-view.js';

export const loadPage = (page = '') => {

switch (page) {

case HOME:
setActiveNav(HOME);
return renderHome();

case TRENDING:
setActiveNav(TRENDING);
return renderTrending();

case FAVORITES:
setActiveNav(FAVORITES);
return renderFavorites();

case ABOUT:
setActiveNav(ABOUT);
return renderAbout();

// missing partial implementation
default: return null;
}

};

const renderTrending = async () => {
const trendingGifs = await loadTrendingGifs();
q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};

export const loadTrendingGifs = async () => {
const response = await fetch(getTrendingUrl(25, 0))
const result = await response.json()
return result.data;
};

// private functions
const renderHome = () => {
q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderFavorites = () => {
const favorites = getFavorites();
const movies = favorites.map(id => loadSingleMovie(id));

q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(movies);
};

const renderAbout = () => {
q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};