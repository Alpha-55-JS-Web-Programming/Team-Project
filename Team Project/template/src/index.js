import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, viewGifDetails } from './events/navigation-events.js'; // change
import { renderSearchItems } from './events/search-events.js';
// import { initiateUpload  } from './events/navigation-events.js';

document.addEventListener('DOMContentLoaded', () => {

// add global listener
document.addEventListener('click', event => {

// nav events
if (event.target.classList.contains('nav-link')) {
loadPage(event.target.getAttribute('data-page'));
}

// show movie events
if (event.target.classList.contains('view-gif-details-button')) {
    viewGifDetails(event.target.getAttribute('data-gif-id'));
}

// upload
// listening for click event from upload-view 
// if (event.target.classList.contains('upload-btn')) {
//     initiateUpload();
//  }

// toggle favorite event
if (event.target.classList.contains('favorite')) {
toggleFavoriteStatus(+event.target.getAttribute('data-movie-id'));
}

});

// search events
q('input#search').addEventListener('input', event => {
renderSearchItems(event.target.value);
});

loadPage(HOME);

});