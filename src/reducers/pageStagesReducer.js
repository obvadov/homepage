const pageStagesReducer = (state, action) => {
  switch (action.type) {
    case "INIT_PAGE":
      return {isLoading: true, changeCharacter: true};
      break;

    case "PAGE_LOADED":
      return {...state, isLoading: false, changeCharacter: false};
      break;

    default:
      return {isLoading: true, changeCharacter: false};
  }
};

export {pageStagesReducer};
