export const inputForms = [
	{
		type: 'text',
		name: 'desiredIncome',
		required: true,
		className: 'pension',
		labelText: '<p class="form-calc-text">Желаемый пассивный доход в месяц в $</p>',
	},
	// {
	// 	type: 'text',
	// 	name: 'inflation',
	// 	className: 'pension',
	// 	labelText: 'Уровень инфляции (для $)',
	// 	disabled: true,
	// 	value: '2.5%',
	// },
	{
		type: 'text',
		name: 'desiredIncomeInflation',
		className: 'pension',
		labelText: '<p class="form-calc-text">Пассивный доход с учетом инфляции 2.5%</p>',
		disabled: true,
		// value: 0,
	},

	{
		type: 'text',
		name: 'hardPercentInPension',
		required: true,
		className: 'pension',
		labelText: '<p class="form-calc-text">Годовой сложный % после создания капитала</p>',
	},
	// {
	// 	type: 'text',
	// 	name: 'percentMonthPension',
	// 	className: 'pension',
	// 	labelText: 'Ежемесячный % после создания капитала, $',
	// 	disabled: true,
	// 	value: 0,
	// },
	{
		type: 'text',
		name: 'contribution',
		required: true,
		className: 'storage',
		labelText: '<p class="form-calc-text">Первоначальная инвестиция в $</p>',
		// value: 1000,
	},
	{
		type: 'text',
		name: 'addMonth',
		required: true,
		className: 'storage',
		labelText: '<p class="form-calc-text">Добавления каждый месяц в $</p> ',
		// value: 1000,
	},
	{
		type: 'text',
		name: 'startCreateCapital',
		required: true,
		className: 'storage',
		labelText: '<p class="form-calc-text">Возраст начала создания капитала, лет</p> ',
		// value: 25,
	},
	{
		type: 'text',
		name: 'pension',
		required: true,
		className: 'storage',
		labelText: '<p class="form-calc-text">Возраст завершения создания капитала, лет</p>',
		// value: 50,
	},
	// {
	// 	type: 'text',
	// 	name: 'quantityAccum',
	// 	className: 'storage',
	// 	labelText: 'Количество лет создания капитала',
	// 	disabled: true,
	// },
	{
		type: 'text',
		name: 'hardPercentInYear',
		required: true,
		className: 'storage',
		labelText: '<p class="form-calc-text">Годовой сложный % в период создания капитала</p>',
	},
	// {
	// 	type: 'text',
	// 	name: 'percentMonth',
	// 	className: 'pension',
	// 	labelText: 'Ежемесячный % в период создания капитала',
	// 	disabled: true,
	// 	value: 0,
	// },

	{
		type: 'text',
		name: 'incomeTax',
		className: 'storage',
		required: true,
		labelText: '<p class="form-calc-text">Налог на инвестиционный доход</p>',
		// disabled: true,
		// value: 0,
	},
	// TODO
	// налог на инвестиционный доход  - вкл в формулу выхода на пенсию
]
