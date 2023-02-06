const MemberOauth = (state = { isLoggedIn: false, ouath: "" }, action) => {
  switch (action.payload) {
    case "StoreMemberOauth":
      return action.payload;
    default:
      return state;
  }
};
export default MemberOauth;
