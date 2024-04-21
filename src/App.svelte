<script>
  import Message from './components/message.svelte';
  import {io} from 'socket.io-client';

  
  const ENDPOINT = 'http://localhost:4000';
  const SOCKET = io(ENDPOINT);
  
  SOCKET.on('connect',()=>{
    console.log("You are connect in: ",SOCKET.id);
    SOCKET.id = SOCKET.id;
  });

  function sendMessage(){

    const mensagem = {
      text: document.querySelector('.mm').value,
      name: localStorage.getItem('user'),
      room: room,
    }
    if(mensagem.text.length < 2){
      alert('Caracteres insuficientes');
      return;
    }

    SOCKET.emit("send-message", mensagem);
  }


  SOCKET.on("recive-message",mensagem=>{
    mensagens = [...mensagens,mensagem];
    console.log(mensagem);
  });

  let mensagens = [];
  let room = "";

  function entryStart(){
    const container = document.querySelectorAll('.container')[0];
    const it = document.querySelectorAll('.entry')[0];
    const input = document.querySelectorAll('.entryUser')[0];
    console.log(input);
    if(input.value.length<4){
      alert('Seu usuario precisa de pelo menos 4 caracteres');
      return;
    }
    localStorage.setItem('user',input.value);
    it.style.display = "none";
    container.style.display = "flex";

  }

</script>

<main>


<div class="entry">

  <div class="entryHeader">
  Seu usuário
  </div>
  
  <div class="inputEntry">
  <input type="text" class="entryUser" required/>
  <input type="submit" value="OK" on:click={entryStart}/>
  </div>

</div>


<div class="container">

<div class="header">
CHAT API
</div>
<div class="mainChat">
  {#each mensagens as m}
  {#if m.name==localStorage.getItem('user')}
  <div class="right">
  <Message message={m.text} user="Você"/>
  </div>
  {:else}
  <div class="left">
  <Message message={m.text} user={m.name}/>
  </div>  
  {/if}
  {/each}

</div>

<div class="inputChat">

  <input type="text" class="mm" required/>
  <input type="submit" value="Enviar mensagem" on:click={sendMessage}/>

</div>

</div>

</main>

<style>

  .entry{
    width: 400px;
    height: 200px;
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap:30px;
    background-color: white;
    padding: 10px;
    box-shadow: 10px 10px 0px 5px black;
    font-family: "Comic Neue", bold;
  }
  .entryHeader{
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-weight: 700;
    text-align: left;
    height: 10%;
  }
  .inputEntry{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 10px;
  }
  .inputEntry input[type='text']{
    width: 80%;
    font-size: 1.4rem;
    border-radius: 10px;
    border: 2px solid black;
  }
  .inputEntry input[type='submit']{
    font-size: 1rem;
    width: 100px;
    border-radius: 10px;
    border: 2px solid black;
    color: black;
    padding: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  



  .container{
    width: 700px;
    height: 500px;
    border: 2px solid black;
    border-radius: 50px;
    background-color: #e5491d;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    display: none;
    font-family: "Comic Neue", bold;
    
  }
  .header{
    width: 100%;
    height: 10%;
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
  }
  .mainChat{
    width: 97%;
    height: 80%;
    overflow-y: scroll;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap:10px;
  }
  .mainChat::-webkit-scrollbar{
    width: 5px;
  }
  .inputChat{
    width: 100%;

  }
  .inputChat input[type='text']{
    width: 70%;
    border-radius: 10px;
    border: none;
  }
  .inputChat input[type='submit']{
    border-radius: 10px;
    border: 2px solid black;
    background: white;
    cursor: pointer;
  }
  .right{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

</style>
