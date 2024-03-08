import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties

export const GET = async (request) => {
  try {
    await connectDB();
    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
};

// import connectDB from "@/config/database";
// import Property from "@/models/Property";

// // GET /api/properties
// export const GET = async (request) => {
//   try {
//     // Connect to the database
//     await connectDB();

//     // Retrieve properties from the database
//     const properties = await Property.find({});

//     // Return JSON response with properties
//     return new Response(JSON.stringify({ success: true, properties }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error fetching properties:", error);

//     // Return error response
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// };
