function Calculadora() {
    
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = function() {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) this.realizaConta();
        })
    };

    this.realizaConta = function() {
        try {
            let conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida!')
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida!');
        }
    };
    
    this.cliqueBotoes = () => {
        document.addEventListener('click', (event) => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.btnParaDisplay(el);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.apagaUm();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        })
    };

    this.btnParaDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.clearDisplay = () => this.display.value = '';
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();