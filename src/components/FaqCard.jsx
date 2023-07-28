import React from "react";
import Accordion from "./Accordion";
import mobileIlustration from "../assets/illustration-woman-online-mobile.svg";
import bgPatternMobile from "../assets/bg-pattern-mobile.svg";

function FaqCard() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl sm:mx-auto rounded-lg w-full lg:w-2/3">
          <div className="absolute -top-1/3">
            <img className="" src={mobileIlustration} alt="Ilustration woman" />
            <img
              className=""
              src={bgPatternMobile}
              alt="Ilustration woman shadow"
            />
          </div>
          <div className="sm:flex sm:justify-end">
            <div className="sm:w-2/3">
              <h2 className="text-4xl font-bold mb-9">FAQ</h2>
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqCard;
