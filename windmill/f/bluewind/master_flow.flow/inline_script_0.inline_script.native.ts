export async function main() {
  const response = await fetch(`${BASE_INTERNAL_URL}/api/w/${WM_WORKSPACE}/resources/get_value_interpolated/u/${WM_USERNAME}/twenty`, {
    headers: { Authorization: `Bearer ${WM_TOKEN}` }
  });

  const responseClone = response.clone();

  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return { error_message: await responseClone.text() };
  }
}