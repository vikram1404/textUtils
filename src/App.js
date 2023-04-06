import { useState } from "react";
import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import React from "react";


function App() {
  const [mode, setMode] = useState('light'); //Wheather Dark Mode is Enable or not
  const [alert, setAlert] = useState('null')
  

  const showAlert = (massage, type)=>{
    setAlert({
      msg:massage,
      type:type
    })
     setTimeout(() =>{
       setAlert('null');
     },1500)
  }
  const toggleMode = ()=>{
    if (mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#274055" 
      showAlert("Dark mode has been Enabled", "success :");
      document.title = 'TextUtils - Dark Mode'
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing'
      // },2000)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white" 
      showAlert("light mode has been Enabled", "success :");
      document.title = 'TextUtils - Light Mode'
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now'
      // },2000)
    }
  }
  return (
    <>
      {/* <Navbar title = "Textutils" aboutText="About Textutils "/> */}
      {/* <Navbar/> */}
      {/* <BrowserRouter> */}
        <Navbar title = "Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
        {/* <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}/>
        </Routes> */}
        <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
        </div>
      {/* </BrowserRouter>  */}
    </>
  );
}

export default App;
