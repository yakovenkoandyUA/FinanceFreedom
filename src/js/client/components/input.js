import { Component } from './component.js';
import calcFilds from './calcFields/calcFields.js';
export default class Input extends Component {
	handleFocus = () => {
		if (this.error) {
			this.error.remove();
		}
	};

	handleBlurSerialize = () => {
		const [...form] = document.querySelectorAll('input[name]');
		const formFields = form.reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});
		this.laungChart(formFields);
	};

	laungChart(fields) {
		const generateFields = new calcFilds(fields);
		generateFields.setNeedInYear();
		generateFields.setQuantityAccum();
		generateFields.setDesiredIncomeInflation();
		generateFields.setPercentMonth();
		generateFields.setPercentMonthPension();
		generateFields.getSumm();
		generateFields.getPension();
		generateFields.createLabelGraph();
	}

	render() {
		const { errorText, labelText, ...attr } = this.props;
		const element = this.createElement('input', attr);
		if (attr.required) {
			element.addEventListener('focus', this.handleFocus);
			element.addEventListener('blur', this.handleBlurSerialize);
		}
		let labelElem;
		if (labelText) {
			labelElem = super.createElement('label', {}, labelText);
			labelElem.append(element);
			return labelElem;
		} else {
			return element;
		}
	}
}
