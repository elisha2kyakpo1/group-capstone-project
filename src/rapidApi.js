export const newApi = async () => {
  const resp = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f40c691532mshbbfb84c09586d2bp1aa6cajsn9c2db14b73a5',
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    },
  });
  try {
    const data = await resp.json();
    const finalData = data.d;
    return finalData;
  } catch (error) {
    return error.JSON;
  }
};