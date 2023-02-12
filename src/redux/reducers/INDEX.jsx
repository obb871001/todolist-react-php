import { combineReducers } from "redux";
import MemberInfo from "./member/memberInfo";
import MemberOauth from "./member/signin";

const ALL_REDUCERS = combineReducers({
  isMemberOauth: MemberOauth,
  isMemberInfo: MemberInfo,
});

export default ALL_REDUCERS;
