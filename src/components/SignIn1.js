import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./SignIn1.css";

const SignIn1 = ({ className = "" }) => {
  return (
    <div className={`sign-in2 ${className}`}>
      <div className="sign-in-title1">
        <h1 className="sign-up">Sign up</h1>
        <div className="sign-up-to">Sign up to get rewards, and many more</div>
      </div>
      <form className="input-fields2">
        <div className="name-address-username">
          <div className="name-address-username-labels">
            <div className="your-name">Your Name</div>
          </div>
          <TextField
            className="email-country-password"
            placeholder="Email"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#fe7fb6" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
        </div>
        <div className="name-address-username1">
          <TextField
            className="name-address-username-child"
            placeholder="Address"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#fe7fb6" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <div className="country-parent">
            <div className="country1">Country</div>
            <img
              className="email-country-password-icons"
              alt=""
              src="/email-country-password-icons.svg"
            />
          </div>
        </div>
        <div className="name-address-username2">
          <div className="username-parent">
            <div className="username">Username</div>
            <img
              className="name-address-username-icons"
              alt=""
              src="/frame-153-11.svg"
            />
          </div>
          <div className="password-parent">
            <div className="password1">Password</div>
            <img className="frame-child" alt="" src="/frame-153-1.svg" />
          </div>
        </div>
        <Button
          className="button13"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#1e1e1e",
            borderRadius: "4px",
            "&:hover": { background: "#1e1e1e" },
            height: 54,
          }}
        >
          Sign Up
        </Button>
      </form>
      <div className="or-sign-up">or, sign up with</div>
      <div className="social-buttons">
        <img
          className="social-icons"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="social-icons1"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="social-icons2"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
      </div>
    </div>
  );
};

SignIn1.propTypes = {
  className: PropTypes.string,
};

export default SignIn1;
