const MemberOauth = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case "isLogin":
      return (state = { isLoggedIn: true });
    default:
      return state;
  }
};
export default MemberOauth;
