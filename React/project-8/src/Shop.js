import React, { useState, useEffect } from "react";
import GlobalStyles, * as styled from "./Styled";
//import "./index.css";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import uuid from "react-uuid";

export default function Shop() {
  const [items, setItems] = useState(() => {
    const value = localStorage.getItem("items");
    return !value ? [] : JSON.parse(value);
  });

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    document.title =
      items.length === 0 ? `Товары отсутствуют` : `${items.length} товаров`;
  }, [items]);

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      {
        id: items.length === 0 ? 1 : Math.max(...items.map((o) => o.id)) + 1,
        name: name,
        desc: desc
      },
      ...items
    ]);
    setName("");
    setDesc("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
    setValid("");
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
    setValid("");
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function fillFields() {
    setName(uuid().split("-").reverse()[0]);
    setDesc(uuid().replaceAll("-", " "));
  }

  return (
    <styled.Container>
      <GlobalStyles />
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
        onFillFields={fillFields}
      />
      <styled.AddTitle>
        {items.length === 0 && <p>Добавьте первый товар</p>}
      </styled.AddTitle>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </styled.Container>
  );
}
