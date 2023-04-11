function changeName(newName) {
  return {
    type: "CHANGE-NAME",
    payload: newName,
  };
}

export default changeName;
