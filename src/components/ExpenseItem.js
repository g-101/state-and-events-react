import './ExpenseItem.css';
// Um componente é apenas uma função em javascript
// Para usar um componente em qualquer lugar, deve-se exporta-lo.
export const ExpenseItem = props => {
  // com o unico parametro recebemos todos os dados que foram passado a esse componente.
  // o parametro props recebe um objeto com todos os atributos.
  console.log(props);

  // Um componente retorna apenas um elemento por vez
  return (
    //  para aplicar o css colocamos className. Aqui o JSX por debaixo dos panos é apenas javascript no final.
    <div className="expense-item">
      <div>{props.date.toLocaleString('en-GB', { timeZone: 'UTC' })}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};
