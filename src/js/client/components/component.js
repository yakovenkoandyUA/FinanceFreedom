export class Component {
	constructor(props) {
		this.props = { ...props };
	}

	createElement(tag, attr = {}, content = '') {
		const element = document.createElement(tag);
		for (const [key, value] of Object.entries(attr)) {
			if (value) {
				element[key] = value;
			}
		}
		if (content) {
			element.innerHTML = content;
		}
		return element;
	}
}
