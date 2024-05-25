// Fetch-only script, no imports allowed but benefits from a dedicated highly efficient runtime

export async function main(twenty_api_key: string) {
  const mutation = `
    mutation CreateOneFieldMetadataItem($input: CreateOneFieldMetadataInput!) {
      createOneField(input: $input) {
        id
        type
      }
    }
  `;

  let variables = {
    input: {
      field: {
        description: null,
        icon: "IconUsers",
        label: "Is Email Valid",
        name: "isEmailValid",
        objectMetadataId: "e92cc3f7-959f-4389-9348-b41a9a8b07ef",
        type: "boolean"
      }
    }
  };


  let response = await fetch('https://api.twenty.com/metadata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${twenty_api_key}`,
    },
    body: JSON.stringify({
      query: mutation,
      variables: variables
    })
  });


  variables = {
    input: {
      field: {
        description: null,
        icon: "IconUsers",
        label: "Is Email Catch All",
        name: "isEmailCatchAll",
        objectMetadataId: "e92cc3f7-959f-4389-9348-b41a9a8b07ef",
        type: "BOOLEAN"
      }
    }
  };


  response = await fetch('https://api.twenty.com/metadata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${twenty_api_key}`,
    },
    body: JSON.stringify({
      query: mutation,
      variables: variables
    })
  });

  variables = {
    input: {
      field: {
        description: null,
        icon: "IconUsers",
        label: "Campaign Name",
        name: "campaignName",
        objectMetadataId: "e92cc3f7-959f-4389-9348-b41a9a8b07ef",
        type: "BOOLEAN"
      }
    }
  };


  response = await fetch('https://api.twenty.com/metadata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${twenty_api_key}`,
    },
    body: JSON.stringify({
      query: mutation,
      variables: variables
    })
  });

  variables = {
    input: {
      field: {
        description: null,
        icon: "IconUsers",
        label: "Is Email Scheduled",
        name: "isEmailScheduled",
        objectMetadataId: "e92cc3f7-959f-4389-9348-b41a9a8b07ef",
        type: "TEXT"
      }
    }
  };


  response = await fetch('https://api.twenty.com/metadata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${twenty_api_key}`,
    },
    body: JSON.stringify({
      query: mutation,
      variables: variables
    })
  });

  return await response.json();
}
