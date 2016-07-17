<?php
session_start(); 
session_destroy();
?>
<html>
<head>
<title>My Data</title>
		<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>

<?php include("header.php"); ?>
<p class="welcome" id="greeting">
You are now logged out
</p>

	</body>
</html>