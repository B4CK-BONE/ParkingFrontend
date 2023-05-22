import React, { useState, useEffect } from "react";
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
  const [position, setPosition] = useState({ x: 10, y: 10 });
  const [size, setSize] = useState({ width: 320, height: 200 });

  const handleDragStop = (e, d) => {
    setPosition((prevPosition) => ({
      x: prevPosition.x + d.deltaX,
      y: prevPosition.y + d.deltaY,
    }));
  };

  const handleResize = (e, direction, ref, delta, position) => {
    setSize({
      width: parseInt(ref.style.width),
      height: parseInt(ref.style.height),
    });
  };

  useEffect(() => {
    setPosition((prevPosition) => ({
      x: prevPosition.x + (size.width - prevPosition.width) / 2,
      y: prevPosition.y + (size.height - prevPosition.height) / 2,
    }));
  }, [size]);

  return (
    <Rnd
      position={position}
      size={size}
      onDragStop={handleDragStop}
      onResize={handleResize}
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
