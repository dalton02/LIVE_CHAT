<script>

  export let user;
  export let message;

</script>

<div class="message">

<div class="header">
{user}
</div>

<div class="body">
{message}
</div>


</div>

<style>
  .message{
    width: 400px;
    height: auto;
    border: 2px solid black;
    border-radius: 20px;
    background: white;
    padding: 10px;
  }
  .header{
    font-size:.8rem;
    display: flex;
    justify-content: flex-start;
    text-indent: 20px;
  }
  .body{
    font-size: 1rem;
    display: flex;
    justify-content: flex-start;
    text-indent: 20px;
    text-align: left;
    word-break: no-break;
  }
</style>
