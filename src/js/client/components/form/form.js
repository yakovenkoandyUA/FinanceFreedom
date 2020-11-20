import { Component } from '../component.js';

export default class Form extends Component {
	// handleSubmit = e => {
	// 	e.preventDefault();
	// 	return this.serialize;
	// };
	render() {
		const { ...attr } = this.props;
		const form = this.createElement('form', attr);
		form.addEventListener('submit', this.handleSubmit);
		this.form = form;
		return this.form;
	}

	// serialize() {
	// 	const [...fields] = this.form.querySelectorAll('input[name]');

	// 	const body = fields.map(item => `${item.name}=${item.value}`).join('&');
	// 	return body;
	// }
}
