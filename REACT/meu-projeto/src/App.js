import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/frase';

function App() {
  const name = "Paulo";
  function sum(a, b){
    return(a + b);
  }
  
  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá {name}</p>
      <p>Soma: {sum(2, 2)}</p>
      <HelloWorld />
      <Frase />
    </div>
  );
}

export default App;
