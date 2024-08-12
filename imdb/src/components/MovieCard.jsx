import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  backdrop_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="relative h-[40vh] w-[25vh] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => handleRemoveFromWatchList(movieObj)}>&#10060;</div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="absolute bottom-0 text-white text-xl w-full p-2 rounded-b-xl text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
