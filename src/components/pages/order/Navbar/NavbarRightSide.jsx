import React from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { theme } from "../../../../theme";
import ToggleButton from "../../reusable-ui/ToggleButton";
import Profile from "./Profile";

export default function NavbarRightSide({ username, Icon }) {
  return (
    <NavbarRightSideStyled className="right-side">
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <ToggleButton />
      <Profile Icon={Icon} username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
