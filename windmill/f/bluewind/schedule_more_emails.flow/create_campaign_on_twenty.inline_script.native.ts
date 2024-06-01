export async function main(twenty_api_key: string, campaign_name: string) {
  const url = 'https://api.twenty.com/rest/campaigns';
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${twenty_api_key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: campaign_name
    })
  };

  const response = await fetch(url, options);
  const data = await response.json()
  return data.data.createCampaign
}