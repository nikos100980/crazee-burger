import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { theme } from "../../../../theme";
import ToggleButton from "../../reusable-ui/ToggleButton";
import Profile from "./Profile";

export default function NavbarRightSide({ username, Icon }) {
  const notify = () => {
    toast.info("Mode admin activé", {
      //  icon: <FaUserSecret size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton labelIfChecked="DESACTIVER LE MODE ADMIN" labelIfUnchecked="ACTIVER LE MODE ADMIN"  onToggle={notify} />

      <ToastContainer className="toaster" bodyClassName="body-toast" />

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
