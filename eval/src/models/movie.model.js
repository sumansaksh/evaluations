const { Mongoose } = require("mongoose")

const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    name: { type: String, required: true },
    actor: [{ type: String, required: true}],
    language: [{ type: String, required: true }],
    poster_url: { type: String, required: false },
    directors: [{ type: String, required: true}]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("movie", movieSchema);