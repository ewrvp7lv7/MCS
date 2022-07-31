import React, { useState } from "react";
import * as styled from "./Styled";

export default function Item(props) {
  const [total, setTotal] = useState(0);
  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div>
      <styled.ItemInfo>
        <styled.ItemTitle>{info.name}</styled.ItemTitle>
        <p>{info.desc}</p>
      </styled.ItemInfo>
      <styled.ItemQuantity>
        <styled.ItemButton disabled={total === 0} onClick={handleRemoveClick}>
          -
        </styled.ItemButton>
        <styled.NumContainer>
          <styled.ItemTotal>{total ? total : "нет"}</styled.ItemTotal>
        </styled.NumContainer>
        <styled.ItemButton onClick={handleAddClick}>+</styled.ItemButton>
      </styled.ItemQuantity>
    </div>
  );
}
