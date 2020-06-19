import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"; 

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Search></Search>
       <Footer></Footer>
    </div>
  );
}

export default App;
