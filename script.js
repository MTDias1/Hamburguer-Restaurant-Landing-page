
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
