import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING, UPLOAD } from '../common/constants.js';
import { loadTrendingGifs, loadSingleGif, loadGifDetails, uploadGif, getGifUploadedId } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toHomeView } from '../views/home-view.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { toTrendingView, toGifDetailsView, toTrendingItemView } from '../views/trending-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toUploadView } from '../views/upload-view.js';

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

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    default: return null;
  }

};

const renderTrending = async () => {
  const trendingGifs = await loadTrendingGifs();
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};

const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
}

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
  console.log("favorites from local storage: " + favorites);
  q(CONTAINER_SELECTOR).innerHTML = toTrendingItemView(favorites);
};


const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const initiateUpload = async () => {
  // getting the class attribute, because in index.js the current trigered event is the button
  const fileInput = document.getElementsByClassName('upload-input-file')[0];
  // and getting the img file that is to be uploaded
  const file = fileInput.files[0];

  if (file) {
    try {
      document.getElementById('status').innerHTML = 'The GIF is uploading...';
      await uploadGif(file)
      console.log('Successful upload');
      document.getElementById('status').innerHTML = 'Upload successful!';
      displayUploadedGif()
    } catch (e) {
      console.error('Error:', e);
      document.getElementById('status').innerHTML = `An error occurred.`;
    }
  }
}

export const displayUploadedGif = async () => {

 const getGifId = await getGifUploadedId();
 console.log(`Successfuly obtained gif\'s id: ${getGifId}`);

//  return viewGifDetails(getGifId);

 const getGifData = await loadGifDetails(getGifId)
 console.log(`gif data: ${getGifData.url}`)

// const gifElement = document.createElement('img');
// gifElement.src = getGifData.url;
// document.getElementById('status').innerHTML += gifElement;

  let img = new Image();
  img.onload = img.src = () => {
    imgSrc = getGifData.url; 
} 
document.getElementById('status').appendChild(img);

}