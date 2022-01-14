import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HorizontalScroll from "../../../../common/HorizontalScroll";
import { artistActions } from "../../../../../state/actions";
import { Box } from "@mui/system";
import AvatarOptionList from "./AvatarOptionList";
import AllCategory from "./everyCategory/AllCategory";
import SingleCategory from "./single/SingleCategory";
import { useParams } from "react-router-dom";

const Rappers = () => {
  const params = useParams();

  const artistType = params.artisttype;
  const dispatch = useDispatch();
  dispatch(artistActions.currentArtistType(artistType));

  const titles = [
    "All",
    "GOAT",
    "OG",
    "Kings",
    "Napoleon",
    "UnderDog",
    "Upcoming",
  ];
  const [currenttype, setCurrenttype] = useState(titles[0]);
  useEffect(() => {
    try {
      dispatch(artistActions.artistsInfo(artistType, titles));
    } catch (error) {
      console.log("error is " + error.message);
    }
  }, []);

  return (
    // <div style={{ backgroundColor: "#272727" }}>
    <div>
      <Box className="test">
        <Box>
          <AvatarOptionList
            currenttype={currenttype}
            setCurrenttype={setCurrenttype}
            titles={titles}
            artistType={artistType}
          />
        </Box>
        <Box>
          {currenttype === "All" ? (
            <AllCategory titles={titles} />
          ) : (
            <SingleCategory artistType={artistType} title={currenttype} />
          )}
        </Box>
      </Box>
    </div>
  );
};
export default Rappers;
