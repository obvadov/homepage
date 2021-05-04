import React from "react";
import Typewriter from "typewriter-effect";

const Header = ({
  position = [],
  nickname,
  imageURI,
  specialtyDescription,
  setChangeCharacter,
}) => {
  const changeCharacterHandler = () => {
    setChangeCharacter();
  };

  return (
    <>
      <header id="header-main">
        <div className="container">
          <nav id="top-nav">
            <ul>
              <li className="current">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#home-languages">Languages</a>
              </li>
              <li>
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </nav>
          <div id="header-content">
            <div id="character_base_info">
              <h1>
                I am {nickname} <br />
                the
                <span id="txt-type">
                  <Typewriter
                    options={{
                      strings: position,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <p className="specialty-description">
                I specialize in {specialtyDescription}
              </p>
            </div>

            <div id="character_img">
              <img
                src={`characters/${imageURI}`}
                alter="logo"
                alt=""
                id="logo"
              />
            </div>
          </div>
          <div className="random_button">
            <h1>Lookin' for someone else?</h1>
            <button onClick={changeCharacterHandler} className="btn-light">
              Try Random Candidate
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
