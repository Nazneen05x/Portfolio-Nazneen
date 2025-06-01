<script>
  import { Heroheader, ContactSection, Marquee, AboutMe } from "$lib/index.js";
  let { data } = $props();
</script>

<Heroheader heroheaders={data.heroheaders} />
<Marquee />
<AboutMe aboutMes={data.aboutMes} />
