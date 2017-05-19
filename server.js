var express = require('express');

var bodyParser = require('body-parser');
//var expressSession = require('express-session');
// var config = require('./etc/config');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

// var mongoose = require('mongoose');
// //Connect to your mongo database:
// mongoose.connect(config.db, function(err) {
//     if (err) throw err;
// });

// var User = require('./models/userModel'); //used by passport

// JWT stuff
// var expressJWT = require('express-jwt');
// var ensureAuthenticated = expressJWT({ secret: config.localKey });

var app = express();

//Use body parser for
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));






// //Routes in external files
// var miscRoutes = require('./routes/miscRoutes');
// var planRoutes = require('./routes/planRoutes');
// var carRoutes = require('./routes/carRoutes');
// var optionRoutes = require('./routes/optionRoutes');
// var userRoutes = require('./routes/userRoutes');
// var photoRoutes = require('./routes/photoRoutes');
// var vendorRoutes = require('./routes/vendorRoutes');
// var partRoutes = require('./routes/partRoutes');
// var taskRoutes = require('./routes/taskRoutes');
// var workRoutes = require('./routes/workRoutes');
// var postRoutes = require('./routes/postRoutes');
// var authRoutes = require('./routes/authRoutes');
// var uploadRoutes = require('./routes/uploadRoutes');
//
//
//
// //Enable the external file routes wor:
// app.use('/api/misc', miscRoutes);
// app.use('/api/plans', planRoutes);
// app.use('/api/cars', carRoutes);
// app.use('/api/options', optionRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/photos', photoRoutes);
// app.use('/api/vendors', vendorRoutes);
// app.use('/api/parts', partRoutes);
// app.use('/api/tasks', taskRoutes);
// app.use('/api/works', workRoutes);
// app.use('/auth', authRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/uploads', uploadRoutes);






// sessions and local authentication
// app.use(expressSession({
//     secret: secret.localSecret,
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

//passport.use(User.createStrategy()); //Thanks to m-l-p there is no need to create a local strategy
// passport.serializeUser(User.serializeUser()); //also it helps here
// passport.deserializeUser(User.deserializeUser()); //and here


//Serve static files in the root directory:
app.use(express.static('.'));
//Serve the node_modules files without the need for full path:
app.use(express.static('node_modules'));

// Server errors handling
app.all('[^.]+', function(req, res) {
    res.sendFile(__dirname + "./index.html");
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});

// Start a server listener
app.listen(8000, function() {
    console.log("App: " + app.name + " is listening on 8000. ");

});
