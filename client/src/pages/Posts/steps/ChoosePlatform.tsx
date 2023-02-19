import React from "react";
import Channel from "../Channel";
import facebook from "../../../assets/icons/facebook.svg";
import youtube from "../../../assets/icons/youtube.svg";
import twitter from "../../../assets/icons/twitter.svg";
import instagram from "../../../assets/icons/instagram.svg";
import tiktok from "../../../assets/icons/tiktok.svg";

const ChoosePlatform = () => {
  return (
    <div className=" bg-dark-2 p-8 flex flex-col gap-4 h-[60vh] overflow-scroll rounded">
      <Channel
        platform="Facebook"
        image={{ src: facebook, width: "63px", height: "63px" }}
        reach={33244553}
        totalReach={48.5}
        createdPosts={15}
        price={32}
        startDate="24/03/2023"
        endDate="27/03/2023"
      />
      <Channel
        platform="Youtube"
        image={{ src: youtube, width: "63px", height: "63px" }}
        reach={33244553}
        totalReach={48.5}
        createdPosts={15}
        price={32}
        startDate="24/03/2023"
        endDate="27/03/2023"
      />
      <Channel
        platform="Instagram"
        image={{ src: instagram, width: "63px", height: "63px" }}
        reach={33244553}
        totalReach={48.5}
        createdPosts={15}
        price={32}
        startDate="24/03/2023"
        endDate="27/03/2023"
      />
      <Channel
        platform="Tiktok"
        image={{ src: tiktok, width: "63px", height: "63px" }}
        reach={33244553}
        totalReach={48.5}
        createdPosts={15}
        price={32}
        startDate="24/03/2023"
        endDate="27/03/2023"
      />
      <Channel
        platform="Twitter"
        image={{ src: twitter, width: "63px", height: "63px" }}
        reach={33244553}
        totalReach={48.5}
        createdPosts={15}
        price={32}
        startDate="24/03/2023"
        endDate="27/03/2023"
      />
    </div>
  );
};

export default ChoosePlatform;
