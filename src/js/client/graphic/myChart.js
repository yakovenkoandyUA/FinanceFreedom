export let ctx = document.getElementById('myChart');
export const options = {
	type: 'line',
	data: {
		labels: [],
		showLine: true,
		datasets: [
			{
				label: 'Накопление',
				data: [2, 4, 6],
				data: [],
				backgroundColor: ['rgba(29, 211, 176, 0.3)'],
				borderColor: [],
				pointColor: 'rgba(87, 167, 134, 1)',
				borderWidth: 1,
			},
			{
				label: 'Пенсия',
				data: [],
				backgroundColor: ['rgba(8, 99, 117, 0.2)'],
				borderColor: ['rgba(153, 102, 255, 1)'],
				borderWidth: 1,
			},
		],
	},
	options: {
		tooltips: {
			enabled: false,
		},
		title: {
			display: true,
			text: 'Custom Chart Title',
		},
		hover: {
			animationDuration: 0,
		},

		responsive: true,

		scales: {
			yAxes: [
				{
					ticks: {
						fontColor: '#f1bb01',
						fontSize: 14,
						beginAtZero: false,
					},
					gridLines: {
						lineWidth: 3,
					},
				},
			],
		},
	},
};
