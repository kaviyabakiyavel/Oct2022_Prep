export const initalValue = {
  username: "",
  email: "",
};
export function reducer(state, action) {
  switch (action.type) {
    case "usename":
      return { username: action.payload };
    case "email":
      return { email: action.payload };
    default:
      return <></>;
  }
}
