import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { Contexapi } from "./Contex";
import SearchResult from "./Components/SearchResult/SearchResult";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [catagory,setCatagory] = useState(0);
  const [query,setQuery] = useState([]);
  const [cataId,setCataId] = useState();
  const [catagoryIdPlay, setCatagoryIdPlay] = useState(null);
  
  
  return (
    <>
      <Contexapi.Provider value={{setSidebar:setSidebar,sidebar:sidebar,catagory:catagory,setCatagory:setCatagory,query:query,setQuery:setQuery,cataId:cataId,setCataId:setCataId,catagoryIdPlay:catagoryIdPlay,setCatagoryIdPlay:setCatagoryIdPlay}}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/video/:catagoryId/:videoId" element={<Video />} />
          <Route path="/searchquery" element={<SearchResult/>} />
        </Routes>
      </Contexapi.Provider>
    </>
  );
};

export default App;
