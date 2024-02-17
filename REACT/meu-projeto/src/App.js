import './App.css';

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
    </div>
  );
}

export default App;
