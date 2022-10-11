export const initalValue = {
  value: "",
  touched: false,
  error: null,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "update":
      return {
        value: payload.value,
        touchecd: true,
        error: payload.error,
      };
    case "reset":
      return initalValue;
    default:
      <></>;
  }
};
