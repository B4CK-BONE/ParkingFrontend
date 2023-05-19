import React, { useState, useRef } from "react";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";

function DragDropPage() {
  // const [logoPos, setlogoPos] = useState({x:50, y:100})
  const logoPos = useSpring({ x: 0, y: 0 });
  const logoPos1 = useSpring({ x: 0, y: 0 });

  const bindLogoPos = useDrag((params) => {
    // setlogoPos({
    //   x: params.offset[0],
    //   y: params.offset[1],
    // })
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });

  const bindLogoPos1 = useDrag((params) => {
    // setlogoPos({
    //   x: params.offset[0],
    //   y: params.offset[1],
    // })
    logoPos1.x.set(params.offset[0]);
    logoPos1.y.set(params.offset[1]);
  });

  return (
    <div>
      <animated.div
        {...bindLogoPos()}
        style={{
          /*MODIFIED!*/
          //   position:"relative",
          //   top: logoPos.y,
          //   left: logoPos.x
          x: logoPos.x,
          y: logoPos.y,
        }}
      >
        <button>test</button>
      </animated.div>
      <animated.div
        {...bindLogoPos1()}
        style={{
          /*MODIFIED!*/
          //   position:"relative",
          //   top: logoPos.y,
          //   left: logoPos.x
          x: logoPos1.x,
          y: logoPos1.y,
        }}
      >
        <button>test</button>
      </animated.div>
    </div>
  );
}

export default DragDropPage;
