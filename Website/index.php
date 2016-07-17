<?php session_start(); ?>
<html>
	<head>
		<title>My Data</title>
		<link rel="stylesheet" type="text/css" href="style.css" />
		<script>
			function clicked(){
			var x;
			var y;
			x = document.getElementById('nameCheck').value;
			y = document.getElementById('password').value;
			if(x !="" && y !=""){
				return true;
				}
				else if(y ==""){
					document.getElementById('errorPass').innerHTML='<font color="red">(required) Password:</font>';
					return false;
					}
				else if(x ==""){
					document.getElementById('errorMsg').innerHTML='<font color="red">(required) Name:</font>';
					return false;
				}
				
				
			}
		</script>
	</head>
	<body>		
		<?php include("header.php"); ?>
			<?php
			
			if (isset($_SESSION['user']))
				echo "<p class ='welcome' id='greeting'> Hi, " . $_SESSION['user'] . "! Welcome to my site!</p>";
			else 
				echo "<p class ='welcome' id='greeting'> Please Login:</p>
						<form action='welcome.php' method='post' onSubmit='return clicked();'>
							<b id='errorMsg'>Name:</b>
							<input type='text' id='nameCheck' name='username'/>
							<b id='errorPass'>Password:</b> <input type='text' id='password' name='password'/>
							<input type='submit' value='Click Me'onClick='clicked()'/>
						</form>";
			
			?>
			<?php
			if (isset($_SESSION['user']))
				echo "<center><h1> User List:</h1>
					<table border='1'>
					<tr>
					<td><b>User</b></td>
					<td><b>Login password</b></td>
					</tr>
					<tr>
					<td>" . $_SESSION['user'] . "</td>
					<td>" . $_SESSION['pass'] . "</td>
					</tr>
					</table>
					</center>";
			?>
			<?php if (isset($_SESSION['user']))
				echo "<center><a href='logout.php'>Logout</a></center>";?>
			<p class="content" >This page is a work in progress that will eventually show places for data input, as well as data recall. Check back here for updates and more information! Thanks for visiting!</p>
				
		<?php include("footer.php"); ?>
	</body>
</html>
