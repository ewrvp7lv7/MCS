import React from "react";
import * as styled from "./Styled";
import { StyledButton } from "./StyledButton";

function Warning(props) {
  if (props.valid.length > 0)
    return (
      <div>
        <styled.StP>{props.valid}</styled.StP>
      </div>
    );
  else return null;
}

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit} autoComplete="off">
      <div>
        <label htmlFor="item-name">Название:</label>
        <styled.TextField
          type="text"
          color="--primary"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
        />
      </div>
      <div>
        <label htmlFor="item-description">Описание:</label>
        <styled.TextField
          type="text"
          color="--primary"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
        />
      </div>
      <div className="form-footer">
        <Warning valid={props.valid} />
        <StyledButton color="--primary" type="submit">
          Добавить
        </StyledButton>
      </div>
      <StyledButton
        color="--primary"
        size="small"
        type="button"
        onClick={props.onFillFields}
      >
        Заполнить
      </StyledButton>
    </form>
  );
}
