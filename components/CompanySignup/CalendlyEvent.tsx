import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyEvent = () => {
  return (
    <div className="h-4/5">
      {/* <InlineWidget
        url="https://calendly.com/asif88383/30min"
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
        prefill={{
        //   email: "asif88383@gmail.com",
        //   firstName: "Muhammad",
        //   lastName: "Asif",
        //   name: "Muhammad Asif",
          customAnswers: {
            a1: "a1",
            a2: "a2",
            a3: "a3",
            a4: "a4",
            a5: "a5",
            a6: "a6",
            a7: "a7",
            a8: "a8",
            a9: "a9",
            a10: "a10",
          },
        }}
        utm={{
          utmCampaign: "Spring Sale 2019",
          utmContent: "Shoe and Shirts",
          utmMedium: "Ad",
          utmSource: "Facebook",
          utmTerm: "Spring",
        }}
      /> */}
      
      <InlineWidget url="https://calendly.com/asif883838" />
    </div>
  );
};

export default CalendlyEvent;
