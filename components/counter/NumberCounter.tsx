/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";

export default function Counter({ from, to, dur }): JSX.Element {
  const [counterOn, setCounterOn] = useState(false);
  
  return (
      // <ScrollTrigger
      //   onEnter={() => setCounterOn(true)}
      //   onExit={() => setCounterOn(false)}
      // >
      //   <div>
      //     <h1>
      //       {counterOn && (
      //         <CountUp start={from} end={to} duration={dur} delay={0} />
      //       )}
      //     </h1>
      //   </div>
      // </ScrollTrigger>
 
  );
}
