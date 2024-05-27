export async function main(twenty_api_key: string, data, contact_id: string) {
  if (Object.keys(data).length === 0) {
    return {}
  }
  const url = `https://api.twenty.com/rest/people/${contact_id}`;
  const options = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${twenty_api_key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch(url, options);
  return await response.json()
}