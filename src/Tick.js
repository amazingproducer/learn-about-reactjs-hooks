import React, { useState, useEffect } from "react";
const Tick = () => {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    setInterval(Tick, 1000);

    // highlight-next-line
//    ReactDOM.render(element, document.getElementById('root'));
  
  return (
      <div>
          {element}
      </div>
  );
  
  };
  export default Tick;