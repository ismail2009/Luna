import storage from '../utils/storage';

export const setting = {
  HOST_URL: 'http://164.90.185.34',
  API_URL: 'http://164.90.185.34/api',
  API_RESOURCES: 'http://164.90.185.34/',
  WEB_CLIENT_ID:
    '353447051554-7rq1hu65bqiak9tujdc3k69pjvvihuou.apps.googleusercontent.com',
  CLIENT_SECRET: 'bYSfedXEw7JPyzGMVwF0b0Co4oRCShOPHJRCB0eM',
  FACEBOOK: 'facebook',
  GRANT_TYPE: 'social',
};

const myHeaders = token => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  if (token) {
    headers.Authorization = token;
  }
  return headers;
};

const post = ({payload, api}) => {
  console.log({payload, api}, '{payload, api}');
  return fetch(setting.API_URL + api, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: myHeaders(),
  }).then(res => ({
    statusCode: res.status,
    response: res.json(),
  }));
};

const socialAuth = ({payload, api}) => {
  console.log({payload, api}, '{payload, api}');
  return fetch(setting.HOST_URL + api, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: myHeaders(),
  }).then(res => ({
    statusCode: res.status,
    response: res.json(),
  }));
};
const getWithAuth = async ({payload, api}) => {
  const token = await storage.getItem('@user/token');
  const url = setting.API_URL + api;
  const config = {
    method: 'GET',
    headers: myHeaders(token),
  };
  if (payload) {
    config.body = payload;
  }
  console.log(url, '{payload, api}');
  return await fetch(url, config).then(res => ({
    statusCode: res.status,
    response: res.json(),
  }));
};

export {post, getWithAuth, socialAuth};
