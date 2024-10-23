import React from "react";
import Row from "../Row/Row";
import request from "../../../Api/Apireq";

const Allrows = () => {
  const { fetchTrending,fetchTopRated,fetchActionMovies,fetchComedyMovies,fetchHorrorMovies,fetchRomanceMovies,fetchDocumentaries} = request;
  return (
    <>
      <Row title="Most Tranding" fetchurl={fetchTrending} islargrow={true} />
     <Row title="Top Rated" fetchurl={fetchTopRated} islargrow={false} />
     <Row title="Action Movies" fetchurl={fetchActionMovies} islargrow={false} />
     <Row title="Comedy Movies" fetchurl={fetchComedyMovies} islargrow={false} />
     <Row title="Horror Movies" fetchurl={fetchHorrorMovies} islargrow={false} />
     <Row title="Romance Movies" fetchurl={fetchRomanceMovies} islargrow={false} />
     <Row title="Documentaries" fetchurl={fetchDocumentaries} islargrow={false} />



    </>
  );
};

export default Allrows;
