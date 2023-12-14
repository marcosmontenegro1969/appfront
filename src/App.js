//O componente App.js é o principal. É o ponto de entrada de uma aplicação React,
//ele é renderizado dentro da <div id="root"> no HTML. O conteúdo desse componente pode incluir
//outros componentes, estilização, e lógica específica da aplicação.

import './App.css'; //faz a importação do arquivo de estilos CSS associado ao componente App.
import Login from './components/Login'; //faz a importação do componente Login do arquivo.

function App() { //cria o componente App. Ele é uma função que retorna um elemento JSX.

  return ( //retorna o elemento JSX abaixo.
    <div className="App"> {/*cria uma div "App" para conter todos os elementos da aplicação.*/}
      <header className="App-header"> {/*cabeçalho da aplicação, utilizando a classe "App-header" para estilização. */}
        <Login /> {/*renderiza o componente Login dentro do cabeçalho da aplicação. */}
      </header>
    </div>
  );
}

export default App; //exporta o componente App para que possa ser utilizado em outros arquivos.


