export const BudgetInput = (props) => {
    
    const budgets = props.budget
    const orderBudget = props.order

    const text =  
    orderBudget.map( (orderBudget,i) =>  
    <div className='budget-input' key={i}>
      <br/>
      <p><strong>FECHA DEL PRESUPUESTO:</strong> {orderBudget.date}</p> 
      <p><strong>Nombre de cliente: </strong>{orderBudget.userName}</p>
      <p><strong>Nombre del presupuesto: </strong>{orderBudget.budgetName}</p>
      <p><strong>Servicios elegidos:</strong> {orderBudget.web && `Página Web: ${orderBudget.pages} página/s con ${orderBudget.languages} idioma/s. `}{orderBudget.seo && 'Consultoría SEO.'} {orderBudget.ads && 'Goodle Ads'}</p>
      <p><strong>Precio total: </strong>{orderBudget.total}</p><br/>
    </div>)     
     

    return text;
  }
  