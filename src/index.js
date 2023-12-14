//O arquivo index.js é o ponto de entrada da aplicação no nível do JavaScript.
//É onde o React é utilizado para renderizar o componente principal (App) na DOM.
//Além disso, o React.StrictMode é envolvido em torno do App para detectar
// possíveis problemas na sua aplicação durante o desenvolvimento.

import React from 'react'; //importa a biblioteca React.
import ReactDOM from 'react-dom/client'; //importa a API ReactDOM.
import './index.css'; //importa o arquivo de estilos CSS associado ao componente App.
import App from './App'; //importa o componente App (o principal da aplicação) do arquivo App.js.

const root = ReactDOM.createRoot(document.getElementById('root')); //Cria na constante "root" a raiz React através da função createRoot.

// Renderiza o componente principal (App) dentro do elemento do DOM especificado a raiz da aplicação React.
// Utiliza o modo rigoroso (StrictMode) para destacar práticas desencorajadas e detectar problemas potenciais.
root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

