<!DOCTYPE html>
<html>

<head>
    <title>Software Textil</title>
    <link href='css/bootstrap.min.css' rel='stylesheet'>
    <link href='css/main.css' rel='Stylesheet'>
    <link rel="stylesheet" href="stylesheet.css">
    <link href='angular.min.js' rel='stylesheet'>
    <link href="ContactUs.js">
</head>


    <body>
        <div class='navbar navbar-default navbar-static-top'>
            <div class='container'>
                <a href='/' class='navbar-brand'>Software Textil</a>
                <ul class='nav navbar-nav navbar-right'>
                    <li><a href='tickets.html'>Products</a></li>
                    <li><a href='stations.html'>Contact</a></li>
                    <li><a href='about.html'>About</a></li>
                </ul>
            </div>
        </div>
        <div class="formstyle" mehtod="Post">
            <h1>Fill out this form with your request and we will get back to you as soon as possible.</h1>
            <form id="form">
                <h3>Contact Form</h3>
                <p id="returnmessage"></p>
                <label>Name: </label>
                <input type="text" id="name" placeholder="Name" />
                <br>
                <label>Email:</label>
                <input type="email" id="email" placeholder="Email" />
                <br>
                <label>Phone:</label>
                <input type="phone" id="contact" placeholder="Phone number" />
                <br>
                <label>Message:</label>
                <textarea id="message" placeholder="Message......."></textarea>
                <br>
                <input type="button" id="submit" value="Send Message" />
            </form>
<?php
// the message
$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("naomikudren@gmail.com","My subject",$msg);
?>
        </div>
