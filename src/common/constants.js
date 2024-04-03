export const HOME = "home";

export const TRENDING = "trending";

export const FAVORITES = "favorites";

export const UPLOAD = "upload";

export const FULL_HEART = "❤";

export const EMPTY_HEART = "♡";

export const ABOUT = "about";

export const API_KEY = "1zuFE91nbybP5xGff9qAtw2N3j2zK7MF";

export const getUrl =(limit = 30, offset)=>
{
    return `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset+limit }`;
}

export const CONTAINER_SELECTOR = "#container";

const date = Date.now();
const currentDate = new Date(date);

export const date2 = currentDate.toLocaleDateString("en", {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "numeric"
});
