<script>
  let { heroheaders } = $props();
</script>

<header>
  <h1>{heroheaders[0].title}</h1>
  <img src={heroheaders[0].img.url} alt="" width="300" />
</header>
