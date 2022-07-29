import React from "react";
import Item from "./Item.js";

export default function ItemsList(props) {
  const items = props.items;
  const setItems = props.onItemsChange;

  function handleRemoveClickItem(event) {
    setItems(items.filter((item) => item.id !== event.target.id));
  }

  function renderList(item) {
    return (
      <li className="ui-item-list" key={item.id}>
        <Item info={item} />
        <button
          type="button"
          className="item-button"
          id={item.id}
          onClick={handleRemoveClickItem}
        >
          Удалить
        </button>
      </li>
    );
  }

  return <ul className="ui-list">{items.map((item) => renderList(item))}</ul>;
}
