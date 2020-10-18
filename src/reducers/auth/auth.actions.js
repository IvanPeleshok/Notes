import authTypes from "./auth.types";

export const currentUser = (user) => {
  return {
    type: authTypes.SET_CURRENT_USER,
    payload: user,
  };
};
