import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING, UPLOAD } from '../common/constants.js';
import { loadTrendingGifs, loadSingleGif, loadGifDetails } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
// import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { toTrendingView, toGifDetailsView } from '../views/trending-view.js';
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

    // missing partial implementation
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

// export const initiateUpload = ()=>{
//   // getting the class attribute, because in index.js the current trigered event is the button
//   const fileInput = document.getElementsByClassName('upload-input-file');
//     // and getting the img file/s that is to be uploaded
//   const file = fileInput.files;

//   if (file){
//     // creating FormData object to send key/value pairs via fetch() to a server
//       const formData = new FormData();
//       // This appends the file to the FormData object with the key 'image'.
//       formData.append('image', file);
//       // uploading/creating formData to folder upload
//       fetch('../../upload', {
//           method: 'POST',
//           body: formData,
//         })
//         .then(response => {
//           if (response.ok) {
//             console.log('Successful upload')
//             document.getElementById('status').innerHTML = 'Upload successful!';
//           } 
//         })
//         .catch(error => {
//           console.error('Error:', error);
//           document.getElementById('status').innerHTML = `An error occurred.`;
//         });
//       } 
//   }
