import React, { useState } from "react";
import AddItem from "./AddItem.js";
import ItemsList from "./ItemsList.js";

export default function Shop() {
  //const items = [];
  const [items, setItems] = useState([]);

  function Invtation(props) {
    if (props.display)
      return (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      );
    else return null;
  }

  return (
    <>
      <AddItem items={items} onItemsChange={setItems} />
      <Invtation display={items.length === 0} />
      <ItemsList items={items} onItemsChange={setItems} />
    </>
  );
}
