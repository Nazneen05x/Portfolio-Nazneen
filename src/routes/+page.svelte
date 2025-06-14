
<script>
  import Footer from "$lib/components/Footer/footer.svelte";
  import {
    Heroheader,
    ContactSection,
    Marquee,
    AboutMe,
    Projects,
  } from "$lib/index.js";

  let { data } = $props();
</script>

<Heroheader heroheaders={data.heroheaders} />

<Marquee />

<AboutMe aboutMes={data.aboutMes} />

<Projects Projects={data.projects} />

<ContactSection contacts={data.contacts} />

<Footer />

