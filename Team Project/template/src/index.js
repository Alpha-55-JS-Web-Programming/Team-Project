import { HOME } from "./common/constants.js";
import { toggleFavoriteStatus } from "./events/favorites-events.js";
import { q } from "./events/helpers.js";
import { loadPage, viewGifDetails, initiateUpload } from "./events/navigation-events.js";
import { renderSearchItems } from "./events/search-events.js";
import { handleScroll } from "./scroll/scroll.js";
// import { handleScroll } from "./events/navigation-events.js";

document.addEventListener("DOMContentLoaded", () => {
    // add global listener
    document.addEventListener("click", (event) => {
        // nav events
        if (event.target.classList.contains("nav-link")) {
            loadPage(event.target.getAttribute("data-page"));
        }

        // show gif details
        if (event.target.classList.contains("view-gif-details-button")) {
            viewGifDetails(event.target.getAttribute("data-gif-id"));
        }

        // upload
        if (event.target.classList.contains("upload-btn")) {
            initiateUpload();
        }

        // toggle favorite event
        if (event.target.classList.contains("favorite")) {
            toggleFavoriteStatus(event.target.getAttribute("data-gif-id"));
        }

    });

    // search events
    q("input#search").addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            renderSearchItems(event.target.value);
        }
    });

    loadPage(HOME);
});

// window.addEventListener('scroll', handleScroll);
