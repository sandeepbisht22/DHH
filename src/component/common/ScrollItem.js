import React, { Fragment } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const ScrollItem = ({ itemId, profileImage, name, onClick, selected }) => {
  const visibility = React.useContext(VisibilityContext);

  return (
    <Fragment>
      <div
        onClick={() => onClick(visibility)}
        style={{
          width: "350px",
        }}
        tabIndex={0}
      >
        <div className="card" style={{ height: "300px" }}>
          <img
            src={
              require(`../../resources/artist/images/${profileImage}`).default
            }
          />
          <div className="card-body">{name}</div>
          <div>selected: {JSON.stringify(!!selected)}</div>
        </div>
        <div
          style={{
            height: "100px",
          }}
        />
      </div>
    </Fragment>
  );
};

ScrollItem.propTypes = {};

export default ScrollItem;
