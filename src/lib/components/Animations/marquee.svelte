<section>
  <ul class="marquee" role="marquee">
    <li>html</li>
    <li>css</li>
    <li>javaScript</li>
    <li>svelte (sveltekit)</li>
    <li>hygraph</li>
    <li>node js</li>
    <li>accessibility</li>
    <li>responsive websites</li>
    <li>progressive enhancement</li>
  </ul>
</section>

<style>
  section {
    padding: 1rem;
    background-color: var(--sectioncream-color);
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

  ul {
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

  .marquee li {
    padding: 1rem;
    color: black;
    font-size: 1.5rem;
    display: inline-block;
    text-transform: uppercase;
    font-family: var(--title-font-regular);
    font-weight: var(--font-quicksand-regular-weight);
  }

  .marquee li::first-letter {
    color: black;
    font-family: var(--title-font-bold);
    font-weight: var(--font-quicksand-bold-weight);
  }
</style>
