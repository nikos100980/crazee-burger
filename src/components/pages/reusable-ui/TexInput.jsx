import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function TextInput({ value, onChange, Icon, ...extraprops }) {
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
  border-radius: ${theme.borderRadius.round};

  input {
    font-size: ${theme.fonts.size.P0};
    border-style: none;
    color: ${theme.colors.dark};
    width: 100%;

    ::placeholder {
      color: ${theme.colors.greyMedium};
      background: ${theme.colors.white};
    }
    :focus {
      outline: none;
    }
  }
`;
