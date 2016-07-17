<?php session_start(); ?>
<html>
<head>
<title>My Data</title>
		<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
<?php include("header.php"); ?>
<p class="welcome" id="greeting">
<?php
	$mypass = "abc123";
	$passcheck = $_POST["password"];
	if ($passcheck == $mypass){
		echo "Welcome, " . $_POST["username"] . "! You are now logged in. <br/>";
		$_SESSION['user']= $_POST["username"];
		$_SESSION['pass']= $passcheck;
		}
	else
		echo "Sorry, wrong password. <br/>";
?>
<a href="index.php">Click here</a> to return to the main page.
<?php include("footer.php"); ?>
	</body>
</html>