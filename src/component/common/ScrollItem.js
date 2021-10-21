import React, { Fragment } from "react";
import { useHistory } from "react-router";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const ScrollItem = ({ itemId, profileImage, name, onClick, selected }) => {
  const visibility = React.useContext(VisibilityContext);
  const history = useHistory();

  return (
    <Fragment>
      <div
        onClick={() => history.push(`/artist/rappers/${name}`, name)}
        style={{
          width: "350px",
        }}
        tabIndex={0}
      >
        <div
          className="card "
          style={{ height: "300px", backgroundColor: "#272727" }}
        >
          <img
            className="card-img-top"
            style={{ object_fit: "cover" }}
            src={
              require(`../../resources/artist/images/profile/${profileImage}`)
                .default
            }
          />
          <div className="card-body">
            <div className="card-text" style={{ color: "#61892F" }}>
              {name}
            </div>
          </div>
        </div>
        <div
          style={{
            height: "200px",
          }}
        />
      </div>
    </Fragment>
  );
};

ScrollItem.propTypes = {};

export default ScrollItem;
