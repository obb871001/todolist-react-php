import React from "react";
import StartBackground from "../StarBackground/StarBackground";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Wrapper = ({ children, Background }) => {
  return (
    <section className={``}>
      {/* <StartBackground /> */}
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Wrapper;
