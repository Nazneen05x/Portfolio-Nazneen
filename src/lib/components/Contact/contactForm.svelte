<form>
  <fieldset>
    <legend>Persoonlijke Gegevens</legend>

    <label for="name">Naam:</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Typ hier je voornaam in"
      required
    />

    <label for="surname">Achternaam:</label>
    <input
      type="text"
      id="surname"
      name="surname"
      placeholder="Typ hier je achternaam in"
      required
    />

    <label for="email">E-mail:</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Typ hier je e-mailadres in"
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
      required
    ></textarea>
  </fieldset>

  <button type="submit">Verstuur</button>
</form>

<style>
  form {
    max-width: 31rem;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  fieldset {
    border: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  legend {
    display: none;
  }

  label {
    font-weight: 600;
    font-size: 1rem;
  }

  input,
  textarea {
    padding: 0.3rem 0.4rem;
    border: 0.1rem solid #bbb;
    border-radius: 0.7rem;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.2s ease;
  }

  input:focus,
  textarea:focus {
    border-color: blue;
    outline: none;
  }

  input:valid {
    border-color: green;
  }

  input:invalid:not(:placeholder-shown),
  textarea:invalid:not(:placeholder-shown) {
    border-color: red;
  }

  button {
    align-self: flex-start;
    padding: 0.3rem 0.7rem;
    background-color: #222;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #555;
  }
</style>
