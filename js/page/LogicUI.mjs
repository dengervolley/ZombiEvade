import {config} from "../Config.js";

export class UI {
    constructor() {
        this.startStopButton = document.getElementById('startStopButton');
        this.betMenu = document.querySelectorAll('.betOption');

        const betOptions = document.querySelectorAll('.betOption');

        // set balance
        this.setBalance(config.balance);
        this.setRoundWin(0);

        // default Bet value
        this.bet = 10;
        betAmount.textContent = this.bet;

        // decrease bet
        decreaseBet.addEventListener('click', () => {
            let index = Array.from(betOptions).findIndex(option => option.textContent === betAmount.textContent);
            if (index > 0) {
                betOptions[index].classList.remove('active');
                betOptions[index - 1].classList.add('active');
                betAmount.textContent = this.bet = +betOptions[index - 1].textContent;
            }
        });

        increaseBet.addEventListener('click', () => {
            let index = Array.from(betOptions).findIndex(option => option.textContent === betAmount.textContent);
            if (index < betOptions.length - 1) {
                betOptions[index].classList.remove('active');
                betOptions[index + 1].classList.add('active');
                betAmount.textContent = this.bet = +betOptions[index + 1].textContent;
            }
        });

        betOptions.forEach(option => {
            option.addEventListener('click', () => {
                betOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                betAmount.textContent = this.bet = +option.textContent;
            });
        });

        this.hide();


        updateBalance.addEventListener('click', () => {
            this.setBalance(config.balance);
            this.deacivateUpdateBalanceButton();
        });

        soundButton.addEventListener('click', () => {
            if (Howler.volume() === 0) {
                Howler.volume(1);
                soundButton.classList.add('soundOn');
                soundButton.classList.remove('soundOff');
            } else {
                Howler.volume(0);
                soundButton.classList.remove('soundOn');
                soundButton.classList.add('soundOff');
            }
        });
    }


    setBalance(value) {
        this.balance = value;
        balanceValue.textContent = value;
    }

    setRoundWin(value) {
        this.roundWin = value;
        roundWinNum.textContent = this.roundWin;
    }

    decreaseBalance() {
        this.setBalance(this.balance - this.bet);
    }

    increaseBalance() {
        this.setBalance(this.balance + this.roundWin);
    }

    increaseRoundWin() {
        this.setRoundWin(this.roundWin + this.bet);
    }

    deactivatePlayButton() {
        startStopButton.disabled = true;
        startStopButton.classList.add('deactivateButton');
    }

    activatePlayButton() {
        startStopButton.disabled = false;
        startStopButton.classList.remove('deactivateButton');
    }

    deactivateBetButtons() {
        betOptions.classList.add('deactivateBet');
        betControls.classList.add('deactivateBet');
        decreaseBet.disabled = true;
        increaseBet.disabled = true;
        this.betMenu.forEach(button => {
            button.disabled = true;
        });
    }

    activateBetButtons() {
        betOptions.classList.remove('deactivateBet');
        betControls.classList.remove('deactivateBet');
        decreaseBet.disabled = false;
        increaseBet.disabled = false;

        this.betMenu.forEach(button => {
            button.disabled = false;
        });
    }

    hide() {
        gameUI.classList.add('hideUI');
    }

    show() {
        gameUI.classList.remove('hideUI');
    }

    deacivateUpdateBalanceButton() {
        updateBalance.disabled = true;
        updateBalance.classList.add('deactivateButton');
        updateBalance.classList.add('hide');
    }
    acivateUpdateBalanceButton() {
        updateBalance.disabled = false;
        updateBalance.classList.remove('deactivateButton');
        updateBalance.classList.remove('hide');
    }
}

const ui = window.ui = new UI();
export default ui;