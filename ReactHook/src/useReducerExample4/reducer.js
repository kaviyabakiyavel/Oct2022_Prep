export const initalValue = {
  username: "",
  email: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "textInput":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return <></>;
  }
};
