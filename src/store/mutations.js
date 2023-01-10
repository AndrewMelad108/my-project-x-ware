const mutations = {
  SAVE_USER_FIRST_NAME(state, firstName) {
    state.firstName = firstName;
  },
  SAVE_USER_LAST_NAME(state, lastName) {
    state.lastName = lastName;
  },
  SAVE_USER_EMAIL(state, email) {
    state.email = email;
  },
  SAVE_USER_PHONE_NUMBER(state, phoneNumber) {
    state.phoneNumber = phoneNumber;
  },
  SAVE_USER_TOKEN(state, token) {
    state.token = token;
  },
  SAVE_LOGOUT(state) {
      state.email = null,
      state.firstName = null,
      state.lastName = null,
      state.phoneNumber = null,
      state.token = null;
  },
  UPDATE_USER(state, payload){
    state.email = payload.email,
    state.firstName = payload.firstName,
    state.lastName = payload.lastName,
    state.phoneNumber = payload.phoneNumber,
    state.token = payload.token;
  }
};
export default mutations;
