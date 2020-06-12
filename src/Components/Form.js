import React from "react";

export default function Form({ onSubmit, children, header }) {
  function preventDefaultSubmit(e) {
    console.log(e);
    e.preventDefault();
    onSubmit();
  }
  return (
    <form onSubmit={preventDefaultSubmit} style={styles.form}>
      {header && <h3 style={styles.header}>{header}</h3>}
      {children}
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "white",
    padding: "10px 20px",
    borderRadius: "3px",
    boxShadow: "2px 2px 8px 1px #d8d8d8",
  },
  header: {
    margin: "0 0 10px 0",
    fontWeight: "700",
  },
};