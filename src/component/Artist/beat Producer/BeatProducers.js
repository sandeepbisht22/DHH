import React, { useEffect } from "react";
import HorizontalScroll from "./../../common/HorizontalScroll";

const BeatProducers = () => {
  let horizontalScrolls = null;
  useEffect(async () => {
    //call data fetch for beat producer
    try {
      horizontalScrolls = await fetch("./beatProducer");
    } catch (error) {
      console.log("error is " + error.message);
    }
  }, []);
  return (
    <div>
      Beat Producers
      {horizontalScrolls !== null &&
        horizontalScrolls.map((horizontalScroll) => (
          <HorizontalScroll
            horizontalScroll={horizontalScroll}
          ></HorizontalScroll>
        ))}
    </div>
  );
};

export default BeatProducers;
