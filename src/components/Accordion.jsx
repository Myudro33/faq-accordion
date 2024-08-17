import AccordionIcon from "./AccordionIcon";
import PropTypes from "prop-types";

function Accordion({ active, title, answer,setActive }) {
  return (
    <div className="w-full mt-10 ">
      <div onClick={()=>setActive(!active)} className="flex justify-between cursor-pointer">
        <h1 className="text-dark-purple hover:text-gray-purple font-bold text-xl">
          {title}
        </h1>
        <AccordionIcon active={active} />
      </div>
      <div
        className={`w-full bg-gray-purple grid overflow-hidden transition-all duration-300 ease-in-out ${
          active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  active: PropTypes.boolean,
  title: PropTypes.string,
  answer: PropTypes.string,
  setActive:PropTypes.func
};
export default Accordion;
