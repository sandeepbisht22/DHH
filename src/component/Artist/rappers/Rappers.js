import React, { useEffect } from "react";
import HorizontalScroll from "./../../common/HorizontalScroll";
const Rappers = () => {
  let HorizontalScrolls = null;
  useEffect(() => {
    //call data fetch for Rappers
    HorizontalScrolls = fetch("/");
  }, []);
  return (
    <div>
      Rappers
      {HorizontalScrolls !== null &&
        HorizontalScrolls.map((horizontalScroll) => (
          <HorizontalScroll
            horizontalScroll={horizontalScroll}
          ></HorizontalScroll>
        ))}
    </div>
  );
};
export default Rappers;
