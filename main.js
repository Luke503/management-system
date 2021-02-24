var express = require('express');
var mysql = require('./dbcon.js');
// var bodyParser = require('body-parser');


const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/departments.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/employees.html'));
});

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/positions.html'));
});

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/projects.html'));
});


//add the router
app.set('mysql', mysql);
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');



// var app = express();
// var handlebars = require('express-handlebars').create({
//         defaultLayout:'main',
//         });

// app.engine('handlebars', handlebars.engine);
// app.use(bodyParser.urlencoded({extended:true}));
// app.use('/static', express.static('public'));
// app.set('view engine', 'handlebars');
// app.set('port', process.argv[2]);
// app.set('mysql', mysql);
// app.use('/people_certs', require('./people_certs.js'));
// app.use('/people', require('./people.js'));
// app.use('/planets', require('./planets.js'));
// app.use('/', express.static('public'));

// app.use(function(req,res){
//   res.status(404);
//   res.render('404');
// });

// app.use(function(err, req, res, next){
//   console.error(err.stack);
//   res.status(500);
//   res.render('500');
// });

// app.listen(app.get('port'), function(){
//   console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
// });