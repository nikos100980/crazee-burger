import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Input({ value, onChange, Icon, ...extraprops }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input onChange={onChange} type="text" {...extraprops} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;
  background: ${theme.colors.white};
  border-radius: 5px;

  input {
    font-size: 15px;
    border-style: none;
    background: #ffffff;
    width: 100%;

    ::placeholder {
      color: ${theme.colors.greyLight};
      background: ${theme.colors.white};
    }
    :focus {
      outline: none;
    }
  }
`;
