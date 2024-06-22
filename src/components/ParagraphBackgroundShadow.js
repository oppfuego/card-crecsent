import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ParagraphBackgroundShadow.css";

const ParagraphBackgroundShadow = ({
  className = "",
  browseOurSelection,
  headToOurWebsiteAndExplor,
  useTheSearchBarToFindSpec,
  propPadding,
  propWidth,
  propHeight,
}) => {
  const paragraphBackgroundShadowStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const browseOurSelectionStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const headToOurStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`paragraphbackgroundshadow ${className}`}
      style={paragraphBackgroundShadowStyle}
    >
      <h3 className="browse-our-selection" style={browseOurSelectionStyle}>
        {browseOurSelection}
      </h3>
      <div className="step-descriptions">
        <div className="head-to-our" style={headToOurStyle}>
          {headToOurWebsiteAndExplor}
        </div>
        <div className="use-the-search">{useTheSearchBarToFindSpec}</div>
      </div>
    </div>
  );
};

ParagraphBackgroundShadow.propTypes = {
  className: PropTypes.string,
  browseOurSelection: PropTypes.string,
  headToOurWebsiteAndExplor: PropTypes.string,
  useTheSearchBarToFindSpec: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default ParagraphBackgroundShadow;
