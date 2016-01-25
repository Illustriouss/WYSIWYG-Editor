function iFrameOn() {
	
	iframe.document.designMode = 'On';

};
function makeBold() {

	iframe.document.execCommand('Bold', false, null);

}
function makeItalic() {

	iframe.document.execCommand('Italic', false, null);

}
function justifyLeft() {

	iframe.document.execCommand('justifyLeft', false, null);	

}
function justifyCenter() {

	iframe.document.execCommand('justifyCenter', false, null);

}
function justifyRight() {
	
	iframe.document.execCommand('justifyRight', false, null);

}
function justifyFull() {

	iframe.document.execCommand('justifyFull', false, null);

}
function changeFont() {

	var font = prompt("font");
	if (font != ""){
		iframe.document.execCommand('fontName', false, font);
	}
	
}
// Doesn't work
function changeFontSize() {

	var fontSize = prompt("font size");
	if (fontSize != "") {
		iframe.document.execCommand('fontSize', false, null);
	}

}
function makeOl() {

	iframe.document.execCommand('insertOrderedList', false, null);

}
function makeUl() {

	iframe.document.execCommand('insertUnorderedList', false, null);

}
function strikeThrough() {

	iframe.document.execCommand('strikeThrough', false, null);

}
function makeSubScript() {

	iframe.document.execCommand('subscript', false, null);

}
function makeSuperScript() {

	iframe.document.execCommand('superscript', false, null);

}
function makeUnderLine() {

	iframe.document.execCommand('underline', false, null);

}
function createImage() {

	var image = prompt("image");
	if (image != "") {
		iframe.document.execCommand('insertImage', false, image);
	}

} 
function createLink() {

	var link = prompt("link");
	if (link != "") {
		iframe.document.execCommand('CreateLink', false, link);
	}

}
function submitForm() {

	// Get iframe data
	var iframe = document.getElementById('WYS-form');
	var dumpField = document.getElementById('WYS-dump-field');
	var form = document.getElementById('WYS-form');

	var iframeDocument = iframe.contentDocument || iframe.contentWindow;
	var iframeContent;

	if (iframeDocument) {

		iframeContent = iframeDocument.body.innerHTML;

	}

	// Load iframe data into textarea
	dumpField.value = iframeContent;

	// Send form
	form.submit();

}