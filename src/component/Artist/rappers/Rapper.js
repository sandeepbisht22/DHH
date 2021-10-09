import React, { useEffect, useState } from "react";
import About from "./../../pages/About";

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
          <div className="p-2">
            <img
              src={
                require(`../../../resources/artist/images/page/${rapperInfo[0].pageimage}`)
                  .default
              }
            />
          </div>
          <div className="p-10">
            <h1>
              {rapperInfo[0].name} - The [{rapperInfo[0].title} ]of DHH
            </h1>
            <div>{rapperInfo[0].about}</div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="p-8">SOngs famous</div>
          <div className="p-4">social links</div>
        </div>
      </div>
    )
  );
};
export default Rapper;
