export async function main(twenty: Object) {
  const query = `query FindManyCampaigns($filter: CampaignFilterInput) {
  campaigns(first: 1000, filter: $filter) {
    edges {
      node {
        id
        campaignStatus
        people {
          edges {
            node {
              id
              campaignStatus
            }
          }
        }
      }
    }
  }
}`;

  const variables = {
    filter: {
      campaignStatus: {
        in: ['DRAFTED'],
      },
    },
    personFilter: {
      campaignStatus: {
        in: ['EMAIL_SCHEDULED'],
      },
    },
  };

  const response = await fetch(`${twenty.twenty_base_url}/graphql`, {
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

  return await response.json();
}
