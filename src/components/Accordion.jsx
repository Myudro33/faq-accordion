import { useState } from "react";
import AccordionIcon from "./AccordionIcon";
import PropTypes from "prop-types";

function Accordion({ title, answer }) {
  const [show,setShow]= useState(false)
  return (
    <div className="w-full mt-10 ">
      <div onClick={()=>setShow(!show)} className="flex justify-between cursor-pointer">
        <h1 className="text-dark-purple hover:text-gray-purple font-bold text-xl">
          {title}
        </h1>
        <AccordionIcon active={show} />
      </div>
      <div
        className={`w-full bg-gray-purple grid overflow-hidden transition-all duration-300 ease-in-out ${
          show ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  answer: PropTypes.string,
};
export default Accordion;
