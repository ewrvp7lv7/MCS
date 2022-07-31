import React from "react";
import styled from "styled-components";
import { buttonStyles } from "./globalstyle";
import Item from "./Item";

const UlList = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`;

const LiItem = styled.li`
  margin-bottom: 80px;
`;

const DelButton = styled.button`
  ${buttonStyles}
  background-color: var(--secondary);
`;

export default function ItemsList(props) {
  return (
    <UlList>
      {props.items.map((item) => (
        <LiItem key={item.id}>
          <Item info={item} />
          <DelButton onClick={() => props.onDeleteClick(item.id)}>
            Удалить
          </DelButton>
        </LiItem>
      ))}
    </UlList>
  );
}
