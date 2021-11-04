
import {Link} from 'react-router-dom'
import {Container} from './styled'


export default function ChLinkt () {
    return (

        <Container>
          <div class="cabecalho">
              <div class="logo">
                <img src="/assets/imagens/logo-claro.png" alt=""/>
              </div>

              <div class="menu">
                <Link to="/">Inicio</Link>
                <Link to=" ">Login</Link>
                <Link to=" ">Tipos de violência</Link>
                <Link to=" ">Tipos de assédio</Link>
                <Link to=" ">Mapa das Delegacias</Link>
                <Link to=" ">Autoestima</Link>
                <Link to="/Chat">Chat</Link>
                <Link to=" ">Cadastro</Link>
              </div>
          </div>

          <div class="conteudo">
              <div class="imagem">
                <img src="/assets/imagens/pg-denuncia.png" alt=""/>
              </div>

              <div class="informacao">
                  <div class="caracteristicas">
                      <div class="titulo">Caracteristicas</div>
                      
                      <div class="imagem1">
                        <img src="/assets/imagens/pg-denuncia-img1.png" alt=""/>
                      </div>
                  </div>

                  <div class="denuncia">
                      <div class="chat">Chat de Deuncias</div>

                      <div class="imagem2">
                        <img src="/assets/imagens/pg-denuncia-img2.png" alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </Container>

    )
}

      