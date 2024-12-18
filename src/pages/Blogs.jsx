import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {
  const backend = import.meta.env.VITE_BACKEND_URL;

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${backend}/api/v1/admin/get-blogs`);
      // console.log(response.data.message);
      setBlogs(response.data.message);
      setLoading(true);
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="mx-4 md:mx-10 mt-8 md:mt-10">
      <div className="w-full flex flex-col gap-4 md:gap-14">
        <h1 className="font-semibold text-3xl md:text-[95px]">My Blogs</h1>
        <div className="w-full flex flex-col md:flex-row gap-2">
          <span className="w-full md:w-1/4 text-base md:text-xl text-[#8e7777]">
            I turn ideas into impactful designs
          </span>
          <span className="w-full md:w-3/4 border-b-2 border-black "></span>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20">
          {blogs.map((item, index) => (
            <div
              key={item._id}
              className="w-[320px] mx-auto h-auto flex flex-col gap-2 xl:w-[350px]  overflow-hidden p-4 relative"
            >
              <img
                src={item.image}
                alt="Blog Image"
                className="bg-gray-400 h-[200px] xl:h-[250px] object-cover rounded-2xl"
              />
              {/* Image Section */}
              <div className="w-full h-auto relative">
                {/* Number Tag */}
                <div className="h-16 w-16 rounded-2xl font-bold text-xl border-4 absolute -bottom-3 -right-3 border-white flex justify-center items-center bg-black text-white">
                  {`0${index + 1}`}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full h-auto flex flex-col gap-1 px-1">
                <h1 className="font-bold text-lg truncate">{item.title}</h1>
                <p className="text-[#8E7777] text-sm font-bold">
                  {new Intl.DateTimeFormat("en-IN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                  }).format(new Date(item.createdAt))}
                </p>{" "}
                <p className="text-[#8E7777] text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
