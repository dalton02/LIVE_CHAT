<script>

import { createEventDispatcher } from 'svelte';
import Message from './message.svelte';

export let mensagens;
export let id;
const dispatch = createEventDispatcher();

function handleClick() {
      dispatch('send-message');
}
</script>


<div class="container">

    <div class="header">
    LIVE CHAT
    </div>
    <div class="mainChat">
      {#each mensagens as m}
      {#if m.id==id}
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
      <input type="submit" value="SEND" on:click={handleClick}/>
    
    </div>
</div>



<style>




.container{
    width: 650px;
    height: 550px;
    border: 2px solid black;
    border-radius: 30px;
    background-color: #F3FCEF;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-family: "Comic Neue", bold;
    
  }
  .header{
    width: 100%;
    height: 12%;
    font-family: 'Font2';
    font-size: 3rem;
    background-color: #005186;
    color: white;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .mainChat{
    width: 99.9%;
    height: 80%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap:10px;
  }
  
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  .mainChat{
    scrollbar-width: auto;
    scrollbar-color: black #ffffff;
  }

  /* Chrome, Edge, and Safari */
  .mainChat::-webkit-scrollbar {
    width: 16px;
  }

  .mainChat::-webkit-scrollbar-track {
    background: #ffffff;
  }

  .mainChat::-webkit-scrollbar-thumb {
    background-color: #8f54a0;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  .mainChat::-webkit-scrollbar-button:single-button {
    color:white;
    width: 0;
    background:white;
    border:none;
  }
  .inputChat{
    width: 100%;
    height: 12%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
  }
  .inputChat input[type='text']{
    width: 80%;
    height: 50%;
    border: none;
    border-radius: 50px;
    font-family: 'Font2';
    font-size: 1.5rem;
  }

  .inputChat input[type='text']:focus{
    outline: none;
    border: none;
  }
  .inputChat input[type='submit']{
    background: white;
    color:black;
    cursor: pointer;
    width: 15%;
    font-family: 'Font2';
    font-size: 1.3rem;
    font-weight: 900;
    padding: 10px;
    border-radius: 50px;
    border: none;
    background-color: #00669E;
  }
  .right{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 5px;
  }
  .left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 5px;
  }


</style>
