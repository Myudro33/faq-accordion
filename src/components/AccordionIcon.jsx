function AccordionIcon(prop) {
  return (
    <svg
      className="fill-indigo-500 shrink-0 ml-8"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`transform origin-center transition duration-200 ease-out ${
          prop.active && "!rotate-180"
        }`}
      />
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
          prop.active && "!rotate-180"
        }`}
      />
    </svg>
  );
}

export default AccordionIcon;
