import $ from 'jquery';
import data from './main'
import {text} from './template';

var dataTypeToTemplate = {
	'text': text
}

data.forEach(function(inputInfo) {
	var template = dataTypeToTemplate[inputInfo.type];
	var html = template(inputInfo);
	$('#registrationForm').append(html);
});