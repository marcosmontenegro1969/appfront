import axios from "axios"; //importa a biblioteca Axios para realizar solicitações HTTP ao servidor.
import { useState } from "react"; //importa a função useState do React. Ela é um hook que permite adicionar estado a componentes de função.

function Login() { //cria o componente Login. Ele é uma função que retorna um elemento JSX.
  const [nome, setNome] = useState(''); //cria o estado "nome" e a função "setNome" para atualizá-lo, e o inicializa com uma string vazia.
  const [senha, setSenha] = useState(''); //cria o estado "senha" e a função "setSenha" para atualizá-lo, e o inicializa com uma string vazia.
  const [error, setError] = useState(''); //cria o estado "error" e a função "setError" para atualizá-lo, e o inicializa com uma string vazia.
  const [usuario, setUsuario] = useState(null); //cria o estado "usuario" e a função "setUsuario" para atualizá-lo, e o inicializa com "null".
  
  const handleLogin = async(evento) => { //cria uma função assíncrona que recebe um evento (click) como parâmetro.
    evento.preventDefault(); //impede a ação padrão do evento clique (envio dos dados do formulário e recarregamento da página).

    try { //tenta executar o código abaixo. Se ocorrer um erro, o bloco catch será executado.
      const response = await axios.post( //envia uma solicitação de login para o servidor utilizando Axios.
        'http://localhost:3000/login', //URL do servidor que receberá a solicitação.
        JSON.stringify({ nome, senha }), //dados que serão enviados para o servidor. Neste caso, o nome e a senha.
        { headers: { 'Content-Type': 'application/json' }}); //configura o cabeçalho padrão da solicitação JSON.
    
      setUsuario(response.data); //se a resposta da solicitação foi 200 (bem sucedida), atualiza o estado "usuario" com os dados do usuário.
    
    } catch (error) { //se ocorrer um erro durante a solicitação:
      if (!error?.response) { //se o servidor respondeu com nulo ou indefinido.
        setError('Erro ao acessar o servidor'); //define uma mensagem de erro que não foi possível acessar o servidor.
      } else if (error.response.status === 401) { //se o servidor respondeu um status 401 (Não autorizado)
        setError('Usuário ou senha inválidos'); //define uma mensagem de erro que o usuário ou senha são inválidos.
      }
    }
      };

  const handleLogout = () => { //cria uma função que não recebe parâmetros.
    setUsuario(null); //atualiza o estado "usuario" com nulo.
    setError(''); //atualiza o estado "error" com uma string vazia.
  };
  
  return ( //retorna o elemento JSX abaixo.
    <div className = 'container_Formulario_Login'> {/*cria uma div para conter todos os elementos do formulário de login.*/}
      {usuario == null ? ( //cria um operador ternário que verifica se o estado "usuario" é nulo.
        <div> {/*cria uma div para conter os elementos do formulário de login. (exigencia operador ternário*/}
          {/* <h2>Login</h2> */}
          <form className = 'formulario_Login'> {/*cria um formulario para conter os dados que serão enviados ao servidor*/}
            <div className="horizontalRectangle1"></div>
            <div className="horizontalRectangle2">
              <span className="loginText">Login</span>
            </div>
            <label htmlFor="nome" style={{ display: 'inline-block', marginLeft: '16px' }}>Nome</label> {/*cria um label para o campo de entrada de texto do nome*/}
            <input type="text"
                   name="nome"
                   placeholder="nome"
                   required
                   onChange={(evento) => setNome(evento.target.value)}
                   onFocus={() => setError('')}/>
            <label htmlFor="password" style={{ display: 'inline-block', marginLeft: '16px' }}>Senha</label> {/*cria um label para o campo de entrada de texto da senha*/}
            <input type="password" //cria um campo de entrada de texto do tipo "password" para a senha
                   name="senha" //define o nome do campo como "senha"
                   placeholder = "senha" //define o placeholder do campo como "senha"
                   required //define que o campo é obrigatório
                   onChange={(evento) => setSenha(evento.target.value)} //a função "setSenha" será executada na alteração deste campo.
                   onFocus={() => setError('')}/>
            <button type="submit" //cria um botão do tipo "submit" para enviar os dados do formulário
                    className='btn-login' //define a classe do botão como "btn-login"
                    onClick = {(evento) => handleLogin(evento)}>Login</button> {/*a função "handleLogin" será executada no clique do botão*/}
          </form>
          <p>{error}</p> {/*cria um parágrafo onde será exibida a mensagem de erro*/}
        </div>
      ) : (
          <div id="div_Logado"> {/*cria uma div os elementos da mensagem de boas vindas. (exigencia do operador ternário)*/}
            <h2>Olá {usuario.nome}, vá pra tela de João</h2> {/*dá boas-vindas e sugere que o usuário vá para a tela de João*/}
            <button type="button" //cria um botão do tipo "button" para sair da tela de login
                    className='btn_Logado' //define a classe do botão como "btn_Logado"
                    onClick={() => handleLogout()}>Sair</button> {/*a função "handleLogout" será executada no clique do botão*/}
          </div>
      )}
    </div>
  );
}

export default Login; //exporta o componente Login para ser importado e utilizado em outros arquivos do projeto.
