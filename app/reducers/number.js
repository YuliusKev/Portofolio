export default (state = 0, action) => {
  if (action.type == "INCREMENT_SUCCESS") {
    return action.number;
  }

  return state;
};
