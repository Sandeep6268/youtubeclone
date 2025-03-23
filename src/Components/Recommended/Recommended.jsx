import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Recommended.css";
import { API_KEY, Contexapi, value_converter } from "../../Contex";
import { Link } from "react-router-dom";

const Recommended = () => {
  const { catagoryId } = useParams();
  const {catagoryIdPlay} = useContext(Contexapi);
  // const [catagory, setCatagory] = useState(catagoryId);
  const [apiData, setApiData] = useState([]);
console.log(catagoryIdPlay)
  // useEffect(() => {
  //   setCatagory(catagoryId);
  // }, [catagoryId]);

  useEffect(() => {
    if (!catagoryIdPlay) return;
  
  
    const fetchData = async () => {
      const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=IN&videoCategoryId=${catagoryIdPlay}&key=${API_KEY}`;
  
      try {
        const res = await fetch(relatedVideo_url);
        const data = await res.json();
  
        if (data.items && Array.isArray(data.items)) {
          setApiData([...data.items]);
        } else {
          console.error("⚠️ No Data Found");
        }
      } catch (error) {
        console.error("❌ API Error:", error);
      }
    };
  
    fetchData();
  }, [catagoryIdPlay]); // Ensure this runs on category change

  return (
    <div className="recommended-main-container">
      {apiData.length > 0 ? (
        apiData.map((items) => (
          <Link 
            to={`/video/${catagoryIdPlay}/${items.id}`} 
            key={items.id}
            className="recommended-container"
          >
            
            <div className="recommended-img">
              <img src={items.snippet.thumbnails.high.url} alt="thumbnail" />
            </div>
            <div className="recommended-info">
              <h3>{items.snippet.title.slice(0, 50)}</h3>
              <p>{items.snippet.channelTitle}</p>
              <p>{value_converter(items.statistics.viewCount)} Views</p>
            </div>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Recommended;
