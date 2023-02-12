export const isLogin = (data) => {
  return {
    type: "isLogin",
  };
};

export const StoreInfo = (data) => {
  return {
    type: "StoreInfo",
    payload:data,
  };
};
