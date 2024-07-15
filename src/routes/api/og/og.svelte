<script lang="ts">
  import { website } from '$/lib/assets/config';

  export let text: string;
  export let thumb: string;
  export let tags: string[];
</script>

<div class="container">
  <div class="card">
    <img src={website.url + thumb} alt={text} height="589" width="800" />
    <div class="content">
      <p>{text}</p>

      {#if tags}
        <div>
          {#each tags as tag}
            <span>{tag}</span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  div {
    display: flex;
  }

  .container {
    justify-content: center;
    align-items: center;
    background-color: #0a0a0a;
    height: 630px;
    width: 1200px;
    padding: 20px;
  }

  .card {
    background-color: #171717;
    border-radius: 5px;
    box-shadow: 0 4px 8px #0a0a0a;
    width: 100%;
    height: 100%;
    border: 1px solid #262626;
  }

  .content {
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
  }

  img {
    border-radius: 5px 0 0 5px;
  }

  p {
    display: flex;
    justify-content: center;
    font-size: 25px;
    width: 300px;
    color: #fafafa;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #262626;
    color: #fafafa;
  }
</style>
