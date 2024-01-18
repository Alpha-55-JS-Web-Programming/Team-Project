/**
 *
 * @param {Array <
 * id:string,
 * rating: string,
 * title: string,
 * images: {
 *  fixed_width:{
 *    url: string;
 *   },
 *  },
 * user: {
 * avatar_url: string,
 * },
 * }>} trending
 * @returns
 */
export const toTrendingView = (trending) => `
<div id="trending">
  <h1>Trending</h1>
  <div class="content">
    ${trending.map(toSingleTrendingView).join("\n")}
  </div>
</div>
`;

const toSingleTrendingView = (trending) => `
<div class="trending">
  <h1>${trending.name}</h1>
  <p>${trending.moviesCount} movies</p>
  <button class="view-trending-btn" data-trending-id="${trending.id}">View trending</button>
</div>
`;
