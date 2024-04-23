<script>
  import MainChat from './components/MainChat.svelte';
    import { onMount } from 'svelte';
  import {io} from 'socket.io-client';
 
  
  const ENDPOINT = 'https://api-chat-kh2w.onrender.com';
  const SOCKET = io(ENDPOINT, {
  withCredentials: true,
  });
  console.log("teste");
  SOCKET.on('connect',()=>{
    console.log("You are connect in: ",SOCKET.id);
    SOCKET.id = SOCKET.id;
  });

  function sendMessage(){

    const mensagem = {
      text: document.querySelector('.mm').value,
      name: localStorage.getItem('user'),
      room: room,
      id: SOCKET.id,
    }
    if(mensagem.text.length < 2){
      alert('Caracteres insuficientes');
      return;
    }

    SOCKET.emit("send-message", mensagem);

    const x = document.querySelectorAll('.mainChat')[0];
    x.scrollTo(0, x.scrollHeight);
  }


  SOCKET.on("recive-message",mensagem=>{
    mensagens = [...mensagens,mensagem];
    const x = document.querySelectorAll('.mainChat')[0];  
    x.scrollTo(0, x.scrollHeight);
  
  });

  let mensagens = [];
  let room = "";
  let chatOn=0;
  function entryStart(){
    chatOn=1;
    const container = document.querySelectorAll('.container')[0];
    const it = document.querySelectorAll('.entry')[0];
    const input = document.querySelectorAll('.entryUser')[0];
    if(input.value.length<4){
      alert('Seu usuario precisa de pelo menos 4 caracteres');
      return;
    }
    localStorage.setItem('user',input.value);
    it.style.display = "none";
    console.log(chatOn);
  }
  onMount(() => {
        // Se chatOn mudar, imprima o novo valor no console
        $: console.log('chatOn mudou para:', chatOn);
    });
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
{#if chatOn>0}
  <MainChat mensagens={mensagens} id={SOCKET.id} on:send-message={sendMessage}/>
   {/if}
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

</style>
