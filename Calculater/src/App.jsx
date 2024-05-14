import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import './App.css'
import { useState } from "react";

function App() {

  let [calVal,setCalVal]=useState("");

  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      setCalVal("");
    }
    else if(buttonText==='='){
      const result=eval(calVal); //eval method jo input box me string mila hoga usko evaluate kar dega.
      setCalVal(result);
    }
    else{
      const newDisplayValue=calVal+buttonText;
      setCalVal(newDisplayValue);
    }
  }
    

  return (
    <div className={styles.calculator}>
      
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>

    </div>
  )
}

export default App
