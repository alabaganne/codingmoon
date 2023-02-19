import React from "react";
import { FiStar } from "react-icons/fi";
import celebrationIcon from "../../assets/icons/celebration.svg";
import starsSvg from "../../assets/icons/3stars.svg";
import { Link } from "react-router-dom";

const CreatePostSuccess = () => {
  return (
    <div className="py-16 flex-center">
      <div className="bg-dark-6 rounded-lg p-12 shadow-lg ">
        <div className="h-96 flex-col flex-center text-center">
          <div className="flex items-center gap-6">
            <div className="-translate-y-8 flex flex-col gap-4">
              <img src={starsSvg} className="h-10 w-10" alt="" />
              <img src={celebrationIcon} className="h-20 w-20 text-blue-500" />
            </div>
            <div className="text-4xl">
              Scheduled
              <br />
              Successfully
            </div>
            <div className="-translate-y-16 flex flex-col gap-4 relative">
              <div className="flex justify-end">
                <img src={starsSvg} className="h-10 w-10 right-0" alt="" />
              </div>
              <img
                src={celebrationIcon}
                className="h-20 w-20 text-blue-500 rotate-90"
              />
            </div>
          </div>
          <div className="pt-20">
            <Link className="btn-primary" to="/">
              Close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostSuccess;
