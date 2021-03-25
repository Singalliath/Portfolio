<?php

#Receive user input
$email_address = $_POST['email_address'];
$feedback = $_POST['feedback'];

#Filter user input
#function filter_email_header($form_field) {  
#return preg_replace('\w[\w\.-]*@\w[\w\.-]+\.\w+','',$form_field);
#} i'll fix it soon

#$email_address  = filter_email_header($email_address);

#Send email
$headers = "From: $email_address";
$sent = mail('singalliath@gmail.com', 'Feedback Form Submission', $feedback, $headers);

#Thank user or notify them of a problem
if ($sent) {

?><html>
<head>
<title>Thank You</title>
<link rel="stylesheet" href="../css\style.css">
</head>
<body>
<section class="intro" id="home">
        <h1 id="intro--h1" class="section__title section__title--intro">
           Thank you for contacting me! 
        </h1>
        <p class="section__subtitle section__subtitle--intro"> Your Future Front-end-web developer</p>
        <img src="../img/ClaytonHarris.jpg" alt="Clayton Harris" class="intro__img">
    </section>
    <a href="../../index.html">Back to Portfolio</a>
</body>
</html>
<?php

} else {

?><html>
<head>
<title>Something went wrong</title>
<link rel="stylesheet" href="../css\style.css">
</head>
<body>
<h1>Something went wrong</h1>
<p>We could not send your feedback. Please try again.</p>
<a href="../../index.html">Back to Portfolio</a>
</body>
</html>
<?php
}
?>