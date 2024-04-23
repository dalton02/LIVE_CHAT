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
    ShareCariri
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
      <input type="submit" value="L" on:click={handleClick}/>
    
    </div>
</div>



<style>




.container{
    width: 500px;
    height: 600px;
    border: 2px solid black;
    border-radius: 5px;
    background-color: #3C4856;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-family: "Comic Neue", bold;
    
  }
  .header{
    width: 100%;
    height: 10%;
    font-size: 1.5rem;
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
    background-color: black;
    height: 12%;
    display: flex;
    justify-content: flex-start;
  }
  .inputChat input[type='text']{
    width: 80%;
    height: 100%;
    border: none;
  }
  .inputChat input[type='submit']{
    background: white;
    color:black;
    cursor: pointer;
    width: 20%;
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
