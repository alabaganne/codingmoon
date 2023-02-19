import React from "react";
import {
  FiCalendar,
  FiEye,
  FiMousePointer,
  FiPlus,
  FiThumbsUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import image from "../../assets/1.jpg";

const Posts = () => {
  return (
    <div className="py-12 container mx-auto">
      <div className="flex-between">
        <div className="text-3xl font-semibold">Bomb Of Flavour</div>
        <div>
          <Link to="create" className="btn-primary">
            <FiPlus className="h-5 w-5" />
            Create Post
          </Link>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-4">
        <div className="rounded-lg overflow-hidden shadow bg-dark-6">
          <div className="p-3 pb-0">
            <div className="rounded-lg overflow-hidden">
              <img
                src={image}
                alt=""
                className="object-cover max-h-64 w-full object-center"
              />
            </div>
          </div>
          <div className="p-4 mt-1">
            <div className="text-sm text-gray-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="mt-4 text-gray-100 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <FiCalendar className="h-4 w-4 text-gray-400" />
                <span className="">January, 24th 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMousePointer className="h-4 w-4 text-gray-400" />
                <span className="">1200 Clicks</span>
              </div>
              <div className="flex items-center gap-2">
                <FiThumbsUp className="h-4 w-4 text-gray-400" />
                <span className="">2450 Person Reached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
