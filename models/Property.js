import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Owner is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    description: String, // No need to explicitly specify type: String here

    location: {
      street: String, // Simplified for clarity, you can add validation if needed
      city: String,
      state: String,
      zipcode: String,
    },
    beds: {
      type: Number,
      required: [true, "Beds is required"],
    },
    baths: {
      type: Number,
      required: [true, "Baths is required"],
    },
    square_feet: {
      type: Number,
      required: [true, "Square feet is required"],
    },
    amenities: [String], // Simplified array of strings

    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },

    seller_info: {
      name: String,
      email: String,
      phone: String,
    },
    images: [String], // Array of image URLs
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Ensuring the model is not recompiled if it was already compiled
const Property = models.Property || model("Property", PropertySchema);

export default Property;
