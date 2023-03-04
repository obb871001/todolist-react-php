export const isLogin = (data) => {
  return {
    type: "isLogin",
  };
};

export const StoreInfo = (data) => {
  return {
    type: "StoreInfo",
    payload: data,
  };
};

export const StoreBlogList = (data) => {
  return {
    type: "StoreBlogList",
    payload: data,
  };
};
