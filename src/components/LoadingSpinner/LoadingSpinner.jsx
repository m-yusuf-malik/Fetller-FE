import React from "react";
import { Dna } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="fc" style={{ width: "100vw", padding: "15rem 0" }}>
      <Dna
        visible={true}
        height="5em"
        width="5em"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default LoadingSpinner;
