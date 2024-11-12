# Getting Started with Create React App

This line of code defines a SEARCH_API URL that allows you to search for movies by name using the Movie Database (TMDb) API.

Here’s a breakdown of the code:

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

Explanation:

-> https://api.themoviedb.org/3/search/movie: This is the base URL for searching movies in TMDb.
    ?api_key=${KEY}: This part adds your API key (stored in the KEY variable) to the URL. The API key is required for authentication and allows TMDb to identify your requests.
    &query=: This part is a placeholder for the search term. When you want to search for a movie, you append the movie name to the end of the SEARCH_API string.

Example Usage:

If you want to search for a movie called "Inception", you would make a request to the following URL:

const url = `${SEARCH_API}Inception`;
// Resulting URL: https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=Inception

When you send a request to this URL, the TMDb API will return movies matching the search term "Inception."