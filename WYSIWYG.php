<?php

?>
<!DOCTYPE html>
	<head>
		<title>wysiwyg test</title>
		<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"/>
		<link rel="stylesheet" href="css/WYSIWYG.css"/>
	</head>
	<body onLoad="iFrameOn();">
		<form action="" method="post" id="form">
			<div class="buttons">
				<button type="button" onclick="makeBold()" class="fa fa-bold"></button>
				<button type="button" onclick="makeItalic()" class="fa fa-italic"></button>
				<button type="button" onclick="justifyLeft()" class="fa fa-align-left"></button>
				<button type="button" onclick="justifyCenter()" class="fa fa-align-center"></button>
				<button type="button" onclick="justifyRight()" class="fa fa-align-right"></button>
				<button type="button" onclick="justifyFull()" class="fa fa-align-justify"></button>
				<button type="button" onclick="changeFont()" class="fa fa-font"></button>
				<button type="button" onclick="changeFontSize()" class="fa fa-text-height"></button>
				<button type="button" onclick="makeOl()" class="fa fa-list-ol"></button>
				<button type="button" onclick="makeUl()" class="fa fa-list-ul"></button>
				<button type="button" onclick="strikeThrough()" class="fa fa-strikethrough"></button>
				<button type="button" onclick="makeSubScript()" class="fa fa-subscript"></button>
				<button type="button" onclick="makeSuperScript()" class="fa fa-superscript"></button>
				<button type="button" onclick="makeUnderLine()" class="fa fa-underline"></button>
				<button type="button" onclick="createImage()" class="fa fa-file-image-o"></button>
				<button type="button" onclick="createLink()" class="fa fa-link"></button>
			</div>
			<iframe name="iframe" width="700" height="300" style="resize: both;"></iframe>
			<textarea id="dump-field"></textarea>
			<button type="button" id="submit-form-button" onclick="submitForm()">Submit</button>
		</form>
		<div id="test"></div>
	</body>
	<script src="js/WYSIWYG.js"></script>
</html>
