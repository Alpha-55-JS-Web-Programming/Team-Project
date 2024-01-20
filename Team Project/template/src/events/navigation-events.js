import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING } from '../common/constants.js';
import { loadTrendingGifs, loadSingleGif } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
// import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { toTrendingView, displayGifDetails } from '../views/trending-view.js';
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

export const viewGifDetails = async (trendingUrl) => {
// console.log(event);
// console.log(event.target);
// 1 . await GET GIF ID
// 2. q(CONTAINER_SELECTOR).innerHTML = displayGifDetails(GET GIF ID);
  try {
    const response = await fetch(trendingUrl);
    console.log(response);
    const res = await response.json();
    console.log(res.data);
    displayGifDetails(res.data); // Implement this function to update the UI with the details
  } catch (error) {
    console.error('Error fetching GIF details:', error);
  }
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
