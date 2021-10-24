import axios from "axios";
import React, { useEffect, useState } from "react";
import HorizontalScroll from "./../../common/HorizontalScroll";

const BeatProducers = () => {
  const [horizontalScrolls, setHorizontalScrolls] = useState([]);
  const titles = ["OG"];
  async function fetchBeatProducerData() {
    // const res = await fetch("http://localhost:5000/beatProducer");
    // const data = await res.json();
    try {
      console.log("Start executing calls");
      axios
        .all(
          titles.map((title) =>
            axios.get(`/artist/beatProducer/title/${title}`)
          )
        )
        .then(
          axios.spread(function (...res) {
            // all requests are now complete
            console.log("final response is" + res);
            setHorizontalScrolls(res);
          })
        );
    } catch (error) {
      console.log("Error is " + error);
    }
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
        horizontalScrolls.map((horizontalScroll, i) => (
          <HorizontalScroll
            horizontalScroll={horizontalScroll}
            title={titles[i]}
          ></HorizontalScroll>
        ))}
    </div>
  );
};

export default BeatProducers;
