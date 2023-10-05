// ParentComponent.js
import React from "react";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import List from "../components/List";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Paragraph />
      <List />
      <Footer />
    </>
  );
}

export default Home;
