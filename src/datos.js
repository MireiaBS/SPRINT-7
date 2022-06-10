const arrDatos = [
    {txt: `Una página web (500)`,
    priceItem: 500
    },
    {txt: `Una consultoría SEO (300€)`,
    priceItem: 300
    },
    {txt: `Una campaña de Google Ads (200€)`,
    priceItem: 200
    },
]
// ---------------- REFACTORIZAR ---------------------------------------------//

/* 

  function getName(i) {
    let arrProp = []
    for (let property in budget) {    
    arrProp.push(property)    
    }
    return arrProp[i]
  }


const datosPrecios = arrDatos.map((dato, i) => {
    return (
      <p key={i}>
        <input          
          type="checkbox"
          name={getName(i)}
          onChange={handleCheck} 
          /* defaultValue=''
        />{" "}
        <Escena txt={dato.txt} />
      </p>
    );
  }); */

export default arrDatos;