let audios = [
    { caminho: 'audios/grito.mp3', legenda: 'GRITO' },
    { caminho: 'audios/jesus.mp3', legenda: 'JEEESUS' },
    { caminho: 'audios/nao-e-o-pai.mp3', legenda: 'ELE NÃO É O PAI!' },
    { caminho: 'audios/pare.mp3', legenda: 'PARE' },
    { caminho: 'audios/que-isso-meu-filho.mp3', legenda: 'QUE ISSO MEU FILHO' },
    { caminho: 'audios/ratinhoo.mp3', legenda: 'RATINHOO' },
    { caminho: 'audios/uepa.mp3', legenda: 'UEPAA' },
    { caminho: 'audios/vixi-ratinho.mp3', legenda: 'VIXI RATINHO' },
    { caminho: 'audios/xaropinho.mp3', legenda: 'XAROPINHO' },
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i = 0; i < 9; i++) { /* i sendo variavel de controle usada para percorrer o array e trocar as legendas*/
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);

        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});