import Finalnome from './componet/finalnome';
import Casa from './componet/nome'
import Sobrenome from './componet/sobrenome'

function App(){
  return(
    <div>
      <h1>Bem vindo ao meu projeto</h1>
      <Casa />
      <Sobrenome nome="Araujo"/>
      <Finalnome nome="Pereira"/>
   </div>
  );    
}

export default App;
