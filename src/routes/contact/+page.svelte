<script>
  import { enhance } from "$app/forms";
  export let form;

  let name = "";
  let surname = "";
  let email = "";
  let message = "";

  function handleEnhance({ result }) {
    if (result && result.type === "success") {
      name = "";
      surname = "";
      email = "";
      message = "";
    }
  }
</script>

<form method="POST" action="/contact" use:enhance={handleEnhance}>
  <input name="name" placeholder="Naam" bind:value={name} required />
  <input
    name="surname"
    placeholder="Achternaam"
    bind:value={surname}
    required
  />
  <input
    type="email"
    name="email"
    placeholder="E-mail"
    bind:value={email}
    required
  />
  <textarea name="message" placeholder="Bericht" bind:value={message} required
  ></textarea>
  <button type="submit">Verstuur</button>
</form>

{#if form?.type === "success"}
  <p>✅ {form.data.message}</p>
{:else if form?.type === "failure"}
  <p>❌ {form.data.message}</p>
{/if}
