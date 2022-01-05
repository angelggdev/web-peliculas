# Web Peliculas

Angular project created using:
- Bootstrap
- The Move DataBase API
- NgRx Store and NgRx Effects

## Components

### Billboard Component

This component uses a Bootstrap Carousel to display the billboard movies.

### Home Component

Component that's displayed on the main route of the app, it renders the <strong>Billboard Component</strong> and the <strong>Movie List Component</strong> to show the Billboard Movies.

### Movie Component

Component that renders a movie Card with the poster photo, title and rating of a movie.

### Movie Detail Component

Component that renders a card with the details of a movie (title, description, poster photo and rating) and maps an array of cast members, rendering one <strong>Cast Member Component</strong> for each Item.

### Cast Member Component

Component that renders a Card with the profile photo and name of a cast member.
### Movie List

Component that maps an array of movies and returns a <strong>Movie Component</strong> for each item.

### Nav Bar

Component that renders the navigation bar and contains a field to search movies.

### Search Results

Component that maps an array of movie search results and returns a <strong>Movie Component</strong> for each item.

## Services

### Movie Service

This service contains the API calls and other functions:

    - getBillboardMovies: function that returns an API call to get the billboard movies. It receives a page number as argument to allow the exploration of all the results.

    -searchMovie: function that returns an API call to get the results of a movie search. It receives a string argument with the query for the search and a page number.

    -getMovieDetails: function that returns an API call to get the details of a movie. It receives an id number as argument.

    -getCast: function that returns an API call to get the cast members of a movie. It receives the movie Id as argument.

    -getStarsConfig: function that returns an array of string that determines how the rating of each movie will be displayed.

    -constructPaginator: function that returns an array of number to display in the paginator of the home and search results components.

## Store

### Billboard Movies

Stores the billboard movies array.

### Movie Details

Stores the movie details object and the cast members array.

### Movie Search

Stores the movie search results array.