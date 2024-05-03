<script>

import { createEventDispatcher } from 'svelte';
import Message from './message.svelte';
import Paper from '../assets/paper.svg';

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
      <Message message={m.text} user="You"/>
      </div>
      {:else}
      <div class="left">
      <Message message={m.text} user={m.name}/>
      </div>  
      {/if}
      {/each}
    
    </div>
    
    <div class="inputChat">
    
      <input type="text" placeholder="Type here" class="mm" required/>
      <button on:click={handleClick}>
        <img src={Paper}/>
      </button>
    </div>
</div>



<style>




.container{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 2px solid black;
    background-color: #F3FCEF;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Comic Neue", bold;
    position: relative;
      }
  .header{
    width: 100%;
    height: 11%;
    font-family: 'Font2';
    font-size: 2.8rem;
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
    height: 86%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap:12px;
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
    height: 7%;
    position: relative;
    display: flex;
    justify-content: center;
    gap:6px;
    align-items: center;
    align-content: center;
    position: relative;
    padding: 9px;
    padding-left: 3px;
  }
  .inputChat input[type='text']{
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 50px;
    font-family: 'Font2';
    font-size: 1.5rem;
    text-indent: 20px;
    background-color: rgba(0,0,0,.2);
  }

  .inputChat input[type='text']:focus{
    outline: none;
    border: none;
  }
  .inputChat button{
    background: white;
    color:black;
    cursor: pointer;
    position: relative;
    font-family: 'Font2';
    border-radius: 100%;
    aspect-ratio: 1/1;
    width: 50px;
    border: none;
    margin-right: 10px;
    background-color: #00669E;

  }
  .inputChat img{
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    position: relative;
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
  @media only screen and (max-width:600px){
    .inputChat button{
      width: 50px;
    }
  .inputChat{
    gap: 0px;
    padding: 3px;
    padding-left: 0px;
  }
  }

</style>
