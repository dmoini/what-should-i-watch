// https://github.com/dondi/bazaar/blob/master/giphy-sample-react-hooks/src/api.js-real
let api = "https://misconfigured-app.com/";
const API_KEY = process.env.REACT_APP_GUIDEBOX_API_KEY;

const apiHost = (host) => {
  api = host;
};
const urlFor = (resource) => `${api}${resource}`;

const HTTP_OK = 200;

const throwResponseError = (response) => {
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const emitNativeError = (error) => {
  throw error;
};

const statusCheck = (successStatuses) => (response) => {
  if (successStatuses.includes(response.status)) {
    return response;
  } else {
    throwResponseError(response);
  }
};

const okCheck = statusCheck([HTTP_OK]);

const parameters = (params) => {
  const result = new URLSearchParams(params);
  result.set("api_key", API_KEY);
  return result;
};

const query = async (resource, params) => {
  try {
    const response = await fetch(
      `${urlFor(resource)}?${parameters(params)}`,
      {}
    );
    const responseJson = okCheck(response);
    return responseJson.json();
  } catch (error) {
    emitNativeError(error);
  }
};

const searchMovies = (params) => query("/movies", params);
const searchShows = (params) => query("/shows", params);

export { apiHost, searchMovies, searchShows };
