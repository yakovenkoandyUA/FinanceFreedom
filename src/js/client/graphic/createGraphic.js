import { Chart } from 'chart.js';
import { options, ctx } from './myChart';

let myChart = new Chart(ctx, options);

export default class Graphic {
	createLabelGraph() {
		const { startCreateCapital, pension } = this.props;
		if (!(startCreateCapital !== '' && pension !== '')) return;

		this.label = [];
		let filterPension;
		if (this.pensionArr) {
			filterPension = this.pensionArr.filter(item => item);
		}
		if (this.sum && this.pensionArr) {
			let count = +pension + filterPension.length;
			for (let i = startCreateCapital; i <= count; i++) {
				this.label.push(+i);
			}
		} else {
			for (let i = startCreateCapital; i <= pension; i++) {
				this.label.push(+i);
			}
		}
		this.render();
	}

	generatePointColor = (totalAmount, flag = false) =>
		totalAmount
			? new Array(totalAmount.length).fill(flag ? 'rgba(19, 111, 98, 1)' : 'rgba(222, 145, 81, 1)')
			: '';

	render() {
		let years = this.quantityYear;
		const pointsAcc = this.generatePointColor(this.summInYear, true);
		const pointsPens = this.generatePointColor(this.pensionArr);
		myChart.destroy();
		myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: this.label,
				showLine: true,
				datasets: [
					{
						label: 'Создание капитала',
						data: this.summInYear,
						backgroundColor: ['rgba(19, 111, 98, 0.3)'],
						borderColor: ['rgba(19, 111, 98, 1)'],
						borderColor: pointsAcc,
						borderWidth: 1,
					},
					{
						label: 'Выход на пенсию',
						data: this.pensionArr,
						backgroundColor: ['rgba(222, 145, 81, 0.4)'],
						borderColor: ['rgba(222, 145, 81, 1)'],
						borderColor: pointsPens,
						borderWidth: 1,
					},
				],
			},
			options: {
				tooltips: {
					mode: 'nearest',
					enabled: this.quantityYear > 15 ? true : false,
					backgroundColor: 'rgb(0,0,0)',
					titleFontSize: 14,
					titleFontColor: '#fff',
					titleAlign: 'center',
					bodyFontColor: '#fff',
					bodyFontSize: 14,
					displayColors: false,
				},
				title: {
					fontSize: 12,
					display: true,
				},
				hover: {
					animationDuration: 0,
				},
				legend: {
					labels: {
						fontColor: '#151517',
						fontSize: 14,
						padding: 15,
					},
					position: 'bottom',
				},

				animation: {
					duration: 500,
					easing: 'easeOutQuart',
					onComplete: function () {
						let ctx = this.chart.ctx;
						ctx.font = Chart.helpers.fontString(
							Chart.defaults.global.defaultFontFamily,
							'normal',
							Chart.defaults.global.defaultFontFamily
						);
						ctx.textAlign = 'center';
						ctx.textBaseline = 'bottom';
						this.data.datasets.forEach(function (dataset) {
							if (dataset._meta[Object.keys(dataset._meta)[0]].hidden) return;
							for (let i = 0; i < dataset.data.length; i++) {
								let model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
									scale_max =
										dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
								ctx.fillStyle = '#151517';
								let y_pos = model.y - 10;
								dataset._meta[Object.keys(dataset._meta)[0]].data[i]._view.zIndex = -10;
								console.dir(dataset._meta[Object.keys(dataset._meta)[0]].data[i]);
								dataset._meta[Object.keys(dataset._meta)[0]].dataset._view.zIndex = -10;
								if ((scale_max - model.y) / scale_max >= 0.93) y_pos = model.y + 30;
								if (years > 15) {
									if (i % 2 === 0) {
										ctx.fillText(dataset.data[i], model.x, y_pos);
									}
								} else {
									ctx.fillText(dataset.data[i], model.x, y_pos);
								}
							}
						});
					},
				},
				responsive: true,
				scales: {
					yAxes: [
						{
							ticks: {
								fontColor: '#151517',
								padding: 8,
								fontSize: 14,
								beginAtZero: false,
								min: this.summInYear ? this.summInYear[0] : 0,
							},
							gridLines: {
								color: '#fff',
								lineWidth: 1,
								borderDash: [20, 5],
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								color: '#fff',
								lineWidth: 1,
								display: false,
							},
							ticks: {
								fontColor: '#151517',
								padding: 8,
								fontSize: 14,
							},
						},
					],
				},
			},
		});
	}
}
