<script>
  let { aboutMes } = $props();
</script>

<section>
  <div class="about-text">
    <h2>{aboutMes[0].title}</h2>
    <p>{aboutMes[0].description}</p>
  </div>

  <img
    src={aboutMes[0].img.url}
    alt=""
    height="100"
    width="100"
    loading="lazy"
  />
</section>

<style>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    gap: 2rem;
    background-color: var(--sectionSand-color);
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
    font-size: 1.2rem;

    font-family: var(--title-font-regular-montserrat);
    font-weight: var(--font-quicksand-regular-weight);
  }

  .about-text {
    max-width: 36vw;
  }

  img {
    max-width: 28vw;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 1rem;
  }
</style>
