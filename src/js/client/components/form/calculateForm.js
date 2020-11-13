import Input from '../input.js';
import Form from './form';
import { inputForms } from './fields';

export class CalculateForm extends Form {
	render() {
		const form = super.render(this.props);
		inputForms.forEach(item => {
			form.append(new Input(item).render());
		});
		return form;
	}
}
