import React from "react";
import PropTypes from "prop-types";

const ScrollItem = ({ scrollList }) => {
  return (
    scrollList !== null &&
    scrollList.map((scroll) => (
      <scroll key={scroll.id} className="col-3">
        {scroll.name}
      </scroll>
    ))
  );
};

ScrollItem.propTypes = {
  scrollList: PropTypes.object.isRequired,
};

export default ScrollItem;
