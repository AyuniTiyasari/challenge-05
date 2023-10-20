import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const PopularMovie = ({ searchQuery }) => {
    const [movieList, setMovieList] = useState([]);
    const navigate = useNavigate();
  
    const getMovie = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/v1/movie/popular`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setMovieList(response.data.data);
      } catch (error) {
        console.error(error);
      }
      };
  
    const searchMovie = async (query) => {
  
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/v1/search/movie?page=1&query=${query}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setMovieList(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      if (searchQuery) {
        searchMovie(searchQuery);
      } else {
        getMovie();
      }
    }, [searchQuery]);
  return (
    <div>
      <div className="movie-list">
        <h3 className="">
          {searchQuery ? "Search Results" : "Popular Movies"}
        </h3>
        <div className="see-all">
          <button
            type="button"
            className="btn btn-link"
            style={{ color: "red" }}
          >
            See All Movie
          </button>
        </div>
      </div>
      <div className="movie">
        {movieList.map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className="poster"
            key={movie.id}
            onClick={() => navigate(`/detailMovie/${movie.id}`)}
          />
        ))}
      </div>
    </div>
  )
}

export default PopularMovie