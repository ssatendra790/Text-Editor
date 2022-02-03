// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
const showAlert= (message,type)=>{
  setAlert({
   msg: message,
   type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500)
}
  
const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");

    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils"/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter text here to analyze" mode={mode}/>
          {/* </Route>
    </Switch>  */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
