import Finalnome from './componet/finalnome';
import Casa from './componet/nome';
import Sobrenome from './componet/sobrenome';
import Nomeca from './componet/nomeca';
import Nomepro from './componet/nomeprops';
import Nomepr from './componet/Nomepr';
import Nomefinal from './componet/nomefinal'

function App(){
  return(
    <div>
      <h1>Componente App</h1>
      <Casa />
      <Sobrenome nome="Araujo"/>
      <Finalnome nome="Pereira"/>
      <Nomeca />
      <Nomepro text="=>  Esse texto esta dentro de uma props "/>
      <Nomepr />
      <Nomefinal texnemo=" => texto com a troca do props" />
   </div>
  );    
}

export default App;
