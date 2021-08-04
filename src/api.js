const MEAL_API = 'https://www.themealdb.com/api/json/v1/1';
const USER_DATA_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const postData = async (url) => {
  const response = await fetch(`${USER_DATA_API}${url}`, {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
      'Content-type': 'application/json',
    },
  });

  return response;
};

export const createApp = async () => {
  let id = localStorage.getItem('appId');

  if (!id) {
    const response = await postData('apps/');
    id = await response.text();
    localStorage.setItem('appId', id);
  }
  return id;
};

export const postLikes = async (likes) => {
  const res = await fetch(`${USER_DATA_API}apps/ZvZAdGleGXTZdcrqkd8w/likes`, {
    method: 'POST',
    body: JSON.stringify(likes),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return res;
};

export const getLikes = async (appId) => {
  const response = await fetch(`${USER_DATA_API}apps/${appId}/likes`);

  try {
    const likes = await response.json();
    return likes;
  } catch (error) {
    return error.JSON;
  }
};

export const getComments = async (item_id) => {
  const response = await fetch(`${USER_DATA_API}apps/ZvZAdGleGXTZdcrqkd8w/comments?item_id=${item_id}`);
  try {
    const comments = await response.json();
    return comments;
  } catch (error) {
    return error.JSON;
  }
};

export const postComment = async (comment) => {
  const res = await fetch(`${USER_DATA_API}apps/ZvZAdGleGXTZdcrqkd8w/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return res;
};