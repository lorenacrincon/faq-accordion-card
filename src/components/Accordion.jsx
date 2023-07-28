import React, { useState } from "react";
import { accordionData } from "../data";
import arrow from "../assets/icon-arrow-down.svg";

function Accordion() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <>
      {accordionData.map((data, index) => (
        <div key={index} className="text-left">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggle(index)}
          >
            <h3 className="font-bold mt-5">{data.title}</h3>
            <div>
              {open === index ? (
                <img className="rotate-180" src={arrow} alt="Arrow up" />
              ) : (
                <img src={arrow} alt="Arrow down" />
              )}
            </div>
          </div>
          {open === index && <p className="font-thin my-5 ">{data.desc}</p>}
          <hr />
        </div>
      ))}
    </>
  );
}

export default Accordion;
