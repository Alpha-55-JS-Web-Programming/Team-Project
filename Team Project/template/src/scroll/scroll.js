// import { q } from '../common/helpers.js';
// import { getUrl } from '../common/constants.js';
import { toTrendingView, toTrendingItemView} from '../views/trending-view.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { API_KEY } from '../common/constants.js';
import { renderFavoriteStatus } from '../events/favorites-events.js';


let offset = 0; 

export const getUrl = (limit = 30) => {
  return `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset+=limit}`;
};

export const handleScroll = async () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    console.log('At the bottom');
    const data = await loadInfiniteScroll();
    document.querySelector(CONTAINER_SELECTOR).innerHTML += toTrendingView(data);


    // const lastImg = document.querySelector('.trending').lastElementChild;

    // lastImg.appendChild(toTrendingView(data));

    // lastImg.insertAdjacentHTML('afterend', data.map(toTrendingItemView).join(""));

    // const imgElement = data.map((item) => {
    //   const img = document.createElement('IMG');
    //   img.src = item.images.fixed_width.url;
    //   img.alt = item.title;
    //   // lastImg.append(img);
    //   lastImg.append(toTrendingItemView(item));
    // }
    // );

  }
};

export const loadInfiniteScroll = async () => {
  const response = await fetch(getUrl(30));
  const result = await response.json();
  return result.data;
};
