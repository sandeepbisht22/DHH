import React, { useContext } from "react";
import PropTypes from "prop-types";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
const ScrollItem = ({ itemId, title, key, onClick, selected }) => {
  const visibility = useContext(VisibilityContext);
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
    <div
      onClick={handleClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </div>
  );
};

ScrollItem.propTypes = {};

export default ScrollItem;
