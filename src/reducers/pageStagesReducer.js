import React from "react";

const pageStagesReducer = (state, action) => {
  switch (action.type) {
    case "INIT_PAGE":
      return {isLoading: true, changeCharacter: false};
      break;

    case "CHANGE_CHARACTER":
      return {...state, changeCharacter: true};
      break;

    case "PAGE_LOADED":
      return {...state, isLoading: false};
      break;

    default:
      return {isLoading: true, changeCharacter: false};
  }
};

export {pageStagesReducer};
