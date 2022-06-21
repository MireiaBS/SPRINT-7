export const BudgetInput = (props) => {
    
    const budget = props.budget
    const text = <>
      <p><strong>Hora del presupuesto:</strong> {props.date}</p>
      <p><strong>Nombre de cliente: </strong>{budget.userName}</p>
      <p><strong>Nombre del presupuesto: </strong>{budget.budgetName}</p>
      <p><strong>Servicios elegidos:</strong> {budget.web && `Página Web: ${budget.pages} página/s con ${budget.languages} idioma/s. `}{budget.seo && 'Consultoría SEO.'} {budget.ads && 'Goodle Ads'}</p>
      <p><strong>Precio total: </strong>{budget.total}</p>
    </>    
   
    return text;
  }