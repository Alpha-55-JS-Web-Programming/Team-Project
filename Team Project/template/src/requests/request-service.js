import { API_KEY } from "../common/constants.js";

/**
 *
 * @returns {Promise<Array<{
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
 * }>>} - array of trending gifs
 */
export const loadTrendingGifs = async () => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${30}&offset=0&rating=g`);
  const result = await response.json();

  return result.data;
};

/**
 *
 * @param {string} gifId - The unique identifier for the GIF.
 * @returns {Promise<{
 *   id: string,
 *   rating: string,
 *   title: string,
 *   images: {
 *     fixed_width: {
 *       url: string
 *     },
 *   },
 *   user?: {
 *     avatar_url: string,
 *     username: string
 *   }
 * }>} A promise that resolves to an object containing details about the GIF.
 */
export const loadGifDetails = async (gifId) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`);
  const result = await response.json();

  return result.data;
};

/**
 *
 * @param {string} searchInputValue - The search query string used to find GIFs.
 * @returns {Promise<Array<{
 *   id: string,
 *   rating: string,
 *   title: string,
 *   images: {
 *     fixed_width: {
 *       url: string
 *     }
 *   },
 *   user?: {
 *     avatar_url: string,
 *     username: string
 *   }
 * }>>} A promise that resolves to an array of GIF objects matching the search query.
 */
export const loadSearchResults = async (searchInputValue) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchInputValue}&limit=25&offset=0&rating=g&lang=en`);
  const result = await response.json();

  return result.data;
};

/**
 *
 * @returns {Promise<{
 *   id: string,
 *   rating: string,
 *   title: string,
 *   images: {
 *     fixed_width: {
 *       url: string
 *     }
 *   },
 *   user?: {
 *     avatar_url: string,
 *     username: string
 *   }
 * }>} A promise that resolves to an object containing details about the randomly selected GIF.
 */
export const loadRandomGif = async () => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
  const result = await response.json();

  return result.data;
};

/**
 *
 * @param {File} file - The GIF file to be uploaded.
 * @returns {Promise<boolean>} A promise that resolves to a boolean indicating the success status of the upload operation.
 * @throws {Error} Throws an error if the upload operation fails or the server responds with an unexpected status code.
 */
export const uploadGif = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", API_KEY);
  const result = await fetch("https://upload.giphy.com/v1/gifs", {
    method: "POST",
    body: formData,
  });

  const response = await result.json();
  const gifId = response.data.id;

  localStorage.setItem("uploadedGifId", gifId);

  if (!result.ok) {
    throw new Error(
      `Unexpected status code when uploading GIF: ${
        result.status
      }, ${await result.text()}`
    );
  }

  return result.ok;
};

/**
 *
 * @returns {Promise<string>} A promise that resolves to the ID of the uploaded GIF as a string, or an empty array if no GIF ID is stored.
 */
export const getGifUploadedId = async () => {
  const uploadedGifId = localStorage.getItem("uploadedGifId") || [];

  return uploadedGifId;
};
