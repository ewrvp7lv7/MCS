import React from "react";
import styled from "styled-components";
import { buttonStyles } from "./globalstyle";

const TextField = styled.input`
padding: 12px 10px;
border-radius: 3px;
border: 1px solid var(--light-gray);
font-size: 16px;
  margin: 10px;
`;


//ui-button 
const AddInput = styled.input`
  ${buttonStyles}
`;

const AddButton = styled.button`
  ${buttonStyles}
min-width: 100px;
font-size: 0.8em;
  `;


export default function AddItem(props) {

  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="item-name">Название:</label>
        <TextField
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
        />
      </div>
      <div>
        <label htmlFor="item-description">Описание:</label>
        <TextField
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
        />
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid}</div>
        <AddInput type="submit" className="btn btn-basic" value="Добавить" />
      </div>
      <AddButton
        type="button"
        className="btn btn-basic"
        onClick={props.onFillFields}
      >
        Заполнить
      </AddButton>
    </form>
  );
}
