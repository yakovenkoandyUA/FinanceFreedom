import { Chart } from 'chart.js';
// import calcFields from '../calcFields/calcFields';
let ctx = document.getElementById('myChart');

export default class Graphic {
	createLabelGraph() {
		const { startCreateCapital, pension, summ } = this.props;
		if (!(startCreateCapital !== '' && pension !== '')) return;
		this.label = [];
		if (summ && this.pensionArr) {
			let count = +pension + this.pensionArr.length;
			for (let i = +pension; i <= count; i++) {
				this.label.push(+i);
			}
		} else {
			for (let i = startCreateCapital; i <= pension; i++) {
				this.label.push(+i);
			}
		}
		this.render();
	}

	generatePointColor = totalAmount =>
		totalAmount ? new Array(totalAmount.length).fill('#409300') : '';

	render() {
		const points = this.generatePointColor(this.summInYear);
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: this.label,
				// labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 22],
				showLine: true,
				datasets: [
					{
						label: 'Накопление',
						data: [2, 4, 6],
						// fill: false,
						data: this.summInYear,
						backgroundColor: ['rgba(98,226,0, 0.3)'],
						borderColor: points,
						pointColor: 'rgba(87, 167, 134, 1)',
						borderWidth: 1,
					},
					{
						label: 'Пенсия',
						data: this.pensionArr,
						// steppedLine: 'middle',
						// data: [, null, null, null, , , , , , , , 15, 22],
						backgroundColor: ['rgba(153, 102, 255, 0.2)'],
						borderColor: ['rgba(153, 102, 255, 1)'],
						borderWidth: 1,
					},
				],
			},
			options: {
				title: {
					display: true,
					text: 'Custom Chart Title',
				},
				hover: {
					animationDuration: 0,
				},
				animation: {
					duration: 500,
					easing: 'easeOutQuart',
					onComplete: function () {
						var ctx = this.chart.ctx;
						ctx.font = Chart.helpers.fontString(
							Chart.defaults.global.defaultFontFamily,
							'normal',
							Chart.defaults.global.defaultFontFamily
						);
						ctx.textAlign = 'center';
						ctx.textBaseline = 'bottom';

						this.data.datasets.forEach(function (dataset) {
							for (var i = 0; i < dataset.data.length; i++) {
								var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
									scale_max =
										dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
								ctx.fillStyle = 'darkorange';
								var y_pos = model.y - 10;
								// Make sure data value does not get overflown and hidden
								// when the bar value is too close to max value of scale
								// Note: The y value is reverse, it counts from top down
								if ((scale_max - model.y) / scale_max >= 0.93) y_pos = model.y + 20;
								ctx.fillText(dataset.data[i], model.x, y_pos);
							}
						});
					},
				},
				// hover: {
				// 	intersect: false,
				// },

				responsive: true,
				// maintainAspectRatio: false,
				scales: {
					yAxes: [
						{
							ticks: {
								fontColor: '#62E200',
								fontSize: 14,
								beginAtZero: false,
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
	}
}
