import React, { useEffect, useState } from "react";
import HorizontalScroll from "./../../common/HorizontalScroll";

const BeatProducers = () => {
  const [horizontalScrolls, setHorizontalScrolls] = useState([]);
  async function fetchBeatProducerData() {
    const res = await fetch("http://localhost:5000/beatProducer");
    const data = await res.json();
    setHorizontalScrolls(data);
  }
  useEffect(() => {
    try {
      fetchBeatProducerData();
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
