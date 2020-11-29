import { Component } from '../component.js';

export default class Form extends Component {
	render() {
		const { ...attr } = this.props;
		const form = this.createElement('form', attr);
		form.addEventListener('submit', this.handleSubmit);
		this.form = form;
		return this.form;
	}
}
