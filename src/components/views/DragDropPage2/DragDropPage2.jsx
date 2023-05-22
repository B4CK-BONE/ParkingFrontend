import React, { useState } from "react";
import { Rnd } from "react-rnd";

const App = () => {
  const [pages, setPages] = useState([]);

  const addDragDropPage = () => {
    setPages((prevPages) => [
      ...prevPages,
      <DragDropPage key={pages.length} />,
    ]);
  };

  return (
    <div>
      <button onClick={addDragDropPage}>Add DragDropPage</button>
      {pages.map((page, index) => (
        <div key={index}>{page}</div>
      ))}
    </div>
  );
};

const DragDropPage = () => {
  const handleDragStop = (e, d) => {
    console.log("Position:", d.x, d.y, d.width, d.height);
  };

  return (
    <Rnd
      default={{
        x: 10,
        y: 10,
        width: 320,
        height: 200,
      }}
      onDragStop={handleDragStop}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #ccc",
          background: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "move",
        }}
      ></div>
    </Rnd>
  );
};

export default App;
