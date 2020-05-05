import React from "react";
import Header from '../components/Header/Header';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Services from '../components/Services/Services';
import Features from '../components/Features/Features';
// import Dummy from '../components/Dummy/Dummy';


const Index = () => {
  return (
    <>
      <Header />
      <Jumbotron />
      {/* <Dummy /> */}
      <Services />
      <Features />
    </>
  )
  
};

export default Index;
