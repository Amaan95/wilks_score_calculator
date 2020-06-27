import React from "react";

import Header from "../components/Header";
import Card from "../components/Card";
import ResultCard from "../components/Result";

const Index = () => (
  <React.Fragment>
    <Header />
    <body>
      <Card title="Wilks Score Calculator" />
      <ResultCard score={50} />
    </body>
  </React.Fragment>
);

export default Index;
