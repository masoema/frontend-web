import CONFIG from './config';

const API_ENDPOINT = {
  // LIST: `${CONFIG.BASE_URL}/list?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  // SEARCH: `${CONFIG.BASE_URL}/search?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  // DETAIL: (id) => `${CONFIG.BASE_URL}/detail${id}?api_key=${CONFIG.KEY}`,
  // REVIEW: (id) => `${CONFIG.BASE_URL}/review/${id}?api_key=${CONFIG.KEY}`,
  LIST: `${CONFIG.BASE_URL}/list`,
  SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}&api_key=${CONFIG.KEY}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  //REVIEW: (id) => `${CONFIG.BASE_URL}/review/${id}?api_key=${CONFIG.KEY}`
};
export default API_ENDPOINT;
