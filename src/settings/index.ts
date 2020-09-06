let BASE_URL = '';
let API_URL = '';
let SOCKET_URL = '';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

if (IS_PRODUCTION) {
} else {
  BASE_URL = '127.0.0.1:8000';
  API_URL = `http://${BASE_URL}/api`;
  SOCKET_URL = `ws://${BASE_URL}/api`;
}

export { BASE_URL, API_URL, SOCKET_URL };
