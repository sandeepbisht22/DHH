import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HorizontalScroll from "../../../../common/HorizontalScroll";
import { artistActions } from "../../../../../state/actions";
import { Box } from "@mui/system";
import AvatarOptionList from "./AvatarOptionList";
import AllCategory from "./everyCategory/AllCategory";
import SingleCategory from "./single/SingleCategory";

const Rappers = () => {
  const artistType = "rappers";
  const dispatch = useDispatch();
  dispatch(artistActions.currentArtistType(artistType));

  const titles = ["All", "OG", "Legend", "UnderDog", "Upcoming"];
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
      {/* {artists !== null &&
        artists.map((horizontalScroll, i) => (
          <HorizontalScroll
            key={i}
            horizontalScroll={horizontalScroll}
            title={titles[i]}
          ></HorizontalScroll>
        ))} */}
    </div>
  );
};
export default Rappers;
