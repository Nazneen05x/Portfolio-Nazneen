<script>
  let { heroheaders } = $props();
</script>

<header>
  <nav>
    <ul id="main-menu" role="menubar">
      <li role="menuitem"><a href="#about">about</a></li>
      <li role="menuitem"><a href="#projects">projects</a></li>
      <li role="menuitem"><a href="/contact">Contact</a></li>
    </ul>
  </nav>

  <h1>{heroheaders[0].title}</h1>

  <img
    src={heroheaders[0].img.url}
    alt=""
    height="100"
    width="100"
    loading="lazy"
  />
</header>

<style>
  header {
    overflow: hidden;
    position: relative;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--heroHeader-color);
  }

  nav {
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 1000;
  }

  #main-menu {
    list-style: none;
    display: flex;
    font-size: 1.2rem;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  #main-menu li a {
    color: white;
    text-decoration: none;
    font-family: var(--title-font-regular-montserrat);
    text-transform: uppercase;
    transition: color 0.3s ease;
  }

  #main-menu li a:hover,
  #main-menu li a:focus {
    color: var(--main-color-beige);
    outline: none;
  }

  h1 {
    margin: 2rem 0;
    font-size: 1.5em;
    line-height: 1.5em;
    color: white;
    font-family: var(--title-font-regular);
    font-weight: var(--font-quicksand-regular-weight);
  }

  h1::first-letter {
    font-size: 1.5em;
    font-family: var(--title-font-bold);
    font-weight: var(--font-quicksand-bold-weight);
  }

  img {
    width: 60vw;
    height: auto;
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

    img {
      width: 30vw;
    }
  }

  @media (min-width: 64rem) {
    header {
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-evenly;
    }

    img {
      width: 18rem;
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
