import { useState } from "react";
import "./App.css";
import arrDatos from "./datos";
import Escena from "./components/Escena/escena";

function App() {
  const [price, setPrice] = useState("0");
  const [checked, setChecked] = useState({
    web: false,
    seo: false,
    ads: false,
    pages: 1,
    languges: 1
  });
  console.log(checked)
 

  const handleCheck = (event) => {
    let actualList = [...checked];
    let target = event.target.checked
    if (target) {
      actualList = [...checked, target]
    } else {
      
    }
    setChecked(actualList);
    console.log(actualList)
  }

 /*  let checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + item;
      })
    : 0; */
  

  const datosPrecios = arrDatos.map((dato, i) => {
    return (
      <p key={i}>
        <input          
          type="checkbox"
          name="checkbox"
          onChange={handleCheck}
        />{" "}
        <Escena txt={dato.txt} />
      </p>
    );
  });

  return (
    <div className="App">
      <h3> ¿Que quieres hacer?</h3>
      {datosPrecios}
      <p> Precio: {price}€ </p>
    </div>
  );
}

export default App;
