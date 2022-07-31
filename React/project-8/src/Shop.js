import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./globalstyle";
//import "./index.css";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import uuid from "react-uuid";

//ui-link
const AddTitle = styled.div`
  text-decoration: none;
  color: var(--primary);
`;



//.ui-container {
const Container = styled.div`
  padding-top: 5px;
  width: 100vw;
  margin: 0 auto;
`;

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
        id: items.length + 1,
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
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function fillFields() {
    setName(uuid().split("-").reverse()[0]);
    setDesc(uuid().replaceAll("-", " "));
  }

  return (
    <Container>
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
      <AddTitle>{items.length === 0 && <p>Добавьте первый товар</p>}</AddTitle>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </Container>
  );
}
