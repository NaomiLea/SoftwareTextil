var express = require('express');
var app = express();
var server = require('http').createServer(app);
var storage = [];
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
var mailOptions;

var smtpTransport = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        user: 'softwaretextil1234@gmail.com',
        pass: '******'
    }
}));
app.post('/email', urlencodedParser, function(req, res) {


    var mailOptions = {
        from: '"Website" <naomikudren@gmail.com>', // sender address
        to: "softwaretextil1234@gmail.com", // list of receivers
        subject: 'Contact form from website ', // Subject line
        text: `Name:${req.body.name}, Phone:${req.body.phone}, ${req.body.email}, Message:${req.body.message}`,

    };
    console.log(req)
    smtpTransport.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

    res.redirect("/");
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
});



// Sets the static file folders
app.use(express.static(__dirname + '/public'));

// Send & response function

// set port
var port = (process.env.PORT || 9000);
server.listen(port, function() {
    console.log('Server is running...');
});


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log("Page requested");
});


app.get("/products", function(req, res) {
    res.sendFile(__dirname + '/products.html');

})

app.get("/index", function(req, res) {
    res.sendFile(__dirname + '/index.html');

})




// All other paths result in 404
app.get('*', function(req, res) {
    res.status(404).end();
    // .sendFile(__dirname + '/404.html');
});
