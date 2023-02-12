import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Wrapper = ({ children, Background }) => {
  return (
    <section className={``}>
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Wrapper;
