const newApi = async () => {
  fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f40c691532mshbbfb84c09586d2bp1aa6cajsn9c2db14b73a5",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
  })
  .then(response => response.json())
  .then(response => {
    const data = response.d;
    data.forEach((ele) => {
      console.log(ele.imageUrl);
      console.log(ele.id);
      console.log(ele.l);
    });
  })
  .catch(err => {
    console.error(err);
  });
}

export default newApi();


