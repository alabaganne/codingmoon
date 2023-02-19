import React from "react";
import image from "../../../assets/icons/image.svg";
import video from "../../../assets/icons/video.svg";

const CreateAd = () => {
  return (
    <form>
      <div>
        <label
          htmlFor="inputFile"
          className=" flex items-center justify-center flex-col cursor-pointer gap-1 bg-s50 w-1/3 aspect-square rounded-xl"
        >
          <img src={image} alt="image" />
          <p className=" text-s300 text-base">Add image</p>
          <input id="inputFile" type={"file"} className=" hidden" />
        </label>
        <label
          htmlFor="inputFile"
          className=" flex items-center justify-center flex-col cursor-pointer gap-1 bg-s50 w-1/3 aspect-square rounded-xl"
        >
          <img src={video} alt="image" />
          <p className=" text-s300 text-base">Add image</p>
          <input id="inputFile" type={"file"} className=" hidden" />
        </label>
      </div>
    </form>
  );
};

export default CreateAd;
