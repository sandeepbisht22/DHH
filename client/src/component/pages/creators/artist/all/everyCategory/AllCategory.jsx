import React from "react";
import { useSelector } from "react-redux";
import SingleArtistRow from "./SingleArtistRow";

const AllCategory = ({ titles }) => {
  const artists = useSelector((state) => state.artist.artists);

  return (
    artists !== null &&
    artists.map((artist, i) => (
      <SingleArtistRow artistsInfo={artist.data} title={titles[i]} />
    ))
  );
};

export default AllCategory;
