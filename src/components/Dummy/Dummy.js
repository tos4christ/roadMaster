import React from "react";

const Dummy = () => {
    const style = {
      background:
        "linear-gradient(to right, #001a00 1%, #006600 24%, #009900 67%, #00b300 100%  )",
      width: "100%",
      color: 'yellow'
    };
  return (
    <div style={style}>
        <h1 className='text-center p-4'>Hello</h1>
    </div>
  );
};

export default Dummy;
