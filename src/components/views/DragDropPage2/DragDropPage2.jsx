import React, { useState } from "react";
import { Rnd } from "react-rnd";

const initialPages = [
  { id: 1, x: 10, y: 10, width: 320, height: 200 },
  { id: 2, x: 100, y: 100, width: 400, height: 250 },
  { id: 3, x: 200, y: 200, width: 280, height: 180 },
];

const DragDropPage2 = () => {
  const [pages, setPages] = useState(initialPages);
  const [nextPageId, setNextPageId] = useState(initialPages.length + 1);

  const addDragDropPage = () => {
    setPages((prevPages) => [
      ...prevPages,
      {
        id: nextPageId,
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      },
    ]);
    setNextPageId((prevId) => prevId + 1);
  };

  const deleteDragDropPage = (id) => {
    setPages((prevPages) => prevPages.filter((page) => page.id !== id));
  };

  const handleDragStop = (id, x, y) => {
    console.log("Page ID:", id);
    console.log("Position:", x, y);
  };

  return (
    <div>
      <button onClick={addDragDropPage}>Add DragDropPage</button>
      {pages.map((page,index) => (
        <DragDropPage
          key={page.id}
          page={page}
          onDelete={() => deleteDragDropPage(page.id)}
          onDragStop={handleDragStop}
        />
      ))}
    </div>
  );
};

const DragDropPage = ({ page, onDelete, onDragStop }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <Rnd
      default={{
        x: page.x,
        y: page.y,
        width: page.width,
        height: page.height,
      }}
      onDragStop={(e, d, ref) => onDragStop(page.id, d.x, d.y)}
    >
      <div
		id = {page.id}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          border: "1px solid #ccc",
          background: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "move",
        }}
      >
        <button
          onClick={handleDelete}
          onTouchStart={handleDelete}
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          X
        </button>
      </div>
    </Rnd>
  );
};

export default DragDropPage2;