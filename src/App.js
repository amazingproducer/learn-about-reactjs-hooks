import React, { useState, useEffect } from "react";
import Api from './Api';







const App = () => {
  const upcData = Api.get('/636046316036', {

  });
  
  const upcResult = upcData.data;
  console.log({upcResult});  
  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };
    
    document.addEventListener("click", changeColorOnClick);

    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]);

  return (
    <div>
      {upcResult}
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        {upcResult}
      </div>
    </div>
  );
};



export default App;
