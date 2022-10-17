import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyEvent = () => {
  const head = document.querySelector("head");
  const script = document.createElement("script");
  script.setAttribute(
    "src",
    "https://assets.calendly.com/assets/external/widget.js"
  );
  head.appendChild(script);

  return (
    <div className="w-full h-full">
      <InlineWidget
        url="https://calendly.com/asif88383/30min"
        styles={{
          height: "500px",
          width: "400px"
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: true,
          hideLandingPageDetails: true,
          hideGdprBanner: true,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
        
      />
    </div>
  );
};

export default CalendlyEvent;
