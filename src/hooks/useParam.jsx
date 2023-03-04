import { useLocation } from "react-router";

const useParam = (TYPE) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentParams = searchParams.get(TYPE);

  return currentParams;
};

export default useParam;
