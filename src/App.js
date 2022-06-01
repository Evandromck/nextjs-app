import { useState } from 'react';



function App(){
  
   
 

  

  return(
    <div>
      <h1>Cadastrabdo usuario</h1>

      <form>
        <label>Nome:</label><br/>
        <input placeholder="Digite seu nome" /><br/>

        <label>email:</label><br/>
        <input placeholder="Digite seu meil" /><br/>

        <label>idade:</label><br/>
        <input placeholder="Digite seu idade" /><br/>

        <button type="submit">registrar</button>

      </form>

      

   </div>
  );    
}

export default App;
