import './ExpenseItem.css';
import { Card } from '../UI/Card';
import { ExpenseDate } from './ExpenseDate';
// Um componente é apenas uma função em javascript
// Para usar um componente em qualquer lugar, deve-se exporta-lo.
export const ExpenseItem = props => {
  // com o unico parametro recebemos todos os dados que foram passado a esse componente.
  // o parametro props recebe um objeto com todos os atributos.
  console.log(props.expense);

  // Um componente retorna apenas um elemento por vez
  return (
    //  para aplicar o css colocamos className. Aqui o JSX por debaixo dos panos é apenas javascript no final.
    // children são componentes dentro de outro custom componente.
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </Card>
  );
};
