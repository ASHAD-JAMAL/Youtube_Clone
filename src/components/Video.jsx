import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";


function Video({ video }) {
  console.log(video);

  return (
    <div className="">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
          {/* thumbnail & duration */}
          <div className="relative h-48 md:h-56 md: rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds}/> }
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
