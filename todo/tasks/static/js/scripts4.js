let perguntas = [
    {
        titulo: 'Selecione 2 elementos que ao reagir resultam na formação de efervescência',
        alternativas: ['NaHCO₃(aq)','H₄C₂O(aq)','H₃C₂O(aq)','NaHCO₂(aq)'],
        correta1: 0,
        correta2: 1
    },
    {
        titulo: 'Selecione 2 elementos que ao reagir resultam na formação de gás carbônico (CO₂)',
        alternativas: ['H₂O(aq)','HCl(aq)','NaHCO₃(aq)','NH₃(aq)'],
        correta1: 1,
        correta2: 2
    },
    {
        titulo: 'Selecione 2 elementos que ao reagir resultam em uma reação endotérmica',
        alternativas: ['H₂O(aq)','NaCl(s)','CaO(s)','NaOH(s)'],
        correta1: 0,
        correta2: 2
    },
    {
        titulo: 'Selecione 2 elementos (sendo um deles a fenolftaleína) que ao reagir resultam em uma reação com coloração rosa',
        alternativas: ['C₂₀H₁₄O₄(aq)','C₁₀H₆O₂(aq)','NaOH(aq)','HCl(aq)'],
        correta1: 0,
        correta2: 3
    },
    {
        titulo: 'Selecione 2 elementos (sendo um deles a fenolftaleína) que ao reagir resultam em uma reação com coloração transparente',
        alternativas: ['C₂₀H₁₄O₄(aq)','C₁₀H₆O₂(aq)','NaOH(aq)','HCl(aq)'],
        correta1: 0,
        correta2: 2
    }
    ]


    var gameOver = document.querySelector("#gameOver");

    let app = {
    start: function(){
    
        this.Atualpos = 0;
        this.Totalpontos = 0;

        this.respostas = 0;
        this.corretas = 0;

        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element1,index1)=>{
            element1.addEventListener('click', ()=>{
                this.checaResposta(index1);
                console.log("console 1: " +index1);
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

    gameOver: function(){
        gameOver.style.zIndex = "99";
    },
    
    checaResposta: function(user){

        console.log(this.respostas);

        if (this.respostas < 2) {

            if(this.qatual.correta1 == user || this.qatual.correta2 == user){
                console.log("Correta")
                this.respostas++;
                this.corretas++;
            }      
            else{
                console.log("Errada")
                this.respostas++;
            }
        }

        console.log(this.respostas);
            
        if (this.respostas == 2) {
            if(this.corretas == 2) {
                this.Totalpontos++;
                this.mostraresposta(true);
            }
            else {
                this.mostraresposta(false);          
            }
            this.atualizaPontos();
            this.Proximaperg();
            this.respostas = 0;
            this.corretas = 0;
            this.mostraquestao(perguntas[this.Atualpos]);   
             
        }
        
    },

    Proximaperg: function(){
        console.log(this.Atualpos);

        this.Atualpos++;
        
        if(this.Atualpos == perguntas.length){
            this.gameOver();
        }
    },

    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Sua pontuação: ${this.Totalpontos} / 5`;
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
          let cindice1 = pergunta.correta1;
          let cindice2 = pergunta.correta2;
          // obtenha o texto da resposta correta da questão atual
          let ctexto1 = pergunta.alternativas[cindice1];
          let ctexto2 = pergunta.alternativas[cindice2];
          result = `Incorreto! Resposta Correta: ${ctexto1} e ${ctexto2}`;
        }
        resultDiv.textContent = result;
      }
    
    
    }
    
    app.start();    