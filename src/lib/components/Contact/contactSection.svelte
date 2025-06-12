<script>
  let { contacts } = $props();
</script>

<section>
  <h2>{contacts[0].title}</h2>

  <div class="connect-container">
    <p>{contacts[0].description}</p>
    <button>Let’s connect</button>
  </div>
</section>

<style>
  section {
    gap: 2rem;
    display: flex;
    padding: 4rem 2rem;
    align-items: center;
    flex-direction: column;
    background-color: var(--sectionSand-color);
  }

  h2 {
    font-size: 2rem;
    max-width: 25rem;
  }

  h2::first-letter {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: var(--title-font-bold);
    font-weight: var(--font-quicksand-bold-weight);
  }

  h2,
  .connect-container {
    font-family: var(--title-font-regular);
    font-weight: var(--font-quicksand-regular-weight);
  }

  .connect-container {
    gap: 0.7rem;
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
  }

  button {
    border-radius: 3rem;
    width: 7rem;
    height: 2rem;
    border: none;
    cursor: pointer;
    color: white;
    background-color: var(--connectButton-color);
  }

  button:hover {
    background-color: var(--connectButton-hover);
  }
</style>
