import { CalculateForm } from './client/form/calculateForm.js'
import Modal from './client/modal/modal.js'

const formStorage = new CalculateForm({
	className: 'form-calc',
	autocomplete: 'off',
	id: 'storage',
}).render()









const formPension = new CalculateForm({
	className: 'form-calc',
	autocomplete: 'off',
	id: 'pension',
}).render()
// const graphic = new Graphic();

window.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.title-s').after(formStorage)
	document.querySelector('.title-p').after(formPension)
	const openModal = document.getElementById('openModal')
	const modal = new Modal(openModal)
	modal.render()
})
