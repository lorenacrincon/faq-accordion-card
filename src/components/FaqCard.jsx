import React from "react";
import Accordion from "./Accordion";
import mobileIlustration from "../assets/illustration-woman-online-mobile.svg";
import bgPatternMobile from "../assets/bg-pattern-mobile.svg";

function FaqCard() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="relative bg-white px-7 lg:pe-28 pb-16 pt-20 shadow-xl sm:mx-auto rounded-3xl w-96 lg:w-9/12">
          <div className="absolute w-72 inset-x-12 -top-32">
            <img className="" src={mobileIlustration} alt="Ilustration woman" />
            <img
              className="absolute w-72 inset-x-12 -top-32 translate-y-64 -translate-x-11"
              src={bgPatternMobile}
              alt="Ilustration woman shadow"
            />
          </div>
          <div className="lg:flex lg:justify-end pt-20">
            <div className="w-full lg:w-2/3">
              <h2
                className="text-4xl font-bold mb-4 lg:text-left"
                style={{ color: "var( --veryDarkDesaturatedBlue)" }}
              >
                FAQ
              </h2>
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqCard;
