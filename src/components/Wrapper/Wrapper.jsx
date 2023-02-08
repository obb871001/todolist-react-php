import React from "react";
import Header from "../Header/Header";

const Wrapper = ({ children, Background }) => {
  return (
    <section className={``}>
      <Header />
      {children}
    </section>
  );
};

export default Wrapper;
