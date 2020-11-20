import { CalculateForm } from './client/components/form/calculateForm.js';
import Graphic from './client/components/graphic/createGraphic.js';

const form = new CalculateForm({ className: 'form-calc' }).render();
const graphic = new Graphic();

window.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#root').append(form);
	graphic.render();
});
