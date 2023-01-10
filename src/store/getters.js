const getters = {
  authEmail(state) {
    return state.email;
  },
  authFirstName(state) {
    return state.firstName;
  },
  authLastName(state) {
    return state.lastName;
  },
  authPhoneNumber(state) {
    return state.phoneNumber;
  },
  authToken(state) {
    return state.token;
  },
};
export default getters;
