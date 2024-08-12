import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchList] = useState([]);
  
  // Example dynamic data
  const bannerData = {
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/002/236/321/small/movie-trendy-banner-vector.jpg",
    title: "",
  };

  // Function to add a movie to the watchlist
  const handleAddtoWatchList = (movieObj) => {
    const newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  // Function to remove a movie from the watchlist
  const handleRemoveFromWatchList = (movieObj) => {
    const filteredWatchList = watchlist.filter((movie) => movie.id !== movieObj.id);
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList)); // Update local storage
    setWatchList(filteredWatchList);
  };

  // Load watchlist from local storage on component mount
  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner imageUrl={bannerData.imageUrl} title={bannerData.title} />
              <Movies
                watchlist={watchlist}
                handleAddtoWatchList={handleAddtoWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <WatchList
              watchlist={watchlist}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
