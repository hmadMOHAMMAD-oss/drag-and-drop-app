const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://project:A0LEKVbMRJEGUvRv@to-do-list.hwje63y.mongodb.net/")
    .then(() => console.log("Database connected!"))
    .catch(err => console.log("MongoDB Errors are the following " + err));