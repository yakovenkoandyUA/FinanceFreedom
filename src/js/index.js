import { CalculateForm } from './client/components/form/calculateForm.js';

const form = new CalculateForm({ className: 'form-calc' }).render();
document.querySelector('#root').append(form);

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

		datasets: [
			{
				label: 'hello',
				data: [5, 10, 3, 4, 5],
				backgroundColor: ['rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)'],
				borderWidth: 1,
			},
			{
				label: 'wolrd',
				data: [2, 2, 7, 4],
				backgroundColor: ['rgba(153, 102, 255, 0.2)'],
				borderColor: ['rgba(153, 102, 255, 1)'],
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						fontColor: 'red',
						fontSize: 14,
					},
					gridLines: {
						// color: 'red',
						lineWidth: 3,
						// borderDash: [1, 6],
						// circular: true,
					},
				},
			],
		},
	},
});
