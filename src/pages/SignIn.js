import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in-1920">
      <Header cardDebugCommit="unset" crescentDebugCommit="unset" />
      <section className="sign-in-container-parent">
        <div className="sign-in-container">
          <div className="sign-in">
            <div className="sign-in-heading">
              <div className="sign-in-title">
                <h1 className="sign-in1">Sign in</h1>
                <div className="sign-in-to">
                  Sign in to your account to see products catered to you
                </div>
              </div>
              <form className="credentials">
                <FormControl
                  className="input-fields"
                  variant="standard"
                  sx={{
                    borderColor: "#fe7fb6",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    width: "100%",
                    height: "40px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "40px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "40px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "40px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "40px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 16,
                      fontWeight: "Regular",
                      fontFamily: "Roboto",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "11px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="16px"
                        height="16px"
                        src="/input-containers.svg"
                        style={{ marginRight: "11px" }}
                      />
                    )}
                  >
                    <MenuItem>Username</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="input-fields1">
                  <div className="password">Password</div>
                  <img
                    className="input-fields-child"
                    alt=""
                    src="/frame-153-1.svg"
                  />
                </div>
                <Button
                  className="button3"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#1e1e1e",
                    borderRadius: "4px",
                    "&:hover": { background: "#1e1e1e" },
                  }}
                >
                  Sign In
                </Button>
              </form>
              <div className="or-sign-in">or, sign in with</div>
              <div className="social-sign-in">
                <img
                  className="social-buttons-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-buttons-icon1"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-buttons-icon2"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-shape-icon"
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
      </section>
      <Footer propHeight="574.6px" propPadding="0px 0px 72.8px" />
    </div>
  );
};

export default SignIn;
