import React, { useEffect, useState } from "react";
import HorizontalScroll from "./../../common/HorizontalScroll";
const Rappers = () => {
  const [horizontalScrolls, setHorizontalScrolls] = useState([]);
  async function fetchBeatProducerData() {
    const res = await fetch("http://localhost:5000/rappers");
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
      Rappers
      {horizontalScrolls !== null &&
        horizontalScrolls.map((horizontalScroll) => (
          <HorizontalScroll
            horizontalScroll={horizontalScroll}
          ></HorizontalScroll>
        ))}
    </div>
  );
};
export default Rappers;
