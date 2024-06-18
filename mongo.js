const mongoose = require("mongoose");

var config = require("./config.json");
console.log(config);

const url = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.3apkp29.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.set("strictQuery", false);
mongoose.connect(url).then(() => {
  const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  });

  const Note = mongoose.model("Note", noteSchema);

  const note = new Note({
    content: "HTML is x",
    important: true,
  });

  note.save().then((result) => {
    console.log("note saved!");
  });

  Note.find({}).then((result) => {
    result.forEach((note) => {
      console.log(note);
    });
    mongoose.connection.close();
  });
});

/* Only important notes

Note.find({ important: true }).then(result => {
  // ...
})
  */
