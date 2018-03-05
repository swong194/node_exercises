var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date }
});

AuthorSchema.virtual("name").get(() => {
  return this.family_name + ", " + this.first_name;
});

AuthorSchema.virtual("url").get(() => {
  return "/api/author" + this._id;
});

module.exports = mongoose.model("Author", AuthorSchema);
