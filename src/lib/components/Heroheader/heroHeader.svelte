<script>
  let { heroheaders } = $props();
</script>

<header>
  <h1>{heroheaders[0].title}</h1>
  <img src={heroheaders[0].img.url} alt="" width="100" loading="lazy" />
</header>

<style>
  header {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--heroHeader-color);
  }

  h1 {
    margin: 1rem 0;
    font-size: 1.5em;
    line-height: 1.5em;
    color: white;
    font-family: var(--title-font-regular);
    font-weight: var(--font-quicksand-regular-weight);
  }

  h1::first-letter {
    font-size: 1.5em;
    font-weight: var(--font-quicksand-bold-weight);
    font-weight: var(--font-quicksand-bold-weight);
  }

  img {
    width: 65vw;
    border-radius: 1rem;
  }

  @media (min-width: 37.5rem) and (max-width: 64rem) {
    header {
      align-items: center;
      flex-direction: row-reverse;
    }

    h1 {
      width: 50vw;
      font-size: 1.5rem;
      padding: 1rem 2rem;
    }
  }

  @media (min-width: 64rem) {
    header {
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-evenly;
    }

    img {
      width: 20vw;
      height: auto;
    }

    h1 {
      width: 36vw;
      font-size: 2rem;
    }
  }

  @media (min-width: 100rem) {
    img {
      width: 20vw;
      height: auto;
    }

    h1 {
      width: 36vw;
      font-size: 3rem;
    }
  }
</style>
