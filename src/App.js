import { useEffect, useState } from "react";
import { useLocalStorage } from "./components/useLocalStorage";
import "./App.css";
import CreateInput from "./components/createInput";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */

/* import arrDatos from "./datos";
import Escena from "./components/Escena/escena"; */

function App() {
  const [total, setTotal] = useState(0);
  const [display, setDisplay] = useState(false);
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);
  const [budget, setBudget] = useState({
    web: false,
    seo: false,
    ads: false,
    pages: 1,
    languages: 1,
  });
  const [text, setText] = useLocalStorage({}, "");

  useEffect(() => {
    calculateTotal(total);
  }, [budget]);

  useEffect(() => {
    text && setBudget(budget);
  }, [text]);

  const handleCheck = (event) => {
    let { name } = event.target;
    let newBudget = { ...budget };
    let languageProp;
    let pageProp;

    for (let property in budget) {
      if (property === "pages") {
        pageProp = property;
      } else if (property === "languages") {
        languageProp = property;
      }
    }

    if (name === "web") {
      changeDisplay();
      if (!event.target.checked) {
        setPages(1);
        setLanguages(1);
        newBudget[pageProp] = 1;
        newBudget[languageProp] = 1;
        setBudget(newBudget);
      }
    }
    newBudget[name] = !newBudget[name];
    setBudget(newBudget);
  };

  const changeDisplay = () => {
    setDisplay((prev) => !prev);
  };

  const changeNumberInput = (event) => {
    let { name, value } = event.target;
    let newBudget = { ...budget };
    let numberValue = Number(value);

    if (name === "pages") {
      let sumPages =
        (value === "+" && pages + 1) ||
        (value === "-" && pages - 1) ||
        (value > 0 && numberValue);

      newBudget[name] = sumPages;
      setPages(sumPages);
    } else if (name === "languages") {
      let sumLanguages =
        (value === "+" && languages + 1) ||
        (value === "-" && languages - 1) ||
        (value > 0 && numberValue);

      newBudget[name] = sumLanguages;
      setLanguages(sumLanguages);
    }
    setBudget(newBudget);
  };

  const calculateTotal = () => {
    let newTotal =
      0 +
      (budget.web && 500) +
      (budget.seo && 300) +
      (budget.ads && 200) +
      ((budget.pages > 1 || budget.languages > 1) &&
        budget.pages * budget.languages * 30);

    setTotal(newTotal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    /* let completeBudget = {...budget}
    completeBudget.total = total;  */
    setText(budget);
    console.log(text);
  };

  return (
    <div>
      <h3> ¿Que quieres hacer?</h3>
      <form className="App">
        <p>
          <input
            type="checkbox"
            name="web"
            onChange={handleCheck}
            value="500"
          />{" "}
          Una página web (500)
        </p>
        <CreateInput
          display={display}
          numberInput={changeNumberInput}
          pages={pages}
          languages={languages}
          setPages={setPages}
          setLanguages={setLanguages}
        />

        <p>
          <input
            type="checkbox"
            name="seo"
            onChange={handleCheck}
            value="300"
          />{" "}
          Una consultoría SEO (300€)
        </p>
        <p>
          <input
            type="checkbox"
            name="ads"
            onChange={handleCheck}
            value="200"
          />{" "}
          Una campaña de Google Ads (200€)
        </p>

        <p> Precio: {total}€ </p>
        <input
          type="button"
          name="submit"
          onClick={onSubmit}
          value="Guardar Presupuesto"
        />
      </form>
    </div>
  );
}

export default App;
