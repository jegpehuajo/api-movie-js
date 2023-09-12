const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  haders:{
    'Content-type':'application/json;charset=utf-8',
  },
  params: {
    'api_key': API_KEY,
  },
})

async function getTrendingMoviesPreview(){
    const {data} = await api('trending/movie/day');
    const movies = data.results;
    movies.forEach(movie => {
      const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie-container');

      const movieImg = document.createElement('img');
      movieImg.classList.add('movie-img');
      movieImg.setAttribute('alt',movie.title);
      movieImg.setAttribute(
        'src',
        'https://image.tmdb.org/t/p/w300' + movie.poster_path,
      );
      
      movieContainer.appendChild(movieImg);
      trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
    console.log({data});
}

async function getCategoriesPreview(){
  const {data} = await api('genre/movie/list');

    // try {
    //   const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY);
    //   if (!response.ok) {
    //     throw new Error('La solicitud no fue exitosa');
    //   }
    //   const data = await response.json();
  
    //   // Resto del código para procesar los datos
    // } catch (error) {
    //   console.error('Error en la solicitud fetch:', error);
    // }

  const categories = data.genres;
  categories.forEach(category => {
    const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-container');
    categoryTitle.setAttribute('id',category.name);    
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    previewCategoriesContainer.appendChild(categoryContainer);
  });
}