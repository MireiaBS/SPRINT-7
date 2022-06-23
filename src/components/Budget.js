export const BudgetInput = (props) => {
    
    const budgets = props.budget
    const text = budgets.map( (budget,i) =>  
    <div className='budget-input' key={i}>
      <br/>
      <p><strong>FECHA DEL PRESUPUESTO:</strong> {budget.date}</p> 
      <p><strong>Nombre de cliente: </strong>{budget.userName}</p>
      <p><strong>Nombre del presupuesto: </strong>{budget.budgetName}</p>
      <p><strong>Servicios elegidos:</strong> {budget.web && `Página Web: ${budget.pages} página/s con ${budget.languages} idioma/s. `}{budget.seo && 'Consultoría SEO.'} {budget.ads && 'Goodle Ads'}</p>
      <p><strong>Precio total: </strong>{budget.total}</p><br/>
    </div> )
     

    return text;
  }
  