<script>
  let { Projects } = $props();
</script>

<section id="projects">
  <div class="projects-text">
    <h2>{Projects[0].title}</h2>
    <p>{Projects[0].description}</p>
  </div>
</section>

<style>
  section {
    align-items: center;
    background-color: var(--sectioncream-color);
  }

  .projects-text {
    max-width: 26vw;
  }
</style>
