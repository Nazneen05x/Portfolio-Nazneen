<script>
  import { Heroheader, ContactSection } from "$lib/index.js";
  let { data } = $props();
</script>

<Heroheader heroheaders={data.heroheaders} />
<ContactSection contacts={data.contacts} />
