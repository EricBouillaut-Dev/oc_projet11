import React, { useState } from "react";

//Composant collapse
function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false); //Définition du useState à faux (collapse fermé par défaut)

  //Définition du toggle (changement du useState true/false lors d'un clique (ouvert<=>fermé))
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    //Ajout de la classe "open" sur le collapse si il est ouvert et "rotate" sur le chevron
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
