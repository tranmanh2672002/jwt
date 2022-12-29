import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styleModalCenter } from "../styleModalCenter";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@mui/material";
import { useState } from "react";

function ModalLogin({ openModal, setOpenModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setPassword("");
    setEmail("");
  };
  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModalCenter}>
          <Typography id="modal-modal-title" variant="h4" component="h3">
            Login
          </Typography>
          <ValidatorForm
            onSubmit={handleSubmit}
            // onError={(errors) => console.log(errors)}
          >
            <TextValidator
              sx={{ marginTop: "20px" }}
              fullWidth
              autoComplete="off"
              label="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={["This field is required", "Email is not valid"]}
            />
            <TextValidator
              sx={{ marginTop: "20px" }}
              fullWidth
              autoComplete="off"
              label="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              value={password}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <Button
              sx={{ marginTop: "20px" }}
              fullWidth={true}
              autoComplete="off"
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </ValidatorForm>
        </Box>
      </Modal>
    </>
  );
}

export default ModalLogin;
