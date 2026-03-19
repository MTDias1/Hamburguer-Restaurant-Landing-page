# Hamburguer-Restaurant-Landing-page

<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Digitalizando o Comércio Local</title>
</head>
<header>
    <div class="cabecalho">
        <img src="img/logo hamburgueria.png" alt="logo" class="logo">
        <h2 class="titulo">Fogo & Carne</h2>
    </div>
</header>
<body>
    <section class="sobreNos">
        <span class="titulo fundoTexto">Sobre nós</span>
        <p id="topico" class="fundoTexto">Somos apaixonados por hambúrguer de verdade. Aqui, cada detalhe importa — do pão macio e levemente tostado à carne suculenta preparada no ponto certo.<br><br> Nossa hamburgueria nasceu da vontade de criar mais do que refeições: queremos proporcionar experiências. Acreditamos que um bom hambúrguer tem o poder de reunir pessoas, criar momentos e deixar memórias. <br><br>Trabalhamos com ingredientes selecionados, preparo artesanal e muito cuidado em cada pedido. Tudo é pensado para entregar sabor, qualidade e aquele gostinho de “quero mais”.<br>Seja para matar a fome, relaxar ou compartilhar bons momentos, este é o seu lugar.</p>
    </section>
    <div class="vitrine">
        <div class="opcao">
            <img src="logo hamburgueria.png" alt="hamburguer" class="imgVitrine">
            <span class="fundoTexto">Hamburguer<br>R$ 15,00</span>
            <span>Quantidade:</span>
            <div class="contador">
                <span class="numero">0</span>
                <button class="quadradinho btnMenos">-</button>
                <button class="quadradinho btnMais">+</button>
            </div>
        </div>
        <div class="opcao">
            <img src="bebida hamburgueria.png" alt="bebida" class="imgVitrine">
            <span class="fundoTexto">Bebida<br>R$ 10,00</span>
            <span>Quantidade:</span>
            <div class="contador">
                <span class="numero">0</span>
                <button class="quadradinho btnMenos">-</button>
                <button class="quadradinho btnMais">+</button>
            </div>
        </div>
        <div class="opcao">
            <img src="batata hamburgueria.png" alt="acompanhamento" class="imgVitrine">
            <span class="fundoTexto">Acompanhamento<br>R$ 8,00</span>
            <span>Quantidade:</span>
            <div class="contador">
                <span class="numero">0</span>
                <button class="quadradinho btnMenos">-</button>
                <button class="quadradinho btnMais">+</button>
            </div>
        </div>
    </div>
    <div id="pagamento">
        <h3 class="tituloPagamento">Resumo do Pedido</h3>
        <div class="linhaTotal">
            <span>Total a pagar:</span>
            <span class="valorTotal">R$ <span id="somaTotal">0,00</span></span>
        </div>
        <button class="btnFinalizar">Finalizar Pedido</button>
    </div>
    <footer>
        <div class="rodapeConteudo">
            <p>&copy; 2024 Fogo & Carne - Hamburgueria Artesanal</p>
            <p>Rua do Sabor, 123 - Centro | Contato: (11) 99999-9999</p>
        </div>
    </footer>
