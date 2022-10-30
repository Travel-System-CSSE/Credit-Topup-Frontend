import React, { useState } from "react";
import {
  NavBar,
  NavLinks,
  Content,
  Footer,
  Model,
  Credit,
} from "../components";

const Dashboard = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [credit, setCredit] = useState(false);

  const modelShow = async (id = 2) => {
    if (id === 2) {
      setModelOpen(!modelOpen);
    }
    if (id === 3) {
      setCredit(!credit);
    }
    return;
  };

  const showCredit = (id = 3) => {
    if (id === 3) {
      setCredit(!credit);
    }
    return;
  };

  return (
    <main>
      {modelOpen && <Model modelShow={modelShow} />}
      {credit && <Credit showCredit={showCredit} />}
      <NavBar />
      <NavLinks />
      <section className="main-background">
        <Content modelShow={modelShow} showCredit={showCredit} />
        <Footer />
      </section>
    </main>
  );
};

export default Dashboard;
