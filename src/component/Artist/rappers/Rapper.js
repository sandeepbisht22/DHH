import React, { useEffect, useState } from "react";
import SocialMedia from "./../../common/SocialMedia";
import YoutubeVideo from "../../common/YoutubeVideo";
const Rapper = ({ match }) => {
  const [rapperInfo, setRapperInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchArtistData(rapperName) {
    const res = await fetch(
      `http://localhost:5000/rappersinfos?name=${rapperName}`
    );
    const data = await res.json();
    setRapperInfo(data);
    setLoading(!loading);
  }
  useEffect(() => {
    try {
      fetchArtistData(match.params.rapper);
    } catch (error) {}
  }, [match.params.rapper]);

  return (
    loading && (
      <div>
        <div className="d-inline-flex flex-row">
          <div>
            <img
              src={
                require(`../../../resources/artist/images/page/${rapperInfo[0].pageimage}`)
                  .default
              }
            />
          </div>
          <div>
            <h1>
              {rapperInfo[0].name} - The [{rapperInfo[0].title} ]of DHH
            </h1>
            <div>{rapperInfo[0].about}</div>
          </div>
        </div>
        <div className="container-fluid" style={{ margin: "0px" }}>
          <div className="row">
            <div className="col-md-8">
              <h3>Famous Bars</h3>
              <YoutubeVideo
                youtubeKey="AIzaSyB47-Z2ZklkZUzSVKohYBoazrKVqM3ddxc"
                channelId="UCrtOnzd9dWH9lXTAB-64Hfg"
              ></YoutubeVideo>
            </div>
            <div className="col-md-4">
              <h3>Social Links</h3>
              <div class="container">
                <div className="row">
                  {rapperInfo[0].sociallinks.map((socialaccount, i) => (
                    <SocialMedia
                      socialaccount={socialaccount}
                      i={i}
                    ></SocialMedia>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Rapper;
