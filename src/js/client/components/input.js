import { Component } from './component.js';
import calcFilds from '../calcFields/calcFields.js';
export default class Input extends Component {
	handleFocus = ({ target }) => target.parentElement.classList.toggle('active');
	handleBlur = ({ target }) => {
		if (target.value) {
			target.parentElement.children[0].style.opacity = '0';
		} else {
			target.parentElement.children[0].style.opacity = '1';
		}
		target.parentElement.classList.toggle('active');
	};

	handleChangeSerialize = () => {
		const [...form] = document.querySelectorAll('input[name]');
		const formFields = form.reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});
		this.generateChart(formFields);
	};

	generateChart(fields) {
		const generateFields = new calcFilds(fields);
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
			element.addEventListener('blur', this.handleBlur);
			element.addEventListener('change', this.handleChangeSerialize);
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
