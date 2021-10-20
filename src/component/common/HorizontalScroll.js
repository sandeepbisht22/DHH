import React, { useState, useContext, Fragment } from "react";
import ScrollItem from "./ScrollItem";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const HorizontalScroll = ({ horizontalScroll: { title, scrollList } }) => {
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);
  const isItemSelected = (id) => !!selected.find((el) => el === id);

  return (
    <Fragment>
      <h1 style={{ color: "#61892F" }}>{title}</h1>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {scrollList !== null &&
          scrollList.map((scroll) => (
            <ScrollItem
              itemId={"element-" + scroll.id}
              key={scroll.id}
              profileImage={scroll.profileImage}
              name={scroll.name}
              selected={isItemSelected(scroll.id)}
            ></ScrollItem>
          ))}
      </ScrollMenu>
    </Fragment>
  );
};

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <div
      style={{ color: "#61892F" }}
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className="mt-5 pt-5"
    >
      <i className="fas fa-chevron-circle-left fa-3x" />
    </div>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <div
      style={{ color: "#61892F" }}
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className="mt-5 pt-5"
    >
      <i className="fas fa-chevron-circle-right fa-3x"></i>
    </div>
  );
};
export default HorizontalScroll;
