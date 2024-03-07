export const GET = async (request) => {
  try {
    const response = await fetch(`${process.env.API_URL}/properties`);
    const properties = await response.json();
    return {
      status: 200,
      body: {
        properties,
      },
    };
  } catch (error) {
    return {
      status: 500,
      body: {
        error: "An error occurred while fetching properties",
      },
    };
  }
};