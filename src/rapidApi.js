const newApi = async () => {
  const resp = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', {
   'method': 'GET',
    'headers': {
      'x-rapidapi-key': 'ae91d2ca32mshf9bb7b80a3d66dcp16b5b2jsn1dcd9a44f815',
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

export default newApi;