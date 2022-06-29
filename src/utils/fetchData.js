const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3f4da43359msh9faf719ab96b22bp1b0c8djsn07f167993ad8',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  console.log(data);
  return data;
};

export { exerciseOptions, fetchData };
