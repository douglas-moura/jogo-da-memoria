// nome e código das imagens 
const imagens = ["luff", "zoro", "nami", "usop", "sanj", "chop", "robi", "fran", "broo", "jinb"];
// sessão e quadro de imagens
const quadroJogo = document.querySelector("section#quadro-jogo");
const conteudo = document.querySelector("container#quadro-jogo-grid");
// box de parabenização e película
let blocoParabens = document.querySelector("section#blocoParabens");
let pelicula = document.querySelector("div#pelicula");
// campo do tempo, cronometro e variável de tempo jogado
const timer = document.querySelector("span#tempo");
let cronometro = null;
let tempoJogado = 0;
// campo de pontos e variável de pontos do usuário
const ponts = document.querySelector("span#pontos");
let pontuacao = 0;
// variáveis para guardar as imagens selecionada que irão ser comparadas
let primeiraImg = null;
let segundaImg = null;
// quantidade de acertos do usuário
let acertos = 0;

function iniciarJogo() {
	// misturando imagens
    let imgEmbaralhadas = embaralharImagens(imagens);
    // criando um container com a galeria de imagens embaralhadas
    imgEmbaralhadas.forEach(el => {
        conteudo.innerHTML += `
        	<div onclick='mostraImagem("${el.id}", "${el.cod}")' id="quadro-${el.id}" class="quadro flip-container pointer-events-none">
        		<div id="flip-${el.id}" class="flip cod-${el.cod} relative w-full h-full transition duration-800 transform preserve-3d">
					<img id="img-${el.id}" class="front-img absolute m-auto rounded transform transition" src='./src/assets/img/${el.cod}.jpg'>
					<img id="img-back-${el.id}" class="back-img absolute h-full m-auto rounded transform transition" src='./src/assets/img/images.png'>
				</div>
			</div>`;
    });
	// adiciando estilo ao container
    conteudo.classList.add("quadro-conteudo");
    // coloca o container na sessao
    quadroJogo.appendChild(conteudo);
    // revela a sessao e executa efeito de entrada após 0.5seg
    quadroJogo.classList.remove("hidden");
    setTimeout(function () {
        quadroJogo.classList.remove("quadro-oculto");
    }, 500);
    // inicia cronometro
    cronometrarJogo();
    // tempo inicial para decorar posição das imagens
    setTimeout(function () {
    	// desbloqueia as imagens após o tempo inicial
        let boxs = document.querySelectorAll("div.quadro");
        boxs.forEach(el => { el.classList.remove("pointer-events-none"); });
        // oculta imagens
        let imgs = document.querySelectorAll("div.flip");
        imgs.forEach(el => { el.classList.add("flipper"); });
    }, 3000);
}

function cronometrarJogo() {
	// cronometro do jogo
    cronometro = setInterval(function () {
        tempoFormat = NumToTime(tempoJogado);
        timer.innerHTML = "Tempo: " + tempoFormat;
        tempoJogado++;
    }, 1000);
}

function NumToTime(num) {
	// código para converter numero em formato de tempo
	// código de terceiros
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    if (minutes + "".length < 10) {
        minutes = "0" + minutes;
    }
    if (hours + "".length < 10) {
        hours = "0" + hours;
    }
    return hours + ":" + minutes;
}

function embaralharImagens(array) {
	// código para embaralhar imagens
	// código de terceiros
	
    // duplicando valores do array de imagens
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        novoArray.push({ cod: array[i] }, { cod: array[i] });
    }
    for (let j = 0; j < novoArray.length; j++) {
        novoArray[j].id = j;
    }
    // embaralha array duplicado
    let m = novoArray.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = novoArray[m];
        novoArray[m] = novoArray[i];
        novoArray[i] = t;
    }
    return novoArray;
}

function mostraImagem(id, cod) {
	// pega a div de flip de acordo com a id
	let imgSelect = document.querySelector(`div#flip-${id}`);
	// verifica se a segunda imagem já foi selecionada
	// com isto não é permitido o usuário selecionar uma terceira imagem enquanto se compara as duas primeiras
	if(segundaImg == null) {
	    if (primeiraImg == null) {
	    	// verifica se o espaço para a primeira imagem esta vazio
	    	// se true então a imagem selecionada será guardada aqui e girada
	        primeiraImg = imgSelect;
	    	imgSelect.classList.toggle("flipper");
	    } else {
	    	// caso já haja uma primeira imagem passamos para cá
	    	if(imgSelect.getAttribute('id') != primeiraImg.getAttribute('id')) {
	    		// verifica se a ID da imagem selecionada for igual a primeira imagem já guardada
	    		// isso evita que o usuário salve o mesmo quadro nas duas variáveis
	    		// se true então a imagem selecionada será guardada aqui e girada
	        	segundaImg = imgSelect;
	    		imgSelect.classList.toggle("flipper");
	    	}
	    }
	    // verifica se a segunda (e a primeira) imagem foi selecionada 
	    if (segundaImg !== null) {
	    	// comparar imagens (primeira img selecionada, segunda img selecionada, codigo da segunda img)
	        comparaImagens(primeiraImg, segundaImg, cod);
	        // confere a quantidade de acertos a cada comparação de imagens
	        contaAcertos();
	    }
	}
}

