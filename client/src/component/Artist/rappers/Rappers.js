import React, { useEffect, useState } from "react";
import axios from "axios";
import HorizontalScroll from "./../../common/HorizontalScroll";
const Rappers = () => {
  const titles = ["OG", "Upcoming"];
  const [horizontalScrolls, setHorizontalScrolls] = useState([]);
  function fetchBeatProducerData() {
    try {
      console.log("Start executing calls");
      axios
        .all(titles.map((title) => axios.get(`/artist/rappers/title/${title}`)))
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
      {horizontalScrolls !== null &&
        horizontalScrolls.map((horizontalScroll, i) => (
          <HorizontalScroll
            key={i}
            horizontalScroll={horizontalScroll}
            title={titles[i]}
          ></HorizontalScroll>
        ))}
    </div>
  );
};
export default Rappers;
