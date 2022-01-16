import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const LoginSignUpModal = ({ open, handleClose }) => {
  const navigate = useNavigate();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Hey, Wassup.
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            If you wanna Upvote, make your artist Fav. Please hit the Below
            button.
          </Typography>
          <a href="#" onClick={() => navigate("/login")}>
            Login
          </a>
        </Box>
      </Fade>
    </Modal>
  );
};

export default LoginSignUpModal;
