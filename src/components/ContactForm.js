import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./ContactForm.css";

const ContactForm = ({ className = "" }) => {
  return (
    <div className={`contact-form ${className}`}>
      <FrameComponent
        contactInformation="Contact Information"
        formLabelPlaceholder="Email"
      />
      <h3 className="payment-information">Payment Information</h3>
      <div className="card-information-parent">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="frame-parent1">
            <img
              className="frame-icon"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="frame-child1"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="frame-child2"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
        <div className="form-field-parent">
          <TextField
            className="form-field2"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#fe7fb6" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#fe7fb6" },
            }}
          />
          <TextField
            className="form-field3"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#fe7fb6" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#fe7fb6" },
            }}
          />
        </div>
      </div>
      <FrameComponent
        contactInformation="Carholder Name"
        formLabelPlaceholder="Name on Card"
        propDisplay="inline-block"
        propMinWidth="116px"
        propWidth="102px"
        propColor="#fe7fb6"
      />
      <div className="country-or-region-parent">
        <div className="country-or-region">Country or region</div>
        <FormControl
          className="form-field4"
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
            height: "56px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "56px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "56px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "56px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#fe7fb6",
              fontSize: 16,
              fontWeight: "Regular",
              fontFamily: "Roboto",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "16px",
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
                width="24px"
                height="24px"
                src="/frame-1000006889.svg"
                style={{ marginRight: "16px" }}
              />
            )}
          >
            <MenuItem>USA</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className="frame-parent2">
        <input className="frame-input" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="contact-form-child"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <Button
        className="button"
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
        Pay Now
      </Button>
    </div>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
