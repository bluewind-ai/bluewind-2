export async function main(twenty_api_key: string) {
  const query = `
    mutation CreateOneObjectMetadataItem($input: CreateOneObjectInput!) {
      createOneObject(input: $input) {
        id
        dataSourceId
      }
    }
  `;

  const variables = {
    "input": {
      "object": {
        "description": "",
        "icon": "IconAccessible",
        "labelPlural": "CampaignsPeople",
        "labelSingular": "CampaignPerson",
        "nameSingular": "campaignPerson",
        "namePlural": "campaignsPeople"
      }
    }
  };

  try {
    const response = await fetch('https://api.twenty.com/metadata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${twenty_api_key}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      const data = await response.json();

      throw new Error(`HTTP error! status: ${response.status} error: ${JSON.stringify(data.errors, null, 2)}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}