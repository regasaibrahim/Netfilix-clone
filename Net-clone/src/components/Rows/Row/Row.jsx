import React, { useEffect, useState } from "react";
import axios from "../../../Api/Axios";
import movietrailer from 'movie-trailer'
import YouTube from "react-youtube";


const Row = ({ title, fetchurl,islargrow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
 useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchurl]);
  const handleclick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movietrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
      .catch((error) => console.log(error));
    }
    };

  return (
    <>
    <h2 className="text-white text-2xl ml-8 font-bold">{title}</h2>
    <div className="row__posters overflow-y-scroll scrollbar-none gap-2" >
      {movies?.map((movie,index) => (
        
          <img onClick={()=>handleclick(movie)}
           key={index} src={`https://image.tmdb.org/t/p/original${islargrow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}  className={`${islargrow? "row__posterlarge":"row__poster"}`} />
      
      ))}
    
    </div>
    <div className="p-[40px]">
      {trailerUrl && <YouTube videoId={trailerUrl} opts={{
        height:"390",
        width:"100%",
        playerVars:{
          autoplay:1,
        },
      }}/>}
    </div>
    </>
  );
};

export default Row;
