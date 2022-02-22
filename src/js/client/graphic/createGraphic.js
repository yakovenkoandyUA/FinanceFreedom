import { Chart } from 'chart.js'
import { ctx } from './myChart'
import ChartDataLabels from 'chartjs-plugin-datalabels'

let myChart = new Chart(ctx)

export default class Graphic {
	createLabelGraph() {
		const { startCreateCapital, pension, hardPercentInYear } = this.props
		if (!(startCreateCapital !== '' && pension !== '' && hardPercentInYear !== '')) return

		this.label = []
		if (this.sum && this.pensionArr) {
			let filterPension = this.pensionArr.filter(item => item)
			let count = +pension + filterPension.length
			for (let i = startCreateCapital; i <= count; i++) {
				this.label.push(+i)
			}
		} else {
			for (let i = startCreateCapital; i <= pension; i++) {
				this.label.push(+i)
			}
		}
		if (this.label) {
			document.querySelector('.chart-container').classList.add('years')
		}
		document.querySelector('.chart-container-title').style.display = 'none'
		this.render()
	}

	generatePointColor = (totalAmount, flag = false) => (totalAmount ? new Array(totalAmount.length).fill(flag ? 'rgba(19, 111, 98, 1)' : 'rgba(222, 145, 81, 1)') : '')

	render() {
		const pointsAcc = this.generatePointColor(this.summInYear, true)
		const pointsPens = this.generatePointColor(this.pensionArr)
		const that = this
		myChart.destroy()
		myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: this.label,
				
				datasets: [
					{
						label: 'Создание капитала',
						data: this.summInYear,
						backgroundColor: ['rgb(12, 146, 0, 0.2)'],
						borderColor: ['rgb(12, 146, 0, 0.8)'],
						borderColor: pointsAcc,
						borderWidth: 1,
					},
					{
						label: 'Выход на пенсию',
						data: this.pensionArr,
						backgroundColor: ['rgb(249, 104, 0, 0.2)'],
						borderColor: ['rgb(249, 104, 0, 0.8)'],
						borderColor: pointsPens,
						borderWidth: 1,
					},
				],
			},
			plugins: [ChartDataLabels],
			options: {
				plugins: {
					datalabels: {
						color: '#969696',
						anchor: 'end',
						align: 'top',
						offset: 2,
						display: false,
						formatter: function (value, context) {
							return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
						},
					},
				},
				responsive: true,
				tooltips: {
					mode: 'point',
					intersect: true,
					enabled: true,
					backgroundColor: 'rgb(0,0,0)',
					titleFontSize: 14,
					titleFontColor: '#fff',
					titleAlign: 'center',
					bodyFontColor: '#fff',
					bodyFontSize: 14,
					displayColors: false,
					callbacks: {
						title: function (tooltipItem, data) {
							return data['labels'][tooltipItem[0]['index']] + ' ' + 'Лет'
						},
						label: function (tooltipItem, data) {
							let arr = [...data['datasets'][0]['data'], ...data['datasets'][1]['data']].filter(i => i)
							let index = tooltipItem['index']
							let indexPension = data['datasets'][0]['data'].length
							let strLabel = index >= indexPension ? 'Капитал :' : 'Создание капитала:'
							let inflStr = that.inflationArr.filter(({ value, inflation }) => value === arr[index >= indexPension ? index + 1 : index])
								return `${strLabel} $${arr[index >= indexPension ? index + 1 : index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
						},
					},
				},
				title: {
					fontSize: 12,
					display: true,
				},
				hover: {
					animationDuration: 0,
				},
				legend: {
					display: false,
					labels: {
						fontColor: '#151517',
						fontSize: 14,
						boxWidth: 10,
						usePointStyle: true,
					},
					position: 'bottom',
				},
				animation: {
					duration: 500,
					easing: 'easeOutQuart',
				},
				responsive: true,
				scales: {
					y: [
						{
							ticks: {
								display: false,
								fontColor: '#969696',
								padding: 8,
								fontSize: 14,
								beginAtZero: false,
								callback: function (value, index, values) {
									return value.toString().slice(0, 2) + 'k$'
								},
								min: this.summInYear ? this.summInYear[0] : 0,
								z: -1,
							},
							gridLines: {
								display: true,
								color: 'rgba(255,255,255, 0.3)',
								lineWidth: 1,
								zeroLineColor: '#000',
							},
							labels: {
								style: {
									zIndex: 0,
								},
							},
						},
					],
					x: [
						{
							gridLines: {
								color: 'rgba(255,255,255, 0.3)',
								lineWidth: 1,
								zeroLineColor: '#fff',
								display: false,
								max: 100,
							},
							ticks: {
								fontColor: '#969696',
								padding: 8,
								fontSize: 14,
							},
						},
					],
				},
			},
		})
	}
}
