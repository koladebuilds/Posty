
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./style.css";


const App = () => {
  const appName = "Devconf App";  //assume this is coming from an api
  let walletBalance = "1000";
  let isLoggedIn = true;
  const students = ["Yemi", "David", "scoffield", "Ojule"];

  const products = [
    {id:2, name:"scarf", price:1000},
    {id:3, name:"Soap", price:3000},
    {id:4, name:"Greek Yogurt Parfait", price:16000},
    {id:5, name:"spaqphetti", price:10000},
  ];

  return (
    //jsx
    <div className="container">
      {/* conditional rendering */}
      {isLoggedIn ? <Dashboard/> : <Login/>}
      <h1>{walletBalance}</h1>
      <Header name={appName} wb ={walletBalance} />
      <div className="row myrow">
            <Main products={products}/>
            <Sidebar students={students}/>
      </div>
      <Footer  wb ={walletBalance}/>
    </div>

  )
}


export default App;