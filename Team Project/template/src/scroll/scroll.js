// import { q } from '../common/helpers.js';
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
        document.querySelector(CONTAINER_SELECTOR).innerHTML += toTrendingView(data);
        // append div ,to #container, with toTrendingView(data)
        // q(CONTAINER_SELECTOR).append(toTrendingView(data));
        // const postDiv = document.createElement('div');
        // postDiv.className = 'post';
        // postDiv.innerHTML = toTrendingView(data);
        // q(CONTAINER_SELECTOR).append(postDiv);

    //     const postDiv = document.createElement('div');
    //   postDiv.className = 'post';
    //           const data = await loadInfiniteScroll();
    //     document.getElementsByClassName('post').innerHTML = toTrendingView(data);
    //     document.querySelector(CONTAINER_SELECTOR).append(postDiv);

    }
}
export const loadInfiniteScroll = async () => {
    const response = await fetch(getUrl(30,0));
    const result = await response.json();
  
    return result.data;
  };

//   function appendDataToDOM(data) {
//     data.forEach(post => {
//       const postDiv = document.createElement('div');
//       postDiv.className = 'post';
//       postDiv.innerHTML = toTrendingView(data);
//       contentDiv.appendChild(postDiv);
//     });
//   }

  