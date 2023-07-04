import React from "react";
import { Dna } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="fc" style={{ padding: "15rem 0" }}>
      <Dna
        visible={true}
        height="5rem"
        width="5rem"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default LoadingSpinner;
