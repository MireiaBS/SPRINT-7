import { useEffect, useState } from "react";
import "./App.css";
import arrDatos from "./datos";
import Escena from "./components/Escena/escena";
import CreateInput from "./components/createInput";

function App() {
  const [total, setTotal] = useState(0);
  const [budget, setBudget] = useState({
    web: false,
    seo: false,
    ads: false,
    pages: 1,
    languages: 1,
  });
  const [display, setDisplay] = useState(false);
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);

  useEffect(() => {
    calculateTotal();
  }, [budget]);

  const handleCheck = (event) => {
    let { name, type } = event.target;
    let newBudget = { ...budget };

    newBudget[name] = !newBudget[name];
    setBudget(newBudget);

    if (name === "web") {
      changeDisplay();      
    }
  };

  const changeDisplay = () => {
    setDisplay(!display);    
  }

  const changeNumberInput = (event) => {
    let { name, value } = event.target;
    let newBudget = { ...budget };

    if (name === "pages") {
      let sumPages = 
        (value === "+" && pages + 1) ||
        (value === "-" && pages - 1);

      newBudget[name] = sumPages;
      setPages(sumPages);
      setBudget(newBudget);
    } else if (name === "languages") {
      let sumLanguages =
        (value === "+" && languages + 1) || 
        (value === "-" && languages - 1);

      newBudget[name] = sumLanguages;
      setLanguages(sumLanguages);
      setBudget(newBudget)
    }
   /*  if (!display){
      setPages(1);
      setLanguages(1);
      calculateTotal()
          
    }; */
  };

  const calculateTotal = (e) => {
    let newTotal =
      0 +
      (budget.web && 500) +
      (budget.seo && 300) +
      (budget.ads && 200) +
      ((budget.pages > 1 && budget.pages * budget.languages)* 30);

    setTotal(newTotal);
  };

  return (
    <div className="App">
      <h3> ¿Que quieres hacer?</h3>
      <p>
        <input type="checkbox" name="web" onChange={handleCheck} value="500" />{" "}
        Una página web (500)
      </p>
      <CreateInput
        display={display}
        numberInput={changeNumberInput}
        pages={pages}
        languages={languages}
      />

      <p>
        <input type="checkbox" name="seo" onChange={handleCheck} value="300" />{" "}
        Una consultoría SEO (300€)
      </p>
      <p>
        <input type="checkbox" name="ads" onChange={handleCheck} value="200" />{" "}
        Una campaña de Google Ads (200€)
      </p>

      <p> Precio: {total}€ </p>
    </div>
  );
}

export default App;
