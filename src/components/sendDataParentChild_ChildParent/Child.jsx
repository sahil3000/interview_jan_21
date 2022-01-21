import React from "react";
const Child = ({ isDivisible }) => {
    console.log("child");
    return <h3>isDivisible by 5 = {isDivisible}</h3>;
  };
  export default React.memo(Child);