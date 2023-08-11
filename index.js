    //Cria referência ao form e aos elementos de respostas (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#first")
const resp2 = document.querySelector("#second")
const resp3 = document.querySelector("h3")


frm.addEventListener("submit", (e) =>{
    //cria um "ouvinte" de evento, acionado quando o botão de submit for clicado 
    const veiculo = frm.inVeiculo.value     // resgata os "valores"
    const price = Number(frm.inPrice.value)

    const entrada = price * 0.50    // faz o calculo da entrada
    const parcela = (price * 0.50) / 12     // calc da parcela

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault()    // evita o envio do form
})