var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var users = require('./routes/users');
var students = require('./routes/students');
var employ = require('./routes/employ');
var counselor = require('./routes/counselor');
var class_route = require('./routes/class');
var employStatistics = require('./routes/employStatistics');
var careerGuidance = require('./routes/careerGuidance');
var recruitment = require('./routes/recruitment');
var app = express();

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json({
  limit: '50mb'
})); //最大上传大小不超过50mb
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/angular', express.static(__dirname + '/node_modules/angular'));

app.use('/employMent/userInfo', users);
app.use('/employMent/stuInfo', students);
app.use('/employMent/employInfo', employ);
app.use('/employMent/counselorInfo', counselor);
app.use('/employMent/classInfo', class_route);
app.use('/employMent/employStatistics', employStatistics);
app.use('/employMent/careerGuidance', careerGuidance);
app.use('/employMent/recruitmentInfo', recruitment);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;