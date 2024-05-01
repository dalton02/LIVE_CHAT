<script>

  export let user;
  export let message;
  
  let data = new Date();
  let horas = data.getHours();
  const minutos = data.getMinutes();
  const periodo = horas >= 12 ? 'P.M' : 'A.M';
    
  horas = horas % 12 || 12;
  
  // Adicionar um zero à esquerda se os minutos forem menores que 10
  const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;

  data = horas + ':' + minutosFormatados + ' ' + periodo;

</script>

<div class="message">

<div class="header">
{user}
</div>

<div class="body">
{message}
</div>
<div class="data">
{data}
</div>


</div>

<style>
  .message{
    min-width: 30%;
    max-width: 60%;
    height: auto;
    border-radius: 40px;
    background: #00669E;
    color:white;
    padding: 6px;
    font-family: 'Font2';
    display:flex;
    flex-direction: column;
    position: relative;
    margin-top: 5px;
    gap:3px;
  }
  .header{
    font-size:1.1rem;
    display: flex;
    justify-content: flex-start;
    text-indent: 20px;
    color:white;
  }
  .body{
    width: 90%;
    font-size: 1rem;
    display: flex;
    justify-content: flex-start;
    margin-left:20px;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;
  }
  .data{
    position:absolute;
    color: white;
    top: 8px;
    right: 25px;
    font-size: .8rem;
  }

</style>
