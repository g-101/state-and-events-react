import './ExpenseItem.css';
import { Card } from '../UI/Card';
import { ExpenseDate } from './ExpenseDate';
// Um componente é apenas uma função em javascript
// Para usar um componente em qualquer lugar, deve-se exporta-lo.
export const ExpenseItem = props => {
  // com o unico parametro recebemos todos os dados que foram passado a esse componente.
  // o parametro props recebe um objeto com todos os atributos.
  console.log(props.expense);
  const clickHandler = () => alert('Clicked!');

  return (
    // children são componentes dentro de outro custom componente.
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      {/* o react disponibiliza events listeners como propriedades começando com "on" */}
      {/* o manipulador do evento é passsado como callback no evento */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
