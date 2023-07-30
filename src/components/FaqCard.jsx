import React from "react";
import Accordion from "./Accordion";
import mobileIlustration from "../assets/illustration-woman-online-mobile.svg";
import bgPatternMobile from "../assets/bg-pattern-mobile.svg";
import desktopIlustration from "../assets/illustration-woman-online-desktop.svg";
import bgPatternDesktop from "../assets/bg-pattern-desktop.svg";
import box from "../assets/illustration-box-desktop.svg";

function FaqCard() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="relative bg-white px-7 lg:pe-20 pb-16 pt-20 lg:pt-0 shadow-xl sm:mx-auto rounded-3xl w-96 lg:w-2/3 xl:w-3/5">
          <div className="absolute w-72 inset-x-12 -top-32 lg:hidden">
            <img className="" src={mobileIlustration} alt="Ilustration woman" />

            <img
              className="absolute w-72 inset-x-12 -top-32 translate-y-64 -translate-x-11"
              src={bgPatternMobile}
              alt="Ilustration woman shadow"
            />
          </div>
          <div className="hidden lg:block">
            <img
              className="absolute w-40 z-40 top-56 -left-20"
              src={box}
              alt="Box"
            />
            <img
              className="absolute z-30 inset-y-16 max-w-lg -left-20 woman-desktop"
              src={desktopIlustration}
              alt="Ilustration woman"
            />
            <img
              className="absolute z-20 max-w-3xl -top-32 -inset-x-80 bg-pattern-desktop"
              src={bgPatternDesktop}
              alt="Ilustration woman shadow"
            />
          </div>
          <div className="lg:flex lg:justify-end pt-20">
            <div className="w-full lg:w-96">
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
