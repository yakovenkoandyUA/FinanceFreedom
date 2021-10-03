export let ctx = document.getElementById('myChart');
export const options = {
	type: 'line',
	data: {
		labels: [1, 2, 44, 5],
		// showLine: true,
		datasets: [
			{
				label: 'Накопление',
				data: [2, 213, 4, 5, 2],
				data: [],
				backgroundColor: ['rgba(29, 211, 176, 0.3)'],
				borderColor: [],
				pointColor: 'rgba(87, 167, 134, 1)',
				// borderWidth: 1,
			},
			{
				label: 'Пенсия',
				data: [],
				backgroundColor: ['rgba(8, 99, 117, 0.2)'],
				borderColor: ['rgba(153, 102, 255, 1)'],
				// borderWidth: 1,
			},
		],
	},
	options: {
		tooltips: {
			enabled: false,
		},
		hover: {
			animationDuration: 0,
		},

		responsive: true,

		scales: {
			xAxes: [
				{
					display: false,
				},
			],
			yAxes: [
				{
					display: false,
				},
			],
		},
	},
};
