import { combineReducers } from "redux";
import BlogList from "./member/blog_list";
import MemberInfo from "./member/memberInfo";
import MemberOauth from "./member/signin";

const ALL_REDUCERS = combineReducers({
  isMemberOauth: MemberOauth,
  isMemberInfo: MemberInfo,
  isBlogList: BlogList,
});

export default ALL_REDUCERS;
