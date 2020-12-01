import Input from '../components/input.js';
import Form from './form.js';
import { inputForms } from './fields';

export class CalculateForm extends Form {
	render() {
		let { id } = this.props;
		const form = super.render(this.props);
		inputForms.forEach(item => {
			if (id === item.className) {
				form.append(new Input(item).render());
			}
		});
		return form;
	}
}
