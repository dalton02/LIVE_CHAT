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
    width:280px;
    height: auto;
    border-radius: 40px;
    background: #00669E;
    color:white;
    padding: 6px;
    font-family: 'Font2';
    overflow: hidden;
    display:flex;
    flex-direction: column;
    position: relative;
    margin-top: 5px;
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
</style>
