import { toTrendingView } from "./trending-view.js";

/**
 *
 * @param {Array} movies - An array of movie objects to be displayed.
 * @param {string} searchTerm - The search term used to find these movies.
 * @returns {string} HTML string representing the search view, including all movies found and the search term.
 */
export const toSearchView = (movies, searchTerm) => `
<div id="movies">
  <h1>Movies found for "${searchTerm}":</h1>
  <div class="content">
    ${movies.map(toTrendingView).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
  </div>
</div>
`;
