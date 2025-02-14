
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import { Container }  from "./styled";
import { ChatTextArea, ChatButton } from './outros';
import { useState, useRef } from 'react';
// import { confirmAlert } from 'react-confirm-alert'
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'

import Api from '../../service/api';
const api = new Api();

 export default function ChatDenuncia ()
 {

 const [conversa, setChat] = useState(['']);
 const [sala ] = useState('');
  const [mensagem, setMsg] = useState('')
  const loading = useRef(null);

 const validarResposta = (resp) => {
    //console.log(resp);

    if (!resp.erro)
        return true;
    alert("erro")

    return false;
}

 const carregarMensagens = async () => {
    loading.current.continuousStart();
    const mensagens = await api.listarMensagensDENUN(sala);
    if (validarResposta(mensagem))
        setChat(mensagens);
        loading.current.complete();
}

const enviarMensagem = async (event) => {
    loading.current.continuousStart();
    if(mensagem === '')
    return alert("A caixa de texto precisa ser preenchida!");

    const resp = await api.inserirMensagemDENUN(mensagem);
    if (event.type === "keypress" && (!event.ctrlKey || event.charCode !== 13))
        return;
    if (!validarResposta(resp)) 
    
    return;
    toast.dark('Mensagem Enviada!');
    

     await carregarMensagens();
     loading.current.complete();
}
const remover = async () => {
    loading.current.continuousStart();
    const r = await api.removerMensagemDENUN();
    if (!validarResposta(r)) 
        return;

        toast.dark('Mensagem removida!');
    await carregarMensagens();
    loading.current.complete();
}

 
     return (
     <Container>
         <ToastContainer />
            <LoadingBar color="red" ref={loading} />
         <div div class="faixa1">
    
         <div class="cabecalho-inicio">

                <div class="cabecalho-img">
                    <Link to="/">
                    <img src="/assets/imagens/logo-claro.png" alt=""/>
                    </Link>
                </div>
                

                <div class="cabecalho-botoes">

                    
                     <Link to="/Denúncia">Denúncia</Link>
                     <Link to="/TipoViolencia">Tipos de violência</Link>
                     <Link to=" ">Tipos de assédio</Link>
                     <Link to="/MapaDelegacias">Mapa das Delegacia</Link>
                     <Link to="/AutoEstima">Autoestima</Link>
                     <Link to="/Chat">Chat</Link>
                     <Link to="/Cadastro">Cadastro</Link>
                     <Link to="/Login">Login</Link>
                                                   
                </div>

            </div>



         <div class="texto">Chat de denuncia</div>
         </div>  
         <div class="conteudo"/>
         <div class="chat">
             <div class="containerimg">
                 <div class="test">
                 <div class="policial1"> Policial</div>
                 <div class="user1"> <img src="/assets/imagens/pg-chatdenun-user.png" widht="100" height="100" alt=""/> </div>
                 <div class="balao1">  Olá qual é a sua denúncia </div>
            
                 </div>
                 <div class= "test3">
                 <div class="policial2"> Policial</div>
                 <div class="user2"> <img src="/assets/imagens/pg-chatdenun-user.png" widht="100" height="100" alt=""/> </div>
                 <div class="balao2"> Me mande sua localização atual</div>
                 </div>
                 
                 </div>
                 <div className="chatt">
                    {conversa.map(x =>
                        <div key={x.id_HDM_chat_denuncias}>
                            <div className="chat-message">
                            
                                <div><b>Eu</b>: </div>
                                <div> {x.ds_HDM_texto} </div>
                            </div>
                        </div>
                    )}
                    </div>
                 <div class="mensagem">

    
       <ChatTextArea value={mensagem} onChange={e => setMsg(e.target.value)} />
      <ChatButton onClick={enviarMensagem} className="btn-enviar">  Enviar </ChatButton>
      <ChatButton onClick={remover} className="btn-enviar">  Apagar Historico </ChatButton>

    
</div>    
      </div>  
      
  
 
 </Container>
 )
}