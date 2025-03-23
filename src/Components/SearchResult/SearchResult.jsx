import React, { useContext, useEffect, useState } from "react";
import "./SearchResult.css";
import { API_KEY, Contexapi } from "../../Contex";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const SearchResult = () => {
  
  const { query,cataId,catagoryIdPlay } = useContext(Contexapi);
  const [searchData, setSearchData] = useState([]);
  
  


  const fetchData = async () => {
 // const searchData_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`;
    const searchData_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`;
    await fetch(searchData_url)
      .then((res) => res.json())
      .then((data) => setSearchData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [query]);


  

  const [apiData, setApiData] = useState(null);
  const fetchVideoData = async () => {
      const VideoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      await fetch(VideoDetails_url)
        .then((res) => res.json())
        .then((data) => setApiData(data.items));
    };
    useEffect(() => {
      fetchVideoData();
    }, []);
    

  return (
    <div className="search-recommended-main-container">
     
      {searchData.map((items) => {
        return (
          
          <Link
            to={`/video/${catagoryIdPlay}/${items.id.videoId}`}
            
            className="search-recommended-container"
          >
            <div className="recommended-img">
              <img src={`${items?items.snippet.thumbnails.high.url:'no'}`} alt="" />
            </div>
            <div className="search-recommended-info">
              <h3>{items?items.snippet.title:'no'}</h3>
              <p>{items?items.snippet.channelTitle:'no'}</p>
              <p>{moment(items?items.snippet.publishedAt:'').fromNow()}</p>
            </div>
            <hr  className="hr"/>
          </Link>
          
        );
      })}

    </div>
  );
};

export default SearchResult;
