import { q } from '../utils/selector.js';
import { getUrl } from '../common/constants.js';
import { toTrendingView } from '../views/trending-view.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
// import { API_KEY } from '../common/constants.js';


// export const getUrl =(limit = 30, offset)=>{
//     return `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset = offset + limit }`;
// }

export const handleScroll = async() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
        console.log('At the bottom');
        const data = await loadInfiniteScroll();
        q(CONTAINER_SELECTOR).innerHTML += toTrendingView(data);

    }
}
export const loadInfiniteScroll = async () => {
    const response = await fetch(getUrl(30,0));
    const result = await response.json();
  
    return result.data;
  };
