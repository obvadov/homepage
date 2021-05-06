import React, {useEffect, useReducer, useState} from "react";

// components
import Header from "../components/Header/Header";
import Languages from "../components/Languages/Languages";
import Achievements from "../components/Achievements/Achievements";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import Contacts from "../components/Contacts/Contacts";
import BufferingMode from "../components/BufferingMode/BufferingMode";

// services
import {getRandomCharacter} from "../services/characters";

// reducers
import {characterReducer} from "../reducers/characterReducer";
import {pageStagesReducer} from "../reducers/pageStagesReducer";

import classes from "./MainDataShow.module.css";

import "../main.scss";

const MainDataShow = (props) => {
  const [developedBy, setDevelopedBy] = useState([]);
  const [characterR, dispatchCharacterR] = useReducer(characterReducer, {});
  const [pageStagesR, despatchPageStagesR] = useReducer(pageStagesReducer, {
    isLoading: true,
    changeCharacter: true,
  });

  const changeCharacterHandler = () => {
    despatchPageStagesR({type: "INIT_PAGE"});
  };

  useEffect(() => {
    if (pageStagesR.changeCharacter) {
      getRandomCharacter().then((props) => {
        dispatchCharacterR({type: "INIT_CHARACTER", payload: props.character});
        setDevelopedBy(props.developedBy);
        despatchPageStagesR({type: "PAGE_LOADED"});
      });
    }
  }, [pageStagesR.changeCharacter]);

  //
  return (
    <>
      {
        <>
          <Header
            nickname={characterR.nickname}
            imageURI={characterR.image_uri}
            specialtyDescription={characterR.specialty_description}
            setChangeCharacter={changeCharacterHandler}
            position={characterR.position}
          />
          <Languages languages={characterR.languages} />
          <Achievements achievments={characterR.achievments} />
          <WorkExperience workExperienceFromDb={characterR.workExperience} />
          <Contacts
            developedBy={developedBy}
            contactsFromDb={characterR.contacts}
          />
        </>
      }
      {pageStagesR.isLoading && <BufferingMode classes={classes} />}
    </>
  );
};

export default MainDataShow;