<style>
    *{
    margin: 0px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cabecalho{
    width: 100vw;
    height: auto;
    background-color: #3B1F0F;
    display: flex;
    margin-bottom: 25px;
    align-items: center;
    justify-content: center;
}
.logo{
    width: 5vw;
    margin: 10px;
    min-width: 60px;
    border-radius: 50%;
}
body{
    background-color: #F2D3A4;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100vw;
    align-items: center;
}
.titulo{
    font-size: 40px;
    color: #F5E6D3;
}
#topico{
    background-color: #759a48;
}
.fundoTexto{
    background-color: #3A1E0A;
    border-radius: 15px;
    color: #F5E6D3;
    padding: 10px;
}
.sobreNos{
    margin-left: 20px;
}
p{
    width: 50vw;
    margin-top: 15px;
}
.vitrine{
    display: flex;
    width: 70vw;
    height: auto;
    background-color: #3B1F0F;
    padding: 40px;
    height: auto;
    /*align-self: center;*/
    justify-content: space-around;
    margin-top: 20px;
    border-radius: 20px;
}
.imgVitrine{
    width: 10vw;
    min-width: 60px;
}
.opcao{
    display: flex;
    padding: 20px;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    width: auto;
    background-color: #fff4e3;
}
.contador {
    display: flex;
    justify-content: center; /* Centraliza o bloco todo */
    margin-top: 10px; /* Descola do texto de cima */
}
.numero{
    margin-right: 10px;
    font-size: 15px;
    font-weight: bold;
}
.quadradinho {
    display: flex; /*Essencial para centralizar o conteúdo interno*/
    align-items: center;
    justify-content: center;
    width: 3vw;
    min-width: 35px;
    border: 0px;
    font-weight: bold;/*
    height: 35px; /* Altura do quadrado 
    font-size: 18px;*/
}
.btnMenos {
    cursor: pointer;
    background-color: #ffe3b9;
    transition: 0.2s; /* Efeito suave ao passar o mouse */
    color: #e43414;
    font-size: 20px;
    border-radius: 10px 0px 0px 10px; /* Dá uma leve arredondada nas pontas */
}
.btnMais{
    cursor: pointer;
    background-color: #ffe3b9;
    color: #1cb605;
    font-size: 20px;
    border-radius: 0px 10px 10px 0px; /* Dá uma leve arredondada nas pontas */
}
.btnMenos:active {
    background-color: #e43414; /* Fica um pouco mais escuro quando passa o mouse */
}
.btnMais:active {
    background-color: #1cb605; /* Fica um pouco mais escuro quando passa o mouse */
}
/* Container de Pagamento */
#pagamento {
    width: 40vw;
    background-color: #3B1F0F;
    margin: 40px auto;
    padding: 25px;
    border-radius: 20px;
    color: #F5E6D3;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
}
.tituloPagamento {
    margin-bottom: 15px;
    font-size: 24px;
}
.linhaTotal {
    font-size: 20px;
    margin-bottom: 20px;
    border-top: 1px solid #F5E6D3;
    padding-top: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.valorTotal {
    font-weight: bold;
    color: #1cb605;
}
.btnFinalizar {
    width: 100%;
    padding: 15px;
    background-color: #1cb605;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}
.btnFinalizar:hover {
    background-color: #158f04;
    transform: scale(1.02);
}
/* Rodapé */
footer {
    width: 100%;
    background-color: #26140a;
    color: #F5E6D3;
    padding: 30px 0;
    margin-top: 50px;
    text-align: center;
}
.rodapeConteudo p {
    width: 100%; /* Sobrescreve o p geral que você criou */
    margin: 5px 0;
    font-size: 14px;
}
</style>
<script>
    // Declaramos as constantes APENAS UMA VEZ no topo do script
        const botoesMais = document.querySelectorAll('.btnMais');
        const botoesMenos = document.querySelectorAll('.btnMenos');
        const displayTotal = document.getElementById('somaTotal');
        // Definimos os preços aqui para facilitar a manutenção
        const PRECOS = {
            hamburguer: 15.00,
            bebida: 10.00,
            acompanhamento: 8.00
        };
        function atualizarPrecoTotal() {
            const quantidades = document.querySelectorAll('.numero');     
            // Pegamos os valores de cada item (seguindo a ordem da vitrine)
            const qtdHamb = parseInt(quantidades[0].innerText);
            const qtdBebida = parseInt(quantidades[1].innerText);
            const qtdBatata = parseInt(quantidades[2].innerText);
            const total = (qtdHamb * PRECOS.hamburguer) + 
                          (qtdBebida * PRECOS.bebida) + 
                          (qtdBatata * PRECOS.acompanhamento);
            // Atualiza o texto formatando para moeda brasileira
            displayTotal.innerText = total.toFixed(2).replace('.', ',');
        }
        // Lógica de clique para os botões de MAIS
        botoesMais.forEach(botao => {
            botao.onclick = function() {
                const pai = botao.parentElement;
                const campoNumero = pai.querySelector('.numero');
                campoNumero.innerText = parseInt(campoNumero.innerText) + 1;
                atualizarPrecoTotal();
            };
        });
        // Lógica de clique para os botões de MENOS
        botoesMenos.forEach(botao => {
            botao.onclick = function() {
                const pai = botao.parentElement;
                const campoNumero = pai.querySelector('.numero');
                let valor = parseInt(campoNumero.innerText);
                if (valor > 0) {
                    campoNumero.innerText = valor - 1;
                    atualizarPrecoTotal();
                }
            };
        });
</script>
</body>
</html>
