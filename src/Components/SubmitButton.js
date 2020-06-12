import React, { useState } from "react";

export default function SubmitButton() {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={
        hover
          ? {...styles.submitButton, ...styles.hover}
          : styles.submitButton
      }
      type="submit"
    >
      Submit
    </button>
  );
}

const styles = {
  submitButton: {
    border: "2px solid #F9F5FF",
    background: "#D4C2FC",
    height: 40,
    position: "relative",
    top: "22px",
    right: "25px",
  },
  hover: {
    background: "#AD8AF9",
  }
}