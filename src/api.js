const USER_DATA_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const MY_APP_ID = 'z9HUEUucfTMzK1TCwlWe';
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

const createApp = async () => {
  let appId = localStorage.getItem('appId');
  if (!appId) {
    const response = await postData('apps/');
    appId = await response.text();
    localStorage.setItem('appId', appId);
  }
  return appId;
};

const postLikes = async (likes) => {
  const res = await fetch(`${USER_DATA_API}apps/${MY_APP_ID}/likes`, {
    method: 'POST',
    body: JSON.stringify(likes),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return res;
};

const getLikes = async () => {
  const response = await fetch(`${USER_DATA_API}apps/${MY_APP_ID}/likes`);

  try {
    const likes = await response.json();
    return likes;
  } catch (error) {
    return error.JSON;
  }
};

const getComments = async (itemId) => {
  const response = await fetch(`${USER_DATA_API}apps/${MY_APP_ID}/comments?item_id=${itemId}`);
  try {
    const comments = await response.json();
    return comments;
  } catch (error) {
    return error.JSON;
  }
};

const postComment = async (data) => {
  const res = await fetch(`${USER_DATA_API}apps/${MY_APP_ID}/comments`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });

  return res;
};

export {
  postComment,
  getComments,
  getLikes,
  createApp,
  postLikes,
};