import { Redirect } from "react-router-dom";

const HOC = (WrappedComponent) => {
  return (props) => {
    const auth = "";
    if (!auth.isLoggedIn) {
      return <Redirect to="/signin" />;
    }
    return <WrappedComponent {...props} />;
  };
};

export default HOC;
