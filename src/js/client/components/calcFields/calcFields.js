import Graphic from '../graphic/createGraphic';

export default class calcFields extends Graphic {
	constructor(props) {
		super(props);
		this.props = props;

		this.sum = 0;
	}

	assignValues = (selector, value) => {
		let element = document.querySelector(`input[name = ${selector}]`);
		element.value = value;
	};

	splitPercent = percent => {
		let [num] = percent.split('%');
		return +num / 100;
	};

	setQuantityAccum() {
		const { startCreateCapital, pension } = this.props;
		if (!(startCreateCapital !== '' && pension !== '')) return;
		this.quantityYear = pension - startCreateCapital;
		this.assignValues('quantityAccum', this.quantityYear);
	}

	setPercentMonth() {
		const { hardPercentInYear } = this.props;
		let percent = this.splitPercent(hardPercentInYear);
		if (!(hardPercentInYear !== '')) return;
		const value = (Math.pow(1 + percent, 1 / 12) - 1) * 100;
		this.fixValue = value.toFixed(2) + '%';
		this.assignValues('percentMonth', this.fixValue);
	}

	setPercentMonthPension() {
		const { hardPercentInPension } = this.props;
		let percent = this.splitPercent(hardPercentInPension);
		if (!(hardPercentInPension !== '')) return;
		const value = (Math.pow(1 + percent, 1 / 12) - 1) * 100;
		const fixValue = value.toFixed(2) + '%';
		this.assignValues('percentMonthPension', fixValue);
	}

	setDesiredIncomeInflation() {
		const { desiredIncome, inflation } = this.props;
		if (!(desiredIncome !== '' && this.quantityYear !== undefined)) return;
		let percent = this.splitPercent(inflation);
		const value = (desiredIncome * Math.pow(1 + percent, this.quantityYear)).toFixed(0);
		this.assignValues('desiredIncomeInflation', value);
	}

	setNeedInYear() {
		const { desiredIncome } = this.props;
		if (!(desiredIncome !== '')) return;
		let value = desiredIncome * 12;
		this.assignValues('needInYear', value);
	}

	getSumm() {
		const { contribution, addMonth, pension, hardPercentInYear } = this.props;
		if (!(contribution !== '' && addMonth !== '' && pension !== '' && hardPercentInYear !== ''))
			return;
		let start = +contribution + +addMonth;
		let qtyMonth = this.quantityYear * 12 - 2;
		let result = start;
		const percent = this.splitPercent(this.fixValue);
		this.summInYear = [start];
		for (let i = 0; i <= qtyMonth; i++) {
			if (i % 12 === 0) {
				this.summInYear.push(result);
			}
			let counter = Math.floor(+result * (1 + percent) + +addMonth);
			result = counter;
		}
		this.assignValues('summ', result);
		this.sum = result;
	}

	getPension() {
		const { hardPercentInPension, desiredIncomeInflation } = this.props;
		if (
			!(
				this.sum !== '' &&
				hardPercentInPension !== '' &&
				desiredIncomeInflation !== '' &&
				this.quantityYear !== undefined
			)
		)
			return;

		let percent = this.splitPercent(hardPercentInPension);
		let pensionMoney = [];
		const emptyArr = new Array(this.quantityYear);
		const calcPension = money => {
			let balanceIncome = Math.floor(+money * percent);
			let pensionInYear = +desiredIncomeInflation * 12;
			let balance = +money + balanceIncome - pensionInYear;
			if (balance <= 0) {
				return;
			} else {
				pensionMoney.push(balance);
				calcPension(balance);
			}
		};
		calcPension(this.sum);
		this.pensionArr = emptyArr.concat(pensionMoney);
	}
}
