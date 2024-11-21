const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-dados-gerais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasEmpregadas = (dados.total_pessoas_conectadas) / 1e9
    const pessoasNoMundo = (dados.total_pessoas_mundo) / 1e9
    const horas = parseInt (dados.tempo_medio)
    const minutos = Math.round ((dados.tempo_medio - horas) * 100)
    const porcentagemEmpregada = ((pessoasEmpregadas / pessoasNoMundo) *100).toFixed(2)
    const paragrafo = document.createElement('p')

    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem 
    <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente 
    <span>${pessoasEmpregadas} bilhões </span> estão conectadas em alguma rede social e 
    passam em media <span>${horas}</span> horas e <span>${minutos}</span> minutos conectadas.
    <br> Isso significa que aproximadamente <span>${porcentagemEmpregada}%</span> de pessoas estão conectadas 
    em alguma rede social.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()
