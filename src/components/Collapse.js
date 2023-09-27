import React, { useState } from "react";

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <button className="collapse-button" onClick={toggleCollapse}>
        {title}
        <i
          className={`fa fa-angle-up ${isOpen ? "rotate" : ""}`}
          aria-hidden="true"
        ></i>
      </button>
      <p className="collapse-content">{description}</p>
    </div>
  );
}

export default Collapse;
