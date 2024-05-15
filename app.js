// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// //krishna fetching db
// app.post('/submit-form', async (req, res, next) => {
//   try {
//     const { student_name, student_contact } = req.body;
//     const student = new Student({ student_name, student_contact });
//     await student.save();
//     res.send('Data saved successfully!');
//   } catch (error) {
//     next(error);
//   }
// });


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

// //krishna mongodb

// const mongoose = require('mongoose');

// // Define schema
// const studentSchema = new mongoose.Schema({
//   student_name: String,
//   student_contact: String
// });

// // Create model
// const Student = mongoose.model('Student', studentSchema);

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Dnyandeep', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB', err));

// // Export the Student model so it can be used in other files
// module.exports = Student;
//  //krishna db ends

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;



// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// // Import mongoose and define schema/model
// const mongoose = require('mongoose');
// const studentSchema = new mongoose.Schema({
//   student_name: String,
//   student_contact: String
// });
// const Student = mongoose.model('students', studentSchema);

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Dnyandeep', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB', err));

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // Route to save form data to MongoDB
// app.post('/submit-form', async (req, res, next) => {
//   try {
//     const { student_name, student_contact } = req.body;
//     const student = new Student({ student_name, student_contact });
//     await student.save();
//     res.send('Data saved successfully!');
//   } catch (error) {
//     next(error);
//   }
// });

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;




// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

// const app = express();

// // Connect to MongoDB and define Student model
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Dnyandeep', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB', err));

// const studentSchema = new mongoose.Schema({
//   student_name: String,
//   student_contact: String
// });
// const Student = mongoose.model('Student', studentSchema);


// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // Route to save form data to MongoDB
// app.post('/submit-form', async (req, res, next) => {
//   try {
//     const { student_name, student_contact } = req.body;
//     const student = new Student({ student_name:student_name , student_contact:student_contact });
//     await student.save();
//     res.send('Data saved successfully!');
//   } catch (error) {
//     next(error);
//   }
// });

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error', { title: 'Error' }); // Passing title here
// });


// module.exports = app;



const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// Connect to MongoDB and define Student model
const mongoose = require('mongoose');


// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'));

mongoose.connect('mongodb://127.0.0.1:27017/Dyandeep')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const studentSchema = new mongoose.Schema({
  student_name: String,
  student_contact: String
});
const Student = mongoose.model('Student', studentSchema);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Route to save form data to MongoDB
app.post('/submit-form',  (req, res) => {
    console.log(req.bod)
    const { student_name, student_contact } = req.body;


    const student = new Student({ 
        student_name:student_name ,
         student_contact:student_contact,
         });
   
  
    student.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
    res.send('Data saved successfully!');

  
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' }); // Passing title here
});

module.exports = app;