import React from "react";
import StartBackground from "../../pages/Blog/StartBackground";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Wrapper = ({ children, Background }) => {
  return (
    <section className={``}>
      <StartBackground />
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Wrapper;
