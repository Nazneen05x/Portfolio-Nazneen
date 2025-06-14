<script>
  import { goto } from "$app/navigation";
  import { enhance } from "$app/forms";
  export let form;

  let name = "";
  let surname = "";
  let email = "";
  let message = "";

  let isLoading = false;

  async function handleEnhance({ result, update }) {
    if (!update) return;
    isLoading = true;
    await update;
    isLoading = false;

    if (result && result.type === "success") {
      name = "";
      surname = "";
      email = "";
      message = "";
    }
  }
</script>

<button on:click={() => goto("/")}>back home</button>

<form method="POST" action="/contact" use:enhance={handleEnhance}>
  <fieldset>
    <legend>Persoonlijke Gegevens</legend>

    <label for="name">Naam:</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Typ hier je voornaam in"
      bind:value={name}
      required
    />

    <label for="surname">Achternaam:</label>
    <input
      type="text"
      id="surname"
      name="surname"
      placeholder="Typ hier je achternaam in"
      bind:value={surname}
      required
    />

    <label for="email">E-mail:</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Typ hier je e-mailadres in"
      bind:value={email}
      required
    />
  </fieldset>

  <fieldset>
    <legend>Bericht</legend>

    <label for="message">Bericht:</label>
    <textarea
      id="message"
      name="message"
      placeholder="Typ hier je bericht in"
      rows="10"
      bind:value={message}
      required
    ></textarea>
  </fieldset>

  <button type="submit" disabled={isLoading}>
    {#if isLoading}
      <span class="spinner"></span> Versturen...
    {:else}
      Verstuur
    {/if}
  </button>

  {#if form?.type === "success"}
    <p>✅ {form.data.message}</p>
  {:else if form?.type === "failure"}
    <p>❌ {form.data.message}</p>
  {/if}
</form>

<style>
  form {
    gap: 1.5rem;
    display: flex;
    margin: 2rem auto;
    max-width: 31rem;
    flex-direction: column;
  }

  fieldset {
    gap: 1rem;
    padding: 0;
    border: none;
    display: flex;
    flex-direction: column;
  }

  legend {
    display: none;
  }

  label {
    font-size: 1rem;
    font-weight: 600;
  }

  input,
  textarea {
    font-size: 1rem;
    font-family: inherit;
    border-radius: 0.7rem;
    padding: 0.3rem 0.4rem;
    border: 0.1rem solid #bbb;
    transition: border-color 0.2s ease;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: blue;
  }

  input:valid {
    border-color: green;
  }

  input:invalid:not(:placeholder-shown),
  textarea:invalid:not(:placeholder-shown) {
    border-color: red;
  }

  button {
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    align-self: flex-start;
    padding: 0.3rem 0.7rem;
    border-radius: 0.375rem;
    background-color: #222;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #555;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  button:hover:enabled {
    background-color: #555;
  }

  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top-color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
    margin-right: 8px;
    display: inline-block;
    vertical-align: middle;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
