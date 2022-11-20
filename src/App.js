import { ExpenseItem } from './components/ExpenseItem';

function App() {
  // para aplicar o css colocamos className. Aqui o JSX por debaixo dos panos é apenas javascript no final.
  return (
    <div>
      <h1>Hello World</h1>
      <ExpenseItem />
    </div>
  );
}

export default App;
