// import $ from 'jquery';
// import data from './main'
// import {text} from './template';

var data = [
  { type: 'text', label: 'Name' },
  { type: 'email', label: 'Email' },
  { type: 'password', label: 'Password' },
  { type: 'submit', label: 'Register'}
];


function text(inputInfo) {
	return `
	<div class="text_div">
		<input type="${inputInfo.type}" placeholder="${inputInfo.label}">
	</div>
	`;
}


function button(inputInfo) {
	console.log(inputInfo);
	return ` 
	<div class="button_div">
		<button type="${inputInfo.type}" placeholder="${inputInfo.label}"></button>
	</div>
	`;
}

var dataTypeToTemplate = {
	'text': text,
	'email': text,
	'password': text,
	'submit': button
}

data.forEach(function(inputInfo) {
	var template = dataTypeToTemplate[inputInfo.type];
	var html = template(inputInfo);
	$('#registrationForm').append(html);
});