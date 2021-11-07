import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

const Songs = () => {
  const currArtist = useSelector((state) => state.artist.currArtist);
  const songsList = currArtist.songs;
  return (
    songsList !== null && (
      <div className="d-flex pb-3" style={{ color: "white" }}>
        {songsList.map((song) => (
          <div className="col-md-3">
            <div>
              <a
                href={song.songlinks[0]["youtube"]}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={song.img} className="border border-3 rounded"></img>
              </a>
            </div>
            <div>{song.name}</div>

            <div className="d-flex justify-content-evenly">
              <div className="pe-2">
                <i class="fas fa-thumbs-up" style={{ color: "#FFFFFF" }}></i>
                <span className="ps-2">{song.like}</span>
              </div>
              <div>
                <i class="fas fa-thumbs-down" style={{ color: "#FFFFFF" }}></i>
                <span className="ps-2" style={{ color: "#FFFFFF" }}>
                  {song.dislike}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default Songs;
