let mongoose = require('mongoose');

//mongoose db connection here
mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb+srv://mustafa:abc.123@cluster0.ir6ju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(err => {
        console.log("Cannot connect to the database", err);
        process.exit();
    });
