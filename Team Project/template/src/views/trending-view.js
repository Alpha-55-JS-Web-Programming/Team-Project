export const toGifDetailsView = (trendingItem) => {
  // const currentElement = event.currentTarget;

  // Simulating an asynchronous operation (remove this in your actual code)
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  // const newDiv = document.createElement('div');
  // const info = `
  //     <div class="gif-info">
  //       <h2>${trendingItem.title}</h2>
  //       <p>Rating: ${trendingItem.rating}</p>
  //       <p>Import Date: ${trendingItem.import_datetime}</p>
  //     </div>
  //   `;
  // newDiv.innerHTML = info;
  // currentElement.appendChild(newDiv);

  return `
      <div class="gif-info">
        <h2>${trendingItem.title}</h2>
        <p>Rating: ${trendingItem.rating}</p>
        <p>Import Date: ${trendingItem.import_datetime}</p>
        <p>Gif Id: ${trendingItem.id}</p>
      </div>
    `;
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

export const toTrendingItemView = (trendingItem) => `
    <li>
      <a href="#/trending/${trendingItem.id}">
        <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}">
        <button class="view-gif-details-button"  data-gif-id=${trendingItem.id} >View Gif Details</button>
      </a>
    </li>
  `;
