window.addEventListener('DOMContentLoaded', navigator,false);
window.addEventListener('hashchange', navigator,false);

function navigator() {
  console.log({location});
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    moviePage();
  } else if (location.hash.startsWith("#category=")) {
    categoryPage();
  } else {
    homePage();
  }
}

function homePage() {
  console.log("Home Page!");
  getTrendingMoviesPreview();
  getCategoriesPreview();
}

function trendsPage() {
  console.log("Trends!");
}

function searchPage() {
  console.log("Search!");
}

function moviePage() {
  console.log("Movie!");
}

function categoryPage() {
  console.log("Category!");
}