function comparaImagens(img1, img2, cod) {
	// verifica se a primeiraImg tem o mesmo código da segundaImg
    if (img1.classList.contains("cod-" + cod)) {
    	// seleciona as duas imagens com o mesmo código
        let par = document.querySelectorAll(`div#flip-${cod}`);
        // mantem as imagena reveladas
        par.forEach(img => {
            img.classList.add("block");
        });
        // adicona mais um acerto
        acertos++;
        // reseta as variáveis de primeira e segunda imagem para uma nova comparação
        primeiraImg = null;
        segundaImg = null;
        // chama a função de pontuação passando 250 pontos como parâmetro
        contarPontos(250, tempoJogado);
        return true;
    } else {
    	// caso o código da primeiraImg nào seja igual ao código da segundaImg selecionamos as IDs das imagens "erradas"
        let imgErrada01 = document.getElementById(`${primeiraImg.getAttribute("id")}`);
        let imgErrada02 = document.getElementById(`${segundaImg.getAttribute("id")}`);
        setTimeout(function () {
        	// oculta novamente as imagens "erradas"
            imgErrada01.classList.toggle("flipper");
            imgErrada02.classList.toggle("flipper");
        	// reseta as variáveis de primeira e segunda imagem para uma nova comparação
            primeiraImg = null;
            segundaImg = null;
        }, 700);
        return false;
    }
}

function contarPontos(pts, temp) {
	// recebe 250 pontos como parâmetro e divide pelo tempo atual e multiplica por 100
	// quanto mais tempo o jogador leva para concluir, maior o número que dividirá os 250 pontos
    pontuacao += (pts / temp) * 100;
    ponts.innerHTML = "Pontos: " + Math.floor(pontuacao).toLocaleString("pt-BR");
}

function contaAcertos() {
	// verifica se a quantidade de acertos do usuário bate com a quantidade de imagens
    if (acertos == imagens.length) {
    	// cria e coloca 2 parágrafos e um botão no box de parabenização
        blocoParabens.innerHTML += `
        	<p id='tempo-final' class='w-full flex justify-between my-2'><strong>Seu tempo:</strong> ${NumToTime(tempoJogado)}</p>
        	<p id='pontos-final' class='w-full flex justify-between my-2'><strong>Pontuação:</strong> ${Math.floor(pontuacao).toLocaleString("pt-BR")}</p>
        	<button id='btn-reiniciar' class='bg-yellow-400 p-4 rounded-lg text-sm font-extrabold text-yellow-800 mt-12' onclick='reiniciarJogo()'>Jogar Novamente</button>
        `;
        // revela o box de parabenização
        blocoParabens.classList.remove("hidden");
        setTimeout(function () {
        	// para o cronometro
            clearInterval(cronometro);
            // revela o box de parabenização com efeito de entrada ao tirar a classe de ocultar
            blocoParabens.classList.remove("bloco-parabens-oculto");
            // revela a pelicula de fundo do box de parabenização
            pelicula.classList.remove("hidden");
        }, 500);
    }
}

function reiniciarJogo() {
	// resetando as variáveis, conteúdos e os estados dos elementos
    blocoParabens.classList.add("hidden");
    // oculta o quadro do jogo com efeito de saída
    quadroJogo.classList.add("quadro-oculto");
    // oculta a pelicula do box de parabenização
    pelicula.classList.add("hidden");
    setTimeout(function () {
    	// remove a quadro do jogo e remove o conteúdo (quadro de imagens)
        quadroJogo.classList.add("hidden");
        quadroJogo.removeChild(conteudo);
        conteudo.innerHTML = "";
        // oculta box de parabenização com efeito de saída e remove seus elementos
        blocoParabens.classList.add("bloco-parabens-oculto");
        blocoParabens.removeChild(document.querySelector("p#tempo-final"));
        blocoParabens.removeChild(document.querySelector("p#pontos-final"));
        blocoParabens.removeChild(document.querySelector("button#btn-reiniciar"));
        // zera tempo e pontuação
        ponts.innerHTML = "Pontos: " + "0";
        timer.innerHTML = "Tempo: " + "00:00";
        // reseta variáveia de valores
        pontuacao = 0;
        tempoJogado = 0;
        acertos = 0;
    }, 500);
}