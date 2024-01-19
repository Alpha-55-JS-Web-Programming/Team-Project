import { loadSingleGif } from "../requests/request-service.js";

export const toFavoritesView = (gifs) => `
<div id="movies">
  <h1>Favorite movies:</h1>
  <div class="content">
    ${gifs.find(loadSingleGif)|| '<p>Add some movies to favorites to see them here.</p>'}
  </div>
</div>
`;
