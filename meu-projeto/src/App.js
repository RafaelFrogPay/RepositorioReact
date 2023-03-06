import './App.css'
import HelloWorld from './components/HelloWorld'
import SeyMyName from './components/SeyMyName'
import Pessoa from './components/Pessoa'

function App() {
  const nome = 'Gabriel'

  return (
    <div className="App">
    <HelloWorld />
    <SeyMyName nome='Rafael'/>
    <SeyMyName nome={nome}/>
    <Pessoa 
    nome="Rafael" 
    idade="25" 
    profissao="Analista de suporte" 
    foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
