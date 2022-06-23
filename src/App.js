import { useEffect, useState } from "react";
import { useLocalStorage } from "./components/useLocalStorage";
import "./css/App.css";
import CreateInput from "./components/createInput";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BudgetInput } from "./components/Budget";

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
  const [budgetSaved, setBudgetSaved] = useState([]);
  const [time, setTime] = useState("");
  const [order, setOrder] = useState([]);

  useEffect(() => {
    calculateTotal(total);
  }, [budget]);

  useEffect(() => {
    setBudget(budget);
  }, [text]);

  useEffect(() => {
    getDate();
  }, [budgetSaved]);

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
        (value === "-" && pages > 1 && pages - 1) ||
        (value > 0 && numberValue);

      newBudget[name] = sumPages;
      setPages(sumPages);
    } else if (name === "languages") {
      let sumLanguages =
        (value === "+" && languages + 1) ||
        (value === "-" && languages != 0 ? languages - 1 : setLanguages(1)) ||
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
    let newBudget = { ...budget };
    newBudget.total = total;

    let updateBudget = [];

    if (!budget.userName || !budget.budgetName || budget.price === 0) {
      alert("Rellene los campos antes de guardar");
      e.preventDefault();
    } else {
      newBudget.date = time;
      updateBudget = [...budgetSaved, newBudget];
      setBudgetSaved(updateBudget);
      setText(budgetSaved);
    }
  };

  const budgetName = (e) => {
    const nameBudget = e.target.value;
    const newNameBudget = { ...budget };
    newNameBudget.budgetName = nameBudget;
    setBudget(newNameBudget);
  };

  const userName = (e) => {
    const nameUser = e.target.value;
    const newNameUser = { ...budget };
    newNameUser.userName = nameUser;
    setBudget(newNameUser);
  };

  const getDate = () => {
    let date = new Date();
    let fullDate =
      date.getDay() +
      "/" +
      date.getMonth() +
      "/" +
      date.getFullYear() +
      " a las " +
      date.getHours() +
      ":" +
      date.getMinutes();
    setTime(fullDate);
  };

  const alfabeticOrder = () => {
    function SortArray(x, y) {
      return x.userName.localeCompare(y.userName);
    }
    let orderAlfabetic = budgetSaved.sort(SortArray);
    setOrder(orderAlfabetic);
  };

  const dateOrder = () => {
    let orderDate = budgetSaved.sort(
      (a, b) => new Date(a.fechas).getTime() < new Date(b.fechas).getTime()
    );
    setOrder(orderDate);
  };

  const resetOrder = () =>{
    setOrder(budgetSaved)
    console.log('budget:', budget, 'saveBudget:', budgetSaved)
  }

  return (
    <BrowserRouter>
      <Link to="/" className="no-underline">
        {" "}
        INICIO{" "}
      </Link>
      <Link to="/presupuesto" className="no-underline">
        {" "}
        PRESUPUESTO
      </Link>
      <Routes>
        <Route path="/" element={<div>Bienvenido!</div>}></Route>

        <Route
          path="/presupuesto"
          element={
            <>
              <form className="App">
                <h2> Escribe tus datos para guardar el presupuesto:</h2>
                <div>
                  Nombre del cliente:
                  <input
                    type="text"
                    placeholder="Escribe tu nombre"
                    onChange={userName}
                  />
                  <br />
                  Nombre presupuesto:{" "}
                  <input
                    type="text"
                    placeholder="Escribe tu nombre"
                    onChange={budgetName}
                  />
                </div>
                <h3> ¿Que quieres hacer?</h3>

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
                  className="button-budget"
                  type="button"
                  name="submit"
                  onClick={onSubmit}
                  value="Guardar Presupuesto"
                />

                <h3>Listado de presupuestos guardados.</h3>
                <div>
                  {" "}
                  Ordenar por:
                  <input
                    className="button-order"
                    type="button"
                    value="A-Z"
                    onClick={alfabeticOrder}
                  />
                  <input
                    className="button-order"
                    type="button"
                    value="Fecha"
                    onClick={dateOrder}
                  />
                  <input
                    className="button-order"
                    type="button"
                    value="Reiniciar"
                    onClick={resetOrder}
                  />
                </div>
                <BudgetInput budget={budgetSaved} order={order}/>
              </form>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
