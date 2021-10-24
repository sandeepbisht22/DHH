import React, { useEffect, useState } from "react";
import SocialMedia from "./../../common/SocialMedia";
import YoutubeVideo from "../../common/YoutubeVideo";
import axios from "axios";
const BeatProducer = ({ match }) => {
  const [beatProducer, setBeatProducer] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchArtistData(beatProducerName) {
    const res = await axios.get(
      `/artist/beatProducer/name/${beatProducerName}`
    );
    // const data = await res.json();
    setBeatProducer(res.data);
    setLoading(!loading);
  }
  useEffect(() => {
    try {
      fetchArtistData(match.params.beatProducer);
    } catch (error) {}
  }, [match.params.beatProducer]);

  return (
    loading && (
      <div>
        <div className="d-inline-flex flex-row">
          <div className="pe-3 pb-3 ps-3">
            <img
              style={{
                height: "400px",
                width: "300px",
              }}
              className="border border-5 border-white"
              src={
                require(`../../../resources/artist/images/page/${beatProducer[0].profileImage}`)
                  .default
              }
            />
          </div>
          <div>
            <h1 style={{ color: "#61892F" }}>
              {beatProducer[0].name} - The [{beatProducer[0].title} ]of DHH
            </h1>
            <div style={{ color: "#FFFFFF" }}>{beatProducer[0].about}</div>
          </div>
        </div>
        <div className="container-fluid" style={{ margin: "0px" }}>
          <h3 style={{ color: "#61892F" }}>Famous Bars</h3>
          <div className="scroll">
            <div className="row flex-row flex-nowrap">
              <YoutubeVideo
                youtubeKey="AIzaSyB47-Z2ZklkZUzSVKohYBoazrKVqM3ddxc"
                channelId="UCMXMp3Lc6v6v8dJH5ZGwtqA"
              ></YoutubeVideo>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <h3 style={{ color: "#61892F" }} className="text-center">
            Social Links
          </h3>
          <div class="container-fluid">
            <div className="row justify-content-md-center">
              {beatProducer[0].sociallinks.map((socialaccount, i) => (
                <SocialMedia socialaccount={socialaccount} i={i}></SocialMedia>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default BeatProducer;
