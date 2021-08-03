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

export const getMeals = async () => {
  const response = await fetch(`${MEAL_BASE_URL}/search.php?f=b`);
  const meals = await response.json();
  return meals;
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

export const likeMeal = async ({ appId, mealId }) => {
  const response = await post(`apps/${appId}/likes`, {
    item_id: mealId,
  });

  return response;
};

export const getMealById = async (id) => {
  const response = await fetch(`${MEAL_API}/lookup.php?i=${id}`);
  const allMeals = await response.json();
  return allMeals[0];
};

export const postComment = async (comment) => {
  const res = await fetch(`${USER_DATA_API}apps/ZvZAdGleGXTZdcrqkd8w/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json',
    },
  });
  console.log(res);
  return res;
};