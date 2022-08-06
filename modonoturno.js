let modoNoturno = localStorage.getItem('modoNoturno');
const botaoModoNoturno = document.querySelector('#noturno')

const ativarModoNoturno = () => {
    document.body.classList.add('modonoturno');
    localStorage.setItem('modoNoturno', 'ativado')
}

const desativarModoNoturno = () => {
    document.body.classList.remove('modonoturno');
    localStorage.setItem('modoNoturno', null)
}

if (modoNoturno === 'ativado') {
    ativarModoNoturno();
}

botaoModoNoturno.addEventListener('click', () => {
    modoNoturno = localStorage.getItem('modoNoturno');
    if (modoNoturno !== 'ativado') {
        ativarModoNoturno();
    } else {
        desativarModoNoturno();
    }
})