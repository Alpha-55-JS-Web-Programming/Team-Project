import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING, UPLOAD } from "../common/constants.js";
import { loadTrendingGifs, loadGifDetails, uploadGif, getGifUploadedId, loadRandomGif} from "../requests/request-service.js";
import { toAboutView } from "../views/about-view.js";
import { toHomeView } from "../views/home-view.js";
import { q, setActiveNav } from "./helpers.js";
import { getFavorites } from "../data/favorites.js";
import { toTrendingView, toGifDetailsView } from "../views/trending-view.js";
import { toUploadView } from "../views/upload-view.js";

export const loadPage = (page = "") => {
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

    default:
      return null;
  }
};

const renderTrending = async () => {
  const trendingGifs = await loadTrendingGifs();
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};

const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

export const viewGifDetails = async (gifId) => {
  console.log(gifId);
  const gifDetails = await loadGifDetails(gifId);
  console.log(gifDetails);
  q(CONTAINER_SELECTOR).innerHTML = toGifDetailsView(gifDetails);
};

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderFavorites = async () => {
  const favorites = getFavorites();
  if (favorites.length === 0) {
    const random = await loadRandomGif();
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView([random]);
    return;
  }

  console.log("favorites from local storage: " + favorites);
  const gif = favorites.map((id) => loadSingleGifById(id));
  const gifs = await Promise.all(gif);
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(gifs);
};
export const loadSingleGifById = async (id) => {
  const gif = await loadGifDetails(id);
  return gif;
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const initiateUpload = async () => {
  // getting the class attribute, because in index.js the current trigered event is the button
  const fileInput = document.getElementsByClassName("upload-input-file")[0];
  // and getting the img file that is to be uploaded
  const file = fileInput.files[0];

  if (file) {
    try {
      document.getElementById("status").innerHTML = "The GIF is uploading...";
      await uploadGif(file);
      console.log("Successful upload");
      document.getElementById("status").innerHTML = "Upload successful!";
      displayUploadedGif();
    } catch (e) {
      console.error("Error:", e);
      document.getElementById("status").innerHTML = `An error occurred.`;
    }
  }
};

export const displayUploadedGif = async () => {
  const getGifId = await getGifUploadedId();
  console.log(`Successfuly obtained gif\'s id: ${getGifId}`);

  // return viewGifDetails(getGifId);

  const getGifData = await loadGifDetails(getGifId)
  console.log(`gif data.url: ${getGifData.url}`)

  const img = document.createElement("IMG");
  img.src = getGifData.images.fixed_width.url;
  img.height = 200;
  img.width = 200;
  img.className = 'uploaded-gif';
  document.getElementById('status').appendChild(img);
};
