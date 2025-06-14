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

      view-timeline-name: --revealing-image;
      view-timeline-axis: block;

      animation: linear reveal both;
      animation-timeline: --revealing-image;
      animation-range: entry 25% cover 50%;
    }

    @keyframes reveal {
      from {
        opacity: 0;
        clip-path: inset(45% 20% 45% 20%);
      }
      to {
        opacity: 1;
        clip-path: inset(0% 0% 0% 0%);
      }
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
