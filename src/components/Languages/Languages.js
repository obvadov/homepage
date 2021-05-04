import React from "react";
import LanguageItem from "./LanguageItem";

//@TODO server request implement
const Languages = ({languages: languagesFromDb}) => {
  if (!languagesFromDb) languagesFromDb = [];

  return (
    <>
      <section id="home-languages" className="text-center">
        <div className="container">
          <h2 className="section-title">LANGUAGES</h2>
          <div className="bline"></div>
          <p className="lead">
            Many languages spread through the galaxy, but some of them the most
            used. I'm so talented in:
          </p>
          <div className="languages">
            {languagesFromDb.map((lan) => (
              <LanguageItem key={lan.i_type} {...lan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Languages;
