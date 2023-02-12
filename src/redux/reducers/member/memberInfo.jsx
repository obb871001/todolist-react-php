const MemberInfo = (state = {}, action) => {
    switch (action.type) {
      case "StoreInfo":
        return action.payload;
      default:
        return state;
    }
  };
  export default MemberInfo;
  