/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";

export default function Counter({ from, to, dur }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: dur,
      onUpdate(value) {
        if (typeof node === "object") {
          node.textContent = value.toFixed(2);
        }
      },
    });

    return () => controls.stop();
  }, [from, to, dur]);

  return <p ref={nodeRef} />;
}
