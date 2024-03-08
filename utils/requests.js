const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties from the API

async function fetchProperties() {
  try {
    // Handle the case where the API domain is not set
    if (!apiDomain) {
      console.error("API domain is not set");
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

// Fetch single property from the API
async function fetchProperty(id) {
  try {
    // Handle the case where the API domain is not set
    if (!apiDomain) {
      console.error("API domain is not set");
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch property");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { fetchProperties };

export { fetchProperty };
