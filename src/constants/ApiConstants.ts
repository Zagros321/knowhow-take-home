export const API_KEY = import.meta.env.VITE_NOT_SO_SECRET_GIPHY_API_KEY;
export const GIPHY_API_URL = "https://api.giphy.com/v1";
export const GIPHY_SEARCH_API_URL = `${GIPHY_API_URL}/gifs/search?api_key=${API_KEY}`;
