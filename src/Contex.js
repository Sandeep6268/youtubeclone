import { createContext } from "react";

export const Contexapi = createContext();
//youtube
// export const API_KEY = "AIzaSyAhh9FTRdkMoKTG-yXbiHzdTf72KkG3qjQ"; //sandy77
export const API_KEY = "AIzaSyCwY__425rvXBG14WVGDjp6p7LtJU6pit4"; //sandy77 2.0
// export const API_KEY = "AIzaSyARZp_gmq_EGNPegU-KSEdOc-nxA15D0Lg";  //free
// export const API_KEY = "AIzaSyCmKOzGnaFcDj5aXuvZza6SgLy8XrsRyz8";  //sandy1137
// export const API_KEY = "AIzaSyBR529mLOYw0bSBqbePiyxhhxD0mo21eCA"; //sandy4202530
// export const API_KEY = "AIzaSyBLkNJNCImIO0VP0HrlL7ibLIQWp_gTZc0"; //farzi

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};

export function formatYouTubeDuration(isoDuration) {
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  } else {
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }
}
