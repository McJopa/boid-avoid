<script lang="ts">
  import { onMount } from "svelte";
  import { createSketch } from "./boids/main";

  const parentId = 'p5-sketch'
  onMount(() => {
    createSketch(parentId)
  })
  
</script>

<main>
  <div id={parentId}>
  </div>
</main>
