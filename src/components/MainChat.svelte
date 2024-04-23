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
    Live Cariri
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
    width: 500px;
    height: 600px;
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
    font-family: 'Font1';
    font-size: 4rem;
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
    border-top: 2px solid black;
    border-bottom:2px solid black;
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
    background-color: black;
    height: 12%;
    display: flex;
    justify-content: flex-start;
  }
  .inputChat input[type='text']{
    width: 80%;
    height: 100%;
    border: none;
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
    width: 20%;
    font-family: 'Font3';
    font-size: 2rem;
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
