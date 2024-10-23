const Api = import.meta.env.VITE_API_KEY;
const request = {
    fetchTrending: `/trending/all/week?api_key=${Api}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${Api}&with_networks=213`,//Not working 
    fetchTopRated: `/movie/top_rated?api_key=${Api}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${Api}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${Api}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${Api}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${Api}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${Api}&with_genres=99`,
}
export default request

