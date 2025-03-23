import React, { useState, useEffect } from 'react';
import './Video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Video = () => {
  const { videoId, catagoryId } = useParams();
  const [showRecommended, setShowRecommended] = useState(false);

  useEffect(() => {
    setShowRecommended(false); // Reset recommended section on video change
    const timer = setTimeout(() => {
      setShowRecommended(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [videoId, catagoryId]); // Dependecy me `videoId` aur `catagoryId` dono rakho

  return (
    <div className='play-video-page'>
      <PlayVideo videoId={videoId} />
      {showRecommended?showRecommended && <Recommended catagory={catagoryId} videoId={videoId} />:<p>Loading...</p>}
    </div>
  );
};

export default Video;
