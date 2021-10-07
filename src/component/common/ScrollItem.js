import React from "react";
import PropTypes from "prop-types";

const ScrollItem = ({ scrollList }) => {
  return (
    scrollList !== null &&
    scrollList.map((scroll) => (
      <div key={scroll.id} className="col-3">
        <div class="card">
          <img
            src={
              require(`../../resources/artist/images/${scroll.profileImage}`)
                .default
            }
          />
          <div className="card-body">{scroll.name}</div>
        </div>
      </div>
    ))
  );
};

ScrollItem.propTypes = {
  scrollList: PropTypes.array.isRequired,
};

export default ScrollItem;
