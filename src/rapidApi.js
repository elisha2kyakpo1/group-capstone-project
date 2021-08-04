export const newApi = async () => {
  const resp = await fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "e94f9e1e04msh227cee818a175c1p17529cjsn07677b0e6d21",
      "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
  })
  try {
  const data = await resp.json();
    const finalData = data.d;
    return finalData;
  } catch (error) {
    return error.JSON;
  }
}