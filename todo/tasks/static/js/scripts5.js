let perguntas = [
    {
        titulo: 'Considerando o Princípio de Le Chatelier, quais eventos favorecem a formação do ozônio : 3O₂(g) ⇌ 2O₃(g) ?',
        alternativas: ['Aumento da temperatura','Aumento da pressão','Diminuição da pressão','Aumento da concentração de gás ozônio'],
        correta1: 0,
        correta2: 1
    },
    {
        titulo: 'Quais afirmações a seguir estão corretas quando se trata da reação a seguir: 2NO₂(g) ⇌ N₂O₄(g) ΔH < 0 ?',
        alternativas: ['o aumento da concentração de NO₂(g) favorecerá a reação inversa','o aumento da pressão favorecerá a reação direta','a diminuição da concentração de N₂O₄(g) favorecerá a reação inversa','o aumento da temperatura diminuirá o valor numérico da constante de equilíbrio'],
        correta1: 1,
        correta2: 3
    },
    {
        titulo: 'Com o objetivo de deslocar o equilíbrio da reação 2NO(g) + O₂(g) ⇌ 2NO₂(g) ΔH < 0 no sentido da formação de dióxido de nitrogênio, deve-se:',
        alternativas: ['diminuir a pressão','aumentar a pressão','diminuir a temperatura','aumentar a temperatura'],
        correta1: 1,
        correta2: 2
    },
    {
        titulo: 'Considerando a reação em equilíbro 2H₂S(g) + 3O₂(g) ⇌ 2H₂O(g) + 2SO₂(g) ∆H = < 0, quais alternativas favorecem o deslocamento do equilíbrio para a direita?',
        alternativas: ['diminuição da pressão','aumento da pressão','adição de SO₂','retirada do gás oxigênio'],
        correta1: 0,
        correta2: 1
    },
    {
        titulo: 'Considerando a reação em equilíbro 2H₂S(g) + 3O₂(g) ⇌ 2H₂O(g) + 2SO₂(g) ∆H = < 0, quais alternativas favorecem o deslocamento do equilíbrio para a esquerda?',
        alternativas: ['diminuição da pressão','aumento da pressão','adição de SO₂','retirada do gás oxigênio'],
        correta1: 2,
        correta2: 3
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