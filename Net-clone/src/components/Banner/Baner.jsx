import React, { useEffect, useState } from 'react'
import axios from '../../Api/Axios'
import request from '../../Api/Apireq'

const Baner = () => {
    const [movie,setMovie]=useState({})
    const {fetchTrending}= request
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchTrending)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
            return request
        }
        fetchData()
    },[])
    const trancate = (str,n)=>{
        return str?.length > n ? str.substr(0,n-1)+'...' : str
    }

  return (
    <div className='w-full h-[400px] flex flex-col justify-center items-cente' style={{
        backgroundSize:'cover',
        backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    }}>
        <h1 className='text-xl text-white ml-8 font-bold'>{movie.title|| movie.name }</h1>
        <span className='flex flex-row  my-3'>

        <button className='px-5 py-3 text-center   w-[150px] ml-8  bg-sky-400 rounded-md hover:bg-gray-500 text-xl'>play</button>
        <button className='px-5 py-3 text-center  w-[150px] ml-2 bg-sky-400 rounded-md  bg-opacity-20 text-white hover:bg-gray-500 text-xl'>My list</button>
        </span>
        <p className='w-[30%] text-white ml-8'>{trancate(movie?.overview,150)}</p>
        
      
    </div>
  )
}

export default Baner
