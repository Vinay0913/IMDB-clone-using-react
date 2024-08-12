import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination"; // Import the Pagination component

function Movies({ watchlist, handleAddtoWatchList, handleRemoveFromWatchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    if (pageNo < totalPages) {
      setPageNo(pageNo + 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b7ed1056fb95863c07aff0e15f116a65&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">TRENDING MOVIES</div>

      <div className="flex flex-row flex-wrap justify-around gap-5">
        {movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            movieObj={movieObj}
            backdrop_path={movieObj.backdrop_path}
            name={movieObj.original_title}
            handleAddtoWatchList={handleAddtoWatchList}
            watchlist={watchlist}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
          />
        ))}
      </div>

      <Pagination
        currentPage={pageNo}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}

export default Movies;
