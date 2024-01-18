export  const displayGifDetails = async (event, trendingItem) => {
  const currentElement = event.currentTarget;

  // Simulating an asynchronous operation (remove this in your actual code)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newDiv = document.createElement('div');
  newDiv.innerHTML = `Gif name: ${trendingItem.title}`;
  currentElement.appendChild(newDiv);
};
/**
*
* @param {Array<{
  * id: string,
  * rating: string,
  * title: string,
  * images: {
  *  fixed_width: {
  *   url: string,
  *  },
  * },
  * user: {
  *  avatar_url: string,
  *  username: string,
  * },
  * }>} trendingGifs
  */

export const toTrendingView = (trendingGifs) => {
  return `
      <section class="trending">
        <h2>Trending</h2>
        <ul>
          ${trendingGifs.map(toTrendingItemView).join('')}
        </ul>
      </section>
    `;
};

const toTrendingItemView = (trendingItem) => `
    <li>
      <a href="#/trending/${trendingItem.id}">
        <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}">
        <button class="view-gif-details"  data-view-gif-details=${trendingItem.id} >View Gif Details</button>
      </a>
    </li>
  `;
