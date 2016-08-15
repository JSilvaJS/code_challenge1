export function text(inputInfo) {
	return `
	<div class="text_div">
		<input type="${inputInfo.type}" placeholder="${inputInfo.label}">
	</div>
	`;
}