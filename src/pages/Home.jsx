import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div className="App">
      <Hero onSearch={handleSearch}/>
      {isLoggedIn ? (
        <>
          <PopularMovie searchQuery={searchQuery} />
        </>
      ) : (
        <>
          <div className="text-center">
            <h3>Tidak ada Movie Popular</h3>
            <h3>Silahkan Login untuk melihat Movie Popular</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
