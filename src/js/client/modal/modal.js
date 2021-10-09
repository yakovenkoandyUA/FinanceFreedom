export default class Modal {
	constructor(opener) {
		this.opener = opener
	}

	handleClose() {
		this.root.addEventListener('click', function (ev) {
			if (ev.target === ev.currentTarget || ev.target.classList.contains('modal-close')) {
				this.classList.remove('active')
			}
		})
	}

	handleOpen() {
		this.opener.addEventListener('click', () => {
			this.root.classList.add('active')
			this.handleClose()
		})
	}

	render() {
		this.root = document.createElement('div')
		this.root.className = 'modal-wrapper'

		this.root.insertAdjacentHTML(
			'afterbegin',
			`
            <div class="modal">
            <svg  class="ionicon modal-close" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
           
            <div class="modal__item">
                <div class="modal__item-head">
                    <img class="modal__item-img" src="./assets/img/modal/mono.png" alt="monobank" width="32px">
                    <h3 class="modal__item-title">Карта Monobank:</h3>
                </div>
                <p class="modal__item-text">4441 1144 5435 1824</p>
            </div>
            <div class="modal__item">
                <div class="modal__item-head">
                    <img class="modal__item-img" src="./assets/img/modal/eth.png" alt="monobank" width="32px">
                    <h3 class="modal__item-title">Ethereum (ERC-20):</h3>
                </div>
                <p class="modal__item-text">0x0f441519a89af75162600fecf8744d09ac4be798</p>
            </div>
            <div class="modal__item">
                <div class="modal__item-head">
                    <img class="modal__item-img" src="./assets/img/modal/btc.png" alt="monobank" width="32px">
                    <h3 class="modal__item-title">Bitcoin:</h3>
                </div>
                <p class="modal__item-text">1PReRzM3MnncEy74f6BUhWjAtzRAnLqidf</p>
            </div>
        </div>`,
		)
		this.handleOpen()
		document.body.prepend(this.root)
	}
}
