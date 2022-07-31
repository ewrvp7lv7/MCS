import React from "react";
import * as styled from "./Styled";
import { StyledButton } from "./StyledButton";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <styled.UlList>
      {props.items.map((item) => (
        <styled.LiItem key={item.id}>
          <Item info={item} />
          <StyledButton
            color="--secondary"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </StyledButton>
        </styled.LiItem>
      ))}
    </styled.UlList>
  );
}
