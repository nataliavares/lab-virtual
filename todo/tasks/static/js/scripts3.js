let perguntas = [
    {
        titulo: 'Qual das seguintes reações de decomposição balanceada corresponde à reação que ocorre em um airbag?',
        alternativas: ['2NaN₃(s) → 2Na(s) + 3N₂(g)','2NaN₂(s) → 2Na(s) + 2N₂(g)','2Na(s) + 3N₂(g) → 2NaN₃(s)','2Na(s) + 2N₂(g) → 2NaN₂(s)'],
        correta: 0
    },
    {
        titulo: 'Quais seriam os coeficientes para tornar a reação a seguir balanceada? X N₂(g) + Y H₂(g) → Z NH₃(g)',
        alternativas: ['1, 2 e 3','1, 3 e 2','3, 2 e 1','1, 2 e 1'],
        correta: 1
    },
    {
        titulo: 'Para a reação de síntese da amônia (NH₃) ao utilizar 10 g de nitrogênio (N₂) reagindo com hidrogênio (H₂), qual massa, em gramas, do composto é produzida? Dados: N = 14g/mol e H = 1g/mol',
        alternativas: ['12,0g','12,12g','12,14g','12,16g'],
        correta: 2
    },
    {
        titulo: 'A combustão completa é um tipo de reação química que tem como produtos gás carbônico e água. Reagindo álcool etílico (C₂H₆O) e oxigênio (O₂) na proporção em mols de 1:3, quantos mols de CO₂ é produzido?',
        alternativas: ['1 mol','2 mol','3 mol','4 mol'],
        correta: 1
    },
    {
        titulo: 'Com intenção de realizar uma combustão completa utilizando 161 g de álcool etílico (C₂H₆O), para produção de dióxido de carbono (CO₂) e água (H₂O), que massa de oxigênio (O₂), em gramas, deve ser empregada? Dados: C = 12g/mol, H = 1g/mol e O = 16g/mol',
        alternativas: ['363g','243g','432g','336g'],
        correta: 3
    },
    {
        titulo: 'Num recipiente foram colocados 15g de ferro e 4,8g de oxigênio. Qual a massa de Fe₂O₃ formada após um deles ser completamente consumido? Dados: Fe = 56g/mol e O = 16g/mol.',
        alternativas: ['19,8g','16,0g','9,6g','9,9g'],
        correta: 1
    }
    ]


    var gameOver = document.querySelector("#gameOver");

    let app = {
    start: function(){
    
        this.Atualpos = 0;
        this.Totalpontos = 0;
    
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element,index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
        gameOver.style.zIndex = "-2";  

    },
    
    mostraquestao: function(q){
        this.qatual = q;
        // mostrando o titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        // mostrando as alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element,index){
            element.textContent = q.alternativas[index];
        })
    
    },

    Proximaperg: function(){
        console.log(this.Atualpos);

        this.Atualpos++;
        
        if(this.Atualpos == perguntas.length){
            this.gameOver();
        }
    },

    gameOver: function(){
        gameOver.style.zIndex = "99";
    },
    
    checaResposta: function(index){
        if(this.qatual.correta == index){
            console.log("Correta")
            this.Totalpontos++;
            this.mostraresposta(true);
        }
        else{
            console.log("Errada")
            this.mostraresposta(false);
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },
    
    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Sua pontuação: ${this.Totalpontos} / 6`;
    },
    
    mostraresposta: function (correto) {
        let resultDiv = document.getElementById('result');
        let result = '';
        // formate a mensagem a ser exibida
        if (correto) {
          result = 'Resposta Correta!';
        }
        else {
          // obtenha a questão atual
          let pergunta = perguntas[this.Atualpos];
          // obtenha o índice da resposta correta da questão atual
          let cindice = pergunta.correta;
          // obtenha o texto da resposta correta da questão atual
          let ctexto = pergunta.alternativas[cindice];
          result = `Incorreto! Resposta Correta: ${ctexto}`;
        }
        resultDiv.textContent = result;
      }
    
    
    }
    
    app.start();    