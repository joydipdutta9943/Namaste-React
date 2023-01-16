import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";

function App() {
  return (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);