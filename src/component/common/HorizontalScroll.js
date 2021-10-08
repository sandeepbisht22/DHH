import React, { useState, useContext, Fragment } from "react";
import ScrollItem from "./ScrollItem";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const HorizontalScroll = ({ horizontalScroll: { title, scrollList } }) => {
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);
  const isItemSelected = (id) => !!selected.find((el) => el === id);
  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <Fragment>
      <h1>{title}</h1>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {scrollList !== null &&
          scrollList.map((scroll) => (
            <ScrollItem
              itemId={"element-" + scroll.id}
              key={scroll.id}
              profileImage={scroll.profileImage}
              name={scroll.name}
              onClick={handleClick(scroll.id)}
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
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className="mt-5 pt-5"
    >
      <i className="fas fa-chevron-circle-right fa-3x"></i>
    </div>
  );
};
export default HorizontalScroll;
