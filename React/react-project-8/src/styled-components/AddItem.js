import React from "react";
import styled from "styled-components";

export default function AddItem(props) {
  // const Button1 = styled.button`
  //   font-size: 18px;
  //   padding: 10px;
  //   margin: 10px;
  //   background: papayawhip;
  //   border: none;
  //   border-radius: 3px;
  //   ::placeholder {
  //     color: palevioletred;
  //   }
  // `;

  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="textfield"
        />
      </div>
      <div>
        <label htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="textfield"
        />
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid}</div>
        <input type="submit" className="btn btn-basic" value="Добавить" />
      </div>
      <button
        type="button"
        className="btn btn-basic"
        onClick={props.onFillFields}
      >
        Заполнить
      </button>
    </form>
  );
}
