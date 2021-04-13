import React from "react";
import Header from "./components/header/header.component";
import Main from "./components/main/main.component";
import Bugs from "./components/bugs/bugs.component";
import AddBugForm from "./components/add-bug/add-bug.component";
import BugsProvider from "./provider/Bugs-provider.component";

const App = () => (
  <div>
    <BugsProvider>
      <Header />
      <Main>
        <Bugs />
        <AddBugForm />
      </Main>
    </BugsProvider>
  </div>
);

export default App;
