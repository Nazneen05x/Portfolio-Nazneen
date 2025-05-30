<script>
  import { Heroheader, ContactSection, Marquee } from "$lib/index.js";
  let { data } = $props();
</script>

<Heroheader heroheaders={data.heroheaders} />
<Marquee />
<!-- <ContactSection contacts={data.contacts} /> -->
