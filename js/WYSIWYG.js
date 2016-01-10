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
	// Parse iframe data: replace ">, <" with "&gt, &lt"
	// Copy parsed iframe data into textarea
	// Send form

	// Get iframe data
	var iframe = document.getElementsByName('iframe')[0];

	var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
	var iframeContent;

	if (iframeDocument) {

		iframeContent = iframeDocument.getElementsByTagName('body')[0];

	}

	// Parse iframe data
	for (var i = 0; i < iframeContent.length; i++) {

		var content = iframeContent[i].innerHTML;
		var parsedContent = content.replace(/</g, '&lt').replace(/>/g, '&gt');
		iframeContent[i].innerHTML = parsedContent;

	}

	// console.log(iframeContent); For testing purposes

}