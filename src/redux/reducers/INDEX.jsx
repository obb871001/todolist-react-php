import { combineReducers } from "redux";
import MemberOauth from "./member/signin";

const ALL_REDUCERS = combineReducers({
  isMemberOauth: MemberOauth,
});

export default ALL_REDUCERS;
