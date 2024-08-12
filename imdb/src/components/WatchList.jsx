import React, { useEffect, useState } from "react";
import genreids from "../utility/genre";

function WatchList({ watchlist, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => genreids[movieObj.genre_ids[0]]);
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  const filteredMovies = watchlist
    .filter((movieObj) => currGenre === 'All Genres' || genreids[movieObj.genre_ids[0]] === currGenre)
    .filter((movieObj) => movieObj.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={
              currGenre === genre
                ? "mx-2 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center bg-blue-400 cursor-pointer"
                : "mx-2 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center bg-gray-400 cursor-pointer"
            }
          >
            {genre}
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
          placeholder="Search Movies"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.map((movieObj) => (
              <tr className="border-b-2" key={movieObj.id}>
                <td className="flex items-center py-4 px-4">
                  <img
                    className="h-[6rem] w-[10rem]"
                    src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                    alt={movieObj.title}
                  />
                  <div className="mx-10 py-0">{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genreids[movieObj.genre_ids[0]]}</td>
                <td
                  onClick={() => handleRemoveFromWatchList(movieObj)}
                  className="text-red-800 cursor-pointer"
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
