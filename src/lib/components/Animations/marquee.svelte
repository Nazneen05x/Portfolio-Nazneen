<section class="marquee-wrapper">
  <div class="marquee" role="marquee">
    <span>html</span>
    <span>css</span>
    <span>javaScript</span>
    <span>svelte (sveltekit)</span>
    <span>hygraph</span>
    <span>node js</span>
    <span>accessibility</span>
    <span>responsive websites</span>
    <span>progressive enhancement</span>
  </div>
</section>

<style>
  section {
    background-color: var(--sectioncream-color);
  }

  .marquee-wrapper {
    overflow: hidden;
    position: relative;
    width: 100%;
    mask-image: linear-gradient(
      to right,
      transparent,
      black 10%,
      black 90%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 10%,
      black 90%,
      transparent
    );
  }

  .marquee {
    display: flex;
    white-space: nowrap;
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee {
      animation: none;
      transform: translateX(0);
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    .marquee {
      animation: scroll 40s linear infinite;
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .marquee span {
    padding: 1rem;
    color: black;
    font-size: 1.5rem;
    display: inline-block;
    text-transform: uppercase;
    font-family: var(--title-font-regular);
    font-weight: var(--font-quicksand-regular-weight);
  }

  .marquee span::first-letter {
    color: black;
    font-size: 2rem;
    font-family: var(--title-font-bold);
    font-weight: var(--font-quicksand-bold-weight);
  }
</style>
