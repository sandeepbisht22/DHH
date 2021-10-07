import React, { Fragment, useState } from "react";
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
  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        <i class="fas fa-chevron-circle-left fa-3x"></i>
      </div>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
        <i class="fas fa-chevron-circle-right fa-3x"></i>
      </div>
    );
  }

  return (
    <Fragment>
      <h4>{title}</h4>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {scrollList !== null &&
          scrollList.map((scroll) => (
            <ScrollItem
              key={scroll.id}
              profileImage={scroll.profileImage}
              name={scroll.name}
              onClick={handleClick}
              selected={isItemSelected}
            ></ScrollItem>
          ))}
      </ScrollMenu>
    </Fragment>
  );
};

export default HorizontalScroll;
