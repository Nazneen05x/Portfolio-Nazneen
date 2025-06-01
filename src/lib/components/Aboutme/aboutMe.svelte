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
    gap: 2rem;
    display: flex;
    padding: 4rem 2rem;
    flex-direction: column;
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
    font-size: 1rem;
    margin-top: 0.5rem;
    line-break: anywhere;
    font-family: var(--title-font-regular-montserrat);
  }

  img {
    width: 60vw;
    height: auto;
    object-fit: cover;
    border-radius: 1rem;
  }

  @media (min-width: 37.5rem) and (max-width: 64rem) {
    section {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .about-text {
      max-width: 26vw;
    }

    img {
      width: 17rem;
    }
  }

  @media (min-width: 64rem) {
    section {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .about-text {
      max-width: 26vw;
    }

    img {
      width: 30vw;
    }
  }

  @media (min-width: 100rem) {
    h2 {
      font-size: 4rem;
    }

    h2::first-letter {
      font-size: 5rem;
    }

    p {
      font-size: 2.5rem;
    }
  }
</style>
