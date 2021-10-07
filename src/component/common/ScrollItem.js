import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const ScrollItem = ({ profileImage, name, onClick, selected }) => {
  const visibility = React.useContext(VisibilityContext);

  return (
    <Fragment>
      <div
        onClick={() => onClick(visibility)}
        style={{
          width: "300px",
        }}
        tabIndex={0}
      >
        <div className="card">
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