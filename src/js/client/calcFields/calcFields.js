import Graphic from '../graphic/createGraphic'

export default class calcFields extends Graphic {
	constructor(props) {
		super(props)
		this.props = props
		this.sum = 0
	}

	assignValues = (selector, value) => {
		let element = document.querySelector(`input[name = ${selector}]`)
		element.value = value
	}

	splitPercent = percent => {
		let [num] = percent.split('%')
		return +num / 100
	}

	setQuantityAccum() {
		const { startCreateCapital, pension } = this.props
		if (!(startCreateCapital !== '' && pension !== '')) return
		this.quantityYear = pension - startCreateCapital
	}

	setPercentMonth() {
		const { hardPercentInYear } = this.props
		let percent = this.splitPercent(hardPercentInYear)
		if (!(hardPercentInYear !== '')) return
		const value = (Math.pow(1 + percent, 1 / 12) - 1) * 100
		this.fixValue = value.toFixed(2) + '%'
		// this.assignValues('percentMonth', this.fixValue);
	}

	// setPercentMonthPension() {
	// 	const { hardPercentInPension } = this.props;
	// 	let percent = this.splitPercent(hardPercentInPension);
	// 	if (!(hardPercentInPension !== '')) return;
	// 	const value = (Math.pow(1 + percent, 1 / 12) - 1) * 100;
	// 	const fixValue = value.toFixed(2) + '%';
	// 	this.assignValues('percentMonthPension', fixValue);
	// }

	// setDesiredIncomeInflation() {
	// 	const { desiredIncome } = this.props
	// 	if (!(desiredIncome !== '' && this.quantityYear !== undefined)) return
	// this.desiredIncomeInflation = (desiredIncome - desiredIncome * percent).toFixed(0)
	// this.assignValues('desiredIncomeInflation', this.desiredIncomeInflation)
	// }

	// calcDesiredIncomeInflationInYear() {
	// 	const { desiredIncome, startCreateCapital } = this.props
	// 	if (!(desiredIncome !== '' && startCreateCapital !== '')) return
	// 	let percent = this.splitPercent('2.5%')

	// }

	getSumm() {
		const { contribution, addMonth, pension, hardPercentInYear } = this.props
		if (!(contribution !== '' && addMonth !== '' && pension !== '' && hardPercentInYear !== '')) return
		let start = +contribution + +addMonth
		let qtyMonth = this.quantityYear * 12
		let result = start
		const percent = this.splitPercent(this.fixValue)
		this.summInYear = []
		for (let i = 0; i <= qtyMonth; i++) {
			let counter = Math.floor(+result * (1 + percent) + +addMonth)
			result = counter
			if (i % 12 === 0 || i === qtyMonth) {
				this.summInYear.push(result)
			}
		}
		this.sum = result
	}

	getPension() {
		const { hardPercentInPension, incomeTax, pension, desiredIncome, startCreateCapital } = this.props

		if (
			!(
				this.sum !== '' &&
				hardPercentInPension !== '' &&
				desiredIncome !== '' &&
				// this.desiredIncomeInflation !== undefined &&
				this.quantityYear !== undefined
			)
		)
			return
		let percent = this.splitPercent(hardPercentInPension)
		let incomeTaxPercent = this.splitPercent(incomeTax)

		let pensionMoney = [this.sum]

		const emptyArr = new Array(this.quantityYear)
		let percentInflation = this.splitPercent('2.5%')

		this.desiredIncomeInflation = (+desiredIncome + +desiredIncome * percentInflation).toFixed(0)
		// this.assignValues('desiredIncomeInflation', this.desiredIncomeInflation)

		let infaltionMoney = [this.desiredIncomeInflation]
		// let countYear = startCreateCapital
		const that = this
		const calcPension = money => {
			let balanceIncome = Math.floor(+money * percent)
			let pensionInYear = (+desiredIncome + +desiredIncome * incomeTaxPercent) * 12

			let balance = +money + balanceIncome - pensionInYear

			if (balance <= 0) {
				pensionMoney.push(0)
				return
			} else {
				if (balanceIncome > pensionInYear) {
					let count = window.innerWidth < 768 ? 10 : 30
					for (let i = 0; i <= count; i++) {
						that.desiredIncomeInflation = (+that.desiredIncomeInflation + +that.desiredIncomeInflation * percentInflation).toFixed(0)
						infaltionMoney.push(that.desiredIncomeInflation)
						// balanceIncome = Math.floor(+balance * percent)
						// pensionInYear = +this.desiredIncomeInflation * 12
						balance = +balance + balanceIncome - pensionInYear
						// let diffBalanceTax = balance - balance * incomeTaxPercent

						pensionMoney.push(balance)
					}
				} else {
					let diffBalanceTax = balance - balance * incomeTaxPercent
					pensionMoney.push(Math.floor(balance))
					calcPension(balance)
				}
			}
		}
		// console.log(pensionMoney)
		calcPension(this.sum)
		this.inflationArr = pensionMoney.map((value, ind) => ({ value, inflation: infaltionMoney[ind] }))
		this.pensionArr = emptyArr.concat(pensionMoney)
	}
}
