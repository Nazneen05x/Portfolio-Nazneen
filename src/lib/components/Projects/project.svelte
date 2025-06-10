<script>
  let { Projects } = $props();
</script>

<section>
  <div class="projects-text">
    <h2>{Projects[0].title}</h2>
    <p>{Projects[0].description}</p>
  </div>
</section>

<style>
  section {
    gap: 2rem;
    display: flex;
    padding: 4rem 2rem;
    flex-direction: column;
    align-items: center;
    background-color: var(--sectioncream-color);
  }

  h2 {
    font-size: 2rem;
    font-family: var(--title-font-regular);
    font-weight: var(--font-quicksand-regular-weight);
  }

  h2::first-letter {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: var(--title-font-bold);
    font-weight: var(--font-quicksand-bold-weight);
  }

  p {
    font-size: 1rem;
    margin-top: 0.5rem;
    line-break: anywhere;
    font-family: var(--title-font-regular-montserrat);
  }

  .projects-text {
    max-width: 26vw;
  }
</style>
