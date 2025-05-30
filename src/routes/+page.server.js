import { PUBLIC_HYGRAPH_URL } from "$env/static/public";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const query = `
    query MyQuery {
      heroheaders {
        createdAt
        id
        title
        img {
          createdAt
          url
        }
      }
        
      contacts {
        createdAt
        id
        title
        description
      }
    }
  `;

  const res = await fetch(PUBLIC_HYGRAPH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await res.json();

  return {
    heroheaders: data.heroheaders,
    contacts: data.contacts,
  };
}
