export const selectedLibrary = libraryId => {
  return {
    type: "select_library",
    payload: libraryId
  };
};

export const emailChanged = email => {
  return {
    type: "email_changed",
    payload: email
  };
};
