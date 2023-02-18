import React, { FC } from "react";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import youtube from "../../assets/icons/youtube.svg";

export type platform = "facebook" | "instagram" | "tiktok" | "youtube";

export const platformsObject = {
  facebook: <img src={facebook} />,
  instagram: <img src={instagram} />,
  tiktok: <img src={tiktok} />,
  youtube: <img src={youtube} />,
};

interface IProps {
  platforms: platform[];
}

const Targets: FC<IProps> = ({ platforms }) => {
  return (
    <div className=" flex items-center gap-1">
      {platforms.map((platform, index) => platformsObject[platform])}
    </div>
  );
};

export default Targets;
