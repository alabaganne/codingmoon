import React, { FC } from "react";
import Checkbox from "@mui/material/Checkbox";
import calendar from "../../assets/icons/calendar.svg";

interface IProps {
  platform: "Facebook" | "Youtube" | "Instagram" | "Twitter" | "Tiktok";
  image: {
    src: any;
    width: string;
    height: string;
  };
  reach: number;
  totalReach: number;
  createdPosts: number;
  price: number;
  endDate: string;
  startDate: string;
}

const Channel: FC<IProps> = ({
  platform,
  image,
  reach,
  totalReach,
  createdPosts,
  price,
  endDate,
  startDate,
}) => {
  return (
    <div className=" flex justify-between gap-8">
      <div className=" flex items-center justify-between rounded flex-1 bg-dark-standard p-6 py-4">
        <img
          src={image.src}
          style={{ width: image.width, height: image.height }}
        />
        <div>
          <p className=" text-sm my-2">{`${platform} reaches ${reach}k`}</p>
          <p className=" text-sm my-2">{`${totalReach}% of total reaches`}</p>
          <p className=" text-sm my-2">{`${createdPosts} posts created`}</p>
        </div>
        <p className=" text-sm">Price per day {price}$/h</p>
        <Checkbox
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 38 },
            color: "white",
            "&.Mui-checked": {
              color: "white",
            },
          }}
        />
      </div>
      <div className="   rounded bg-dark-standard p-6">
        <p className=" text-sm">Schedule</p>
        <div className=" flex justify-between gap-4 items-center my-2">
          <p className=" text-sm">
            Start Date: <span className=" mx-4">{startDate}</span>
          </p>
          <img src={calendar} className=" w-7 h-7" />
        </div>
        <div className=" flex justify-between gap-4 items-center my-2">
          <p className=" text-sm">
            End Date : <span className=" mx-4">{endDate}</span>
          </p>
          <img src={calendar} className=" w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Channel;
