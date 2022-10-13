import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Counter({ from, to, dur }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: dur,
      onUpdate(value) {
        // node.textContent = value.toFixed(2);
      },
    });

    return () => controls.stop();
  }, [from, to, dur]);

  return <p ref={nodeRef} />;
}
