import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import ToggleButton from "../../reusable-ui/ToggleButton";
import AdminToast from "./AdminToast";
import Profile from "./Profile";

export default function NavbarRightSide({ username, Icon }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const displayToastNotification = () => {
    if (!isModeAdmin) {
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
    }
    setIsModeAdmin(!isModeAdmin);
  };
  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton
        labelIfChecked="DESACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification}
      />

      <AdminToast />

      <Profile Icon={Icon} username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
