<!DOCTYPE html>
<html>
<head>
<title>St. Louis Area Undergraduate Research Symposium</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link rel="stylesheet" href="http://www.stlaurs.com/styles/main.css" />
</head>
<body>
<div id="grayStrip">
	<div id="paper">
		<div style="text-align:center;"><a href="http://www.stlaurs.com"><img src="http://www.stlaurs.com/img/banner.png" /></a></div>
		<div id="contributors"></div>
		<div id="header">
			<script src="http://www.stlaurs.com/scripts/header.js"></script>
			<div id="cornerLeft"></div>
			<div id="cornerRight"></div>
		</div>
		<div id="content">

			<?php
			
			include("/home/content/72/9635172/html/includes/database.php");

			/*	Make sure that they get an email saying that they've been approved!	*/
			$email=$db->real_escape_string($_GET['e']);
			$code=$db->real_escape_string($_GET['c']);
			$response="That activation link didn't work. They are either approved/denied already or you have the wrong activation code.";
			if($code!=null && $email!=null){
				$result=$db->query("SELECT email,code FROM panel_activation WHERE email='$email' AND code='$code' LIMIT 1");
				$data=$result->fetch_assoc();

				if($data['email']==$email && $data['code']==$code){
					$response="It worked! They're now a member of the panel!";

					$result=$db->query("SELECT * FROM panel_activation WHERE email='$email' LIMIT 1");
					$data=$result->fetch_assoc();

					$db->query("UPDATE panel SET member='2' WHERE email='$email'");
					$db->query("DELETE FROM panel_activation WHERE email='$email'");
				}
			}

			echo '<h2 style="text-align:center;">'.$response.'</h2>';

			$db->close();
			?>


		</div>
	</div>
</div>
</body></html>