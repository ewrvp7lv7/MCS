import React, { useState } from "react";
import uuid from "react-uuid";

export default function AddItem(props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [warn, setWarn] = useState("");

  const items = props.items;
  const setItems = props.onItemsChange;

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function Warning() {
    if (warn.length > 0)
      return (
        <div className="validation">
          <p className="ui-title">{warn}</p>
        </div>
      );
    else return null;
  }

  function handleAddClickItem() {
    if (name.length === 0) {
      setWarn("Не заполнено поле Название");
      return;
    }

    if (desc.length === 0) {
      setWarn("Не заполнено поле Описание");
      return;
    }

    const item = {
      id: uuid(),
      name: name,
      desc: desc
    };
    setItems([item, ...items]);

    setName("");
    setDesc("");
    setWarn("");
  }

  function fillFields() {
    setName(uuid().split("-").reverse()[0]);
    setDesc(uuid().replaceAll("-", " "));
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} autoComplete="off">
        <div>
          <label htmlFor="name">Название товара</label>
          <input
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">Описание товара</label>
          <input
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            id="desc"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="validation"></div>
          <button
            type="submit"
            className="ui-button"
            onClick={handleAddClickItem}
          >
            Добавить
          </button>

          <button type="button" className="item-button" onClick={fillFields}>
            Заполнить
          </button>
        </div>
      </form>
      <Warning />
    </>
  );
}
