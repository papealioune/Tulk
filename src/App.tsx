import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Header from "./components/Header";

// build an instance of our HeaderProps to pass to the Header component

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

export default App;