import { Component } from './component.js';

export default class Input extends Component {
	handleFocus = () => {
		if (this.error) {
			this.error.remove();
		}
	};

	// handleBlur = () => {
	// 	if (!this.elem.value) {
	// 		const error = this.createElement(
	// 			'p',
	// 			{ style: { color: 'red' } },
	// 			this.props.errorText
	// 		);
	// 		this.elem.after(error);
	// 		this.error = error;
	// 	}
	// };

	render() {
		const { errorText, labelText, ...attr } = this.props;
		const element = this.createElement('input', attr);
		if (attr.required) {
			element.addEventListener('focus', this.handleFocus);
			element.addEventListener('blur', this.handleBlur);
		}
		let labelElem;
		if (labelText) {
			labelElem = super.createElement('label', {}, labelText);
			labelElem.append(element);
			console.log(labelElem);
			return labelElem;
		} else {
			return element;
		}
		// this.elem = element;
	}
}
