import React, { Fragment, useEffect, useState } from "react";

import HomeSlider from "./HomeSlider";
import Footer from "../../layout/Footer";
import { userChoiceAction } from "../../../state/actions";
import { useDispatch, useSelector } from "react-redux";
import HomeShortCutIcons from "./HomeShortCutIcons";
import HomeHeader from "./homeheader/HomeHeader";
import ArtistType from "./artisttype/ArtistType";
import ExploreHipHop from "./explorehiphop/ExploreHipHop";
import LatestPost from "./latestpost/LatestPost";
import Spinner from "../../common/Spinner";
const Home = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user !== null) {
      dispatch(userChoiceAction.favRappers(user._id));
      dispatch(userChoiceAction.favBeatProducers(user._id));
      dispatch(userChoiceAction.favSongs(user._id));
    }
  });

  // const userLoading = useSelector((state) => state.user.loading);
  const userChoiceLoading = useSelector((state) => state.userChoice.loading);

  if (userChoiceLoading) {
    return <Spinner></Spinner>;
  } else
    return (
      <Fragment>
        <HomeHeader />
        <ArtistType />
        <ExploreHipHop />
        {/* <HomeSlider /> */}
        <LatestPost />
        <HomeShortCutIcons />
      </Fragment>
    );
};

export default Home;
