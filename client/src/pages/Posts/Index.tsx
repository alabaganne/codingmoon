import React from "react";
import {
  FiCalendar,
  FiEye,
  FiFileText,
  FiMousePointer,
  FiPlus,
  FiThumbsUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import image1 from "../../assets/5.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import imageSvg from "../../assets/icons/image.svg";
import Targets, { platform } from "../Campaigns/Targets";
import { useQuery } from "react-query";
import axios from "axios";

interface Post {
  id: number;
  imageUrl: string;
  type: string;
  platforms: platform[];
}

let posts: Post[] = [
  {
    id: 1,
    imageUrl: image1,
    type: "video",
    platforms: ["facebook", "youtube"],
  },
  { id: 2, imageUrl: image2, type: "image", platforms: ["instagram"] },
  { id: 3, imageUrl: image3, type: "video", platforms: ["tiktok"] },
  { id: 4, imageUrl: image4, type: "video", platforms: ["facebook", "tiktok"] },
  { id: 5, imageUrl: image2, type: "image", platforms: ["facebook"] },
  { id: 1, imageUrl: image3, type: "video", platforms: ["youtube"] },
  {
    id: 2,
    imageUrl: image4,
    type: "image",
    platforms: ["youtube", "instagram", "tiktok"],
  },
  { id: 3, imageUrl: image1, type: "video", platforms: ["facebook"] },
];

const Posts = () => {
  const { data } = useQuery(
    "posts",
    () => axios.get("http://localhost:8000/api/post"),
    {
      onSuccess: () => {
        console.log(data);
      },
    }
  );

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
      <div className="mt-10 grid grid-cols-4 gap-8">
        {posts &&
          posts.map((post: any) => (
            <Link
              key={post.id}
              to="/"
              className="rounded-lg overflow-hidden shadow bg-dark-6 hover:scale-105 hover:shadow-lg duration-75"
            >
              <div className="p-3 pb-0">
                <div className="rounded-lg overflow-hidden relative">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="object-cover max-h-72 w-full object-center"
                  />
                  {/* shared to: facebook, instagram, ... */}
                  <div className="bottom-4 left-4 absolute flex gap-3">
                    <Targets
                      platforms={post.platforms}
                      imageClassName="w-[32px] h-[32px]"
                    />
                  </div>
                  {/* type */}
                  <div className="bottom-4 right-4 absolute">
                    <img src={imageSvg} alt="" className="h-[32px] w-[32px]" />
                  </div>
                </div>
              </div>
              <div className="p-4 mt-1">
                <div className="text-sm text-gray-50">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="mt-4 text-gray-100 text-xs space-y-4">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="h-4 w-4 text-gray-400" />
                    <span className="">January, 24th 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMousePointer className="h-4 w-4 text-gray-400" />
                    <span className="">1200 Clicks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiEye className="h-4 w-4 text-gray-400" />
                    <span className="">2450 Person Reached</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Posts;
