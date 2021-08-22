const express = require("express");
var notesRouter = express.Router();
const mongoose = require("mongoose");
const Note = require("../../db/models/note.model");


// Get All Notes 
notesRouter.get("/", (req, res) => {
  Note.find({}, (err, notes) => {
    if (err) return console.error(err);

    res.json({
      notes,
    });
  });

  // {text, link, tasks, dueDate}
  // Note.find(function (err, kittens) {
  //     if (err) return console.error(err);
  //     console.log(kittens);
  //   })
});


/*
* Add a new Note
*/
notesRouter.post("/", (req, res) => {
    console.log(req.body);
    const newNote = new Note(req.body);
    newNote.save().then((savedNote) => {
        res.json({
            note:savedNote,
        });
    });
//   res.json({
//     reply: "Note created",
//   });
});

/*
* Get a Note by Id
*/
notesRouter.get("/:id", (req, res) => {
    res.json({
      reply: "Note by id success",
    });
  });

/*
* Delete a Note by Id
*/
  notesRouter.delete("/:id", (req, res) => {
    res.json({
      reply: "Note deleted",
    });
  });



module.exports = {
  notesRouter,
};
