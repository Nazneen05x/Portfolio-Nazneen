/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const surname = formData.get("surname");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Ontvangen data:", { name, surname, email, message });

    return {
      message: "Formulier succesvol ontvangen!",
    };
  },
};
