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
        <div className="card " style={{ height: "300px" }}>
          <img
            className="card-img-top"
            src={
              require(`../../resources/artist/images/profile/${profileImage}`)
                .default
            }
          />
          <div className="card-body">
            <div className="card-text">{name}</div>
            {/* <div>selected: {JSON.stringify(!!selected)}</div> */}
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
