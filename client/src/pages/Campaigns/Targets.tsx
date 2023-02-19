import React, { FC } from "react";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import youtube from "../../assets/icons/youtube.svg";

export type platform = "facebook" | "instagram" | "tiktok" | "youtube";

export interface IProps {
  platforms: platform[];
  imageClassName?: string;
}

const Targets: FC<IProps> = ({ platforms, imageClassName = "" }) => {
  const platformsObject = {
    facebook: <img className={imageClassName} src={facebook} />,
    instagram: <img className={imageClassName} src={instagram} />,
    tiktok: <img className={imageClassName} src={tiktok} />,
    youtube: <img className={imageClassName} src={youtube} />,
  };

  return (
    <div className="flex items-center gap-2">
      {platforms.map((platform, index) => platformsObject[platform])}
    </div>
  );
};

export default Targets;
