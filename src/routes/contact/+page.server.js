/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    // Bouw een JSON payload
    const payload = {
      access_key: "77bccb94-8fad-41d7-bf60-a58f03c9179d",
      name: formData.get("name"),
      surname: formData.get("surname"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        return {
          type: "success",
          data: { message: "Bericht succesvol verzonden!" },
        };
      } else {
        return {
          type: "failure",
          data: { message: "Verzenden mislukt." },
        };
      }
    } catch (error) {
      console.error("Fout bij Web3Forms:", error);
      return {
        type: "failure",
        data: { message: "Netwerkfout bij verzenden." },
      };
    }
  },
};
