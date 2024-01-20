import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING } from '../common/constants.js';
import { loadTrendingGifs, loadSingleGif, loadGifDetails } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
// import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { toTrendingView, toGifDetailsView } from '../views/trending-view.js';
import { toFavoritesView } from '../views/favorites-view.js';

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

// export const viewGifDetails = async (event, trendingItem) => {
//   const currentElement = event.currentTarget;

//   // Simulating an asynchronous operation (remove this in your actual code)
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   const newDiv = document.createElement('div');
//   newDiv.innerHTML = `Gif name: ${trendingItem.title}`;
//   currentElement.appendChild(newDiv);
// };

export const viewGifDetails = async (gifId) => {
  console.log(gifId);
  const gifDetails = await loadGifDetails(gifId);
  console.log(gifDetails);
  q(CONTAINER_SELECTOR).innerHTML = toGifDetailsView(gifDetails);
};

// private functions
const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderFavorites = () => {
  const favorites = getFavorites();
  Promise.all(favorites.map(id => loadSingleGif(id)))
    .then(movies => q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(movies));
};


const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
