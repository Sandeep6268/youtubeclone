import React, { useContext, useEffect, useState } from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { API_KEY, Contexapi, formatYouTubeDuration, value_converter } from "../../Contex";
import moment from "moment/moment";

const Feed = () => {
  const { catagory } = useContext(Contexapi);
 

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${catagory}&key=${API_KEY}`;
      const response = await fetch(videoList_url);
      const data = await response.json();
      setData(data.items);
    };
  
    setData([]); // Clear previous data
    fetchData(catagory); // Call fetchData with latest category
  }, [catagory]);

  return (
    <>
      <div className="feed-cards">
        {data.map((items) => {
          return (
            
            <Link
              to={`/video/${items.snippet.categoryId}/${items.id}`}
              className="card"
            > 
              <div className="feed-img">
              <img src={`${items?items.snippet.thumbnails.high.url:items.snippet.thumbnails.default.url}`} alt="" />
                <p className="duratio">{formatYouTubeDuration(items.contentDetails.duration)}</p>
              </div>

              <div className="feed-video-info">
              <h2>{items?items.snippet.title:'no'}</h2>
              <h5>{items?items.snippet.channelTitle:'no'}</h5>
              <p>{`${value_converter(items?items.statistics.viewCount:'no')}`} Views &bull; {`${moment(items?items.snippet.publishedAt:'no').fromNow()}`}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Feed;
