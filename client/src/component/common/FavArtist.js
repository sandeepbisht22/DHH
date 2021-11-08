import React, { Fragment } from "react";

const FavArtist = ({ favArtist }) => {
  return (
    favArtist !== null && (
      <Fragment>
        {favArtist.map((rapper) => (
          <div
            className="d-flex row border rounded"
            style={{
              backgroundColor: "#0B0B0B",
              color: "#494949",
              margin: "0 2em 0 2em",
            }}
          >
            <div className="col-sm-6 p-2" style={{ height: "100%" }}>
              <img
                className="img-fluid"
                style={{ height: "100%" }}
                src={
                  require(`../../resources/artist/images/profile/${rapper.profileImage}`)
                    .default
                }
              />
            </div>
            <div className="col-sm-6">
              <div>Name: {rapper.name}</div>
              <div>Title: {rapper.title}</div>
            </div>
          </div>
        ))}
      </Fragment>
    )
  );
};

export default FavArtist;
