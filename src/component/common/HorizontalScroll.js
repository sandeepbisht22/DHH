import React, { Fragment } from "react";
import ScrollItem from "./ScrollItem";

const HorizontalScroll = ({ title, scrollList }) => {
  return (
    <Fragment>
      <h4>{title}</h4>
      <div className="container-fluid">
        <div className="row flex-row flex-nowrap">
          <ScrollItem scrollList={scrollList}></ScrollItem>
        </div>
      </div>
    </Fragment>
  );
};

export default HorizontalScroll;
