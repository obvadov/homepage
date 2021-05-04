import React from "react";

const characterReducer = (state, action) => {
  switch (action.type) {
    case "INIT_CHARACTER":
      return {...action.payload};

      break;

    default:
      return {};
  }
};

export {characterReducer};
