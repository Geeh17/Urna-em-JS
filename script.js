let prefeitoVotes = {
    hebert: 0,
    ribeiro: 0
};

let vereadorVotes = {
    barone: 0,
    bidu: 0,
    monteiro: 0,
    joaoFera: 0
};

document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;

    if (password === '1505') {
        const prefeito = document.getElementById('prefeito').value;
        const vereador = document.getElementById('vereador').value;
        confirmVotoPrefeito(prefeito);
        confirmVotoVereador(vereador);
        updateDashboard();
        alert('Voto confirmado! Obrigado por votar.');
    } else {
        alert('Senha incorreta! Tente novamente.');
    }
});

function confirmVotoPrefeito(prefeito) {
    prefeitoVotes[prefeito]++;
}

function confirmVotoVereador(vereador) {
    vereadorVotes[vereador]++;
}

function updateDashboard() {
    chartPrefeito.data.datasets[0].data = [prefeitoVotes.hebert, prefeitoVotes.ribeiro];
    chartPrefeito.update();
    chartVereador.data.datasets[0].data = [vereadorVotes.barone, vereadorVotes.bidu, vereadorVotes.monteiro, vereadorVotes.joaoFera];
    chartVereador.update();
}
