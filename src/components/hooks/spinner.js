import React from "react";
import { ClipLoader } from "react-spinners";

const RedSpinner = ({ loading, size }) => {
  const override = {
    display: "flex",
    margin: "0 auto",
    borderColor: "#e50915",
    textAlign: "center",
  };

  return (
    <ClipLoader
      color="#e50915"
      loading={loading}
      cssOverride={override}
      size={size}
    />
  );
};

export default RedSpinner;
