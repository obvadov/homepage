import React from "react";

const LanguageItem = ({i_type, language, description}) => {
  return (
    <div>
      <i className={`fas ${i_type}`}></i>
      <h3>{language}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LanguageItem;
