import React from "react";

import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide({ username, Icon }) {
  return (
    <NavbarRightSideStyled className="right-side">
      <Profile Icon={Icon} username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
