export async function main(twenty: Twenty) {
  const query = `query FindManyPeople {
  people(first: 1000) {
    edges {
      node {
        id
      }
    }
  }
}`;

  let variables = {};

  let response = await fetch(`${twenty.twenty_base_url}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${twenty.twenty_api_key}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const data = await response.json();
  return data.data.people.edges.map((obj) => obj.node.id);
}
