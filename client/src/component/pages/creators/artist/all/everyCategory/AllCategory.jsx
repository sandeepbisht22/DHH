import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../../../common/Spinner";
import SingleArtistRow from "./SingleArtistRow";

const AllCategory = ({ titles }) => {
  const artists = useSelector((state) => state.artist.artists);
  const loading = useSelector((state) => state.artist.loading);

  if (loading) {
    return <Spinner></Spinner>;
  } else
    return (
      artists !== null &&
      artists.map((artist, i) => (
        <SingleArtistRow artistsInfo={artist.data} title={titles[i]} />
      ))
    );
};

export default AllCategory;
