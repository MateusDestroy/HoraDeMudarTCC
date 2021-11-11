import styled from 'styled-components';

const Container = styled.div`
.body {
    margin: 0px;
  }

  a{
      color: white;
  }
  
  .faixa1{
      background-color: #445D75 ;
      height: 100%;
      display: flex;
      flex-direction: column;
  }

  .cabecalho{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }


  .menu a {
    margin: 0em .5em;
    
}

  .menu{
      display: flex;
      flex-direction: row;
      padding-right: 1em;
      padding-top: 0em;     
  }

  .cabecalho-botoes a {
    margin: 0em 0.4em;
    
}

.cabecalho-botoes{
    margin-top: 0em;
    margin-right: 1em;
    color: #FFF;
}


  .texto{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    color: #fff;
  }

.conteudo {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
   
}

.chat {
    margin-top: 40px;
    flex-direction: row;
    justify-content: center;
    background: #B2BBC2;
    width: 90%;
    height: 40em;
    border-radius: 25px;
    margin-left:6em;
}

.policial1{
    padding-top: 5em;
   
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #black;
}

.user1{
    padding-top: 1em;
    margin-left: 2em;
}

.containerbalao{
    display: flex;
    flex-direction: row;
    
}

.balao1{

    background: #fff;
    font-family: 'Roboto';
    font-size: 0.85em;
    line-height: 1.6em;  
    border-radius: 30px;
    width: 300px;
    height: auto;
    color: #black;
    padding: 20px;
    padding-top: 1em;
    position: relative;
    margin-top: 0em;
    margin-left: 2em;
}

.test{
    flex-direction: row;
    display: flex;
    margin-right: 45em;
    align-items: center;
    margin-bottom: 0em;
}

.test3 {
    flex-direction: row;
    display: flex;
    margin-right: 45em;
    align-items: center;
    margin-bottom: 0em;
    margin-top: 6em;
}

.test2 {
    flex-direction: column;
    display: flex;
    margin-right: 45em;
    align-items: center;
    margin-bottom: 0em;
   
}


.containerimg{
   display: flex;
    flex-direction: column;
    justify-content: center;
}

.policial2{
  
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #black;
}

.user2{
    padding-top: 1em;
    margin-left: 2em;
}

.balao2 {
    margin: 0 auto; 
    background: #fff;
    font-family: 'Roboto';
    font-size: 1em;
    line-height: 1.6em;  
    border-radius: 30px;
    width: 300px;
    height: auto;
    color: #black;
    padding: 15px;
    position: relative;
    margin-top: 0em;
    margin-left: 2em;

}



.searchbox{
    width: 800px;
    height: 45px;
    background-color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 7px;
    margin-left: 10em;
     margin-top: 15em;
 }

.searchbox > i {
    font-size: 20px;
    color: #978888;

}

.searchbox > input {
    flex: 1;
    height: 40px;
    border: none;
    outline: none;
    font-size: 24px;
}

.enviar{
    padding-left: 30em;
    margin-top: 0em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #000000;
}

.local{
    padding-left: 5.6em;
    margin-top: -2em;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #000000;
}

.localimg{
    margin-right: 4em;
    margin-top: 1em;
    
}

@media (max-width: 1024px) {
   
    .container, .cabecalho, .texto, .menu, .conteudo, .cabecalho-botoes{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
       
        padding: 0px;
        margin: 0px;
        width: 100%;
    }

    .cabecalho{
        padding-top: 0em;
    }

    .conteudo, .chat, .policial1, .policia2, .user1, .user2, .balao1, .balao2, .text1, .text2, .searchbox, .enviar, .local, .localimg{
        flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
           
            padding: 0px;
            margin: 0px;
            width: 100%;
        }
`;
export {Container}