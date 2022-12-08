let perguntas = [
    {
        titulo: 'Qual das seguintes substâncias é capaz de realizar interação do tipo dipolo-dipolo?',
        alternativas: ['CH₄','CO₂','H₂CO','SF₆'],
        correta: 2
    },
    {
        titulo: 'Qual das seguintes substâncias é capaz de realizar ligação de hidrogênio?',
        alternativas: ['CH₃OCH₃','CH₃COCH₃','H₂CO','CH₃CH₂OH'],
        correta: 3
    },
    {
        titulo: 'Qual das seguintes substâncias NÃO é capaz de realizar interação do tipo dipolo induzido?',
        alternativas: ['CO₂','Cl₂','H₂','SO₂'],
        correta: 1
    },
    {
        titulo: 'A partir dos pontos de ebulição, qual das seguintes substâncias tem a maior interação do tipo dipolo-dipolo?',
        alternativas: ['propano (231 K)','acetonitrila (355K)','dimetil éter (248K)','butano (135 K)'],
        correta: 1
    },
    {
        titulo: 'Qual das seguintes substâncias é capaz de realizar ligação de hidrogênio?',
        alternativas: ['XeF₄','AsH₃','Cl₂','CO₂'],
        correta: 1
    },
    {
        titulo: 'A ligação de hidrogênio é um caso especial de _________ ',
        alternativas: ['interação íon-dipolo','interação dipolo induzido','interação dipolo-dipolo','nenhuma das alternativas'],
        correta: 2
    },
    {
        titulo: 'Quando NaCl se dissolve em água, resultam íons Na⁺ e Cl⁻ aquosos. A força da atração que existe entre Na⁺ e H₂O é chamada de interação __________',
        alternativas: ['dipolo-dipolo','íon-íon','ligação de hidrogênio','íon-dipolo'],
        correta: 3
    },
    {
        titulo: 'Qual é a força intermolecular mais importante na molécula de acetona (CH₂O)?',
        alternativas: ['ligação de hidrogênio','dipolo-dipolo','dipolo induzido','nenhuma das anteriores'],
        correta: 1
    },
    {
        titulo: 'Das seguintes substâncias, apenas __________ tem forças do London (dipolo induzido) como sua única força intermolecular.',
        alternativas: ['CH₃OH','NH₃','H₂S','CH₄'],
        correta: 3
    },
    {
        titulo: 'A força intermolecular predominante na interação CH₃–NH-CH₃ é __________ ',
        alternativas: ['dipolo induzido','dipolo-dipolo','ligação de hidrogênio','nenhuma das anteriores'],
        correta: 2
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
        gameOver.removeEventListener("click",()=>{
            this.start();
        },false);
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
    
    checaResposta: function(user){
        if(this.qatual.correta == user){
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
        scoreDiv.textContent = `Sua pontuação: ${this.Totalpontos} / 10`;
